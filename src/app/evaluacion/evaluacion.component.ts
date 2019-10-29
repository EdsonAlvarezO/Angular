import { Component, OnInit } from '@angular/core';


import { Evaluacion } from './evaluacion';
import { EvaluacionService } from './evaluacion.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
	public evaluaciones : Evaluacion[];
	public mostrar_form = false;
	public current_eva: Evaluacion;

  constructor(private service: EvaluacionService) {
   }

  ngOnInit() {
  	this.evaluaciones = this.service.mostrar();
  	this.current_eva = new Evaluacion();
  }
  
  edit(evaluacion){
  	this.mostrar_form = true;
  	this.current_eva = evaluacion;
  	this.current_eva.is_new = false;
  }

  add(){
  	this.mostrar_form = true;
  	this.current_eva = new Evaluacion();
  }
  
  save(){
    if(this.validar_text()){
    	this.mostrar_form = false;
    	if(this.current_eva.is_new){
    		this.service.add(this.current_eva);
    	}
    }
  }

  delete(evaluacion){
  	this.evaluaciones = this.service.delete(evaluacion.nombre);
  }

  validar(){
    let porcentaje_total = 0;
    for (var i = this.evaluaciones.length - 1; i >= 0; i--) {
      porcentaje_total += this.evaluaciones[i].valor;
    }
    if (porcentaje_total === 100) {
      alert("Evaluacion registrada con exito")
       
    }else{
       alert("La suma de porcentajes de los rubros debe ser igual a 100")
    }
    
  }

  public validar_text():boolean{
    if(this.current_eva.nombre != "" && this.current_eva.valor != 0 && this.current_eva.valor != null){
      if(this.current_eva.valor < 0 || this.current_eva.valor > 100){
      alert("El porcentaje debe ser mayor a 0 y menor que 100")
      return false; 
    }
      return true;
    }
    
    alert("Por favor llenar todo el formulario!")
    return false;

  }

  cancelar(){
    this.mostrar_form = false;
    return;
  }

}
