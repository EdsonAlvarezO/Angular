import { Component, OnInit } from '@angular/core';

import {Evaluacion} from '../evaluacion/evaluacion';
import { EvaluacionService } from '../evaluacion/evaluacion.service';

@Component({
  selector: 'app-evaluacion-estudiante',
  templateUrl: './evaluacion-estudiante.component.html',
  styleUrls: ['./evaluacion-estudiante.component.css']
})
export class EvaluacionEstudianteComponent implements OnInit {
	public evaluaciones : Evaluacion[];
	public current_eva: Evaluacion;
  public notaFinal:number;
  public evaluado:boolean;
  public aprobado:boolean;
  public reprobado:boolean;


  constructor(private service: EvaluacionService) {
      this.aprobado = false;
      this.reprobado = false;
      this.evaluado = false;
      this.notaFinal =0;
   }

  ngOnInit() {
  	this.evaluaciones = this.service.mostrar();
  	this.current_eva = new Evaluacion();
  }
  

  edit(evaluacion){
  	this.current_eva = evaluacion;
  	this.current_eva.calificado = true;
  	this.current_eva.porcentaje = this.sacarPorcentaje();
  }

  sacarPorcentaje():number{
  	let porcentaje:number;
  	porcentaje = ((this.current_eva.calificacion*this.current_eva.valor)/100);
  	return porcentaje;
  }

  sacarNota():number{
    if(this.validarEvaluaciones()){
          for (var i = this.evaluaciones.length - 1; i >= 0; i--) {
              this.notaFinal += this.evaluaciones[i].porcentaje;
                }
     }else{
        return;
     }
    if(this.notaFinal >= 75){
      this.aprobado = true;
    }else{
      this.reprobado = true;
    }
    this.evaluado = true;
      return this.notaFinal;
  }

  validarEvaluaciones():boolean{
    if(this.evaluaciones.length===0 || this.evaluaciones.length ==null){
      alert("Este curso no tiene rubros");
      return false;
    }
    for (var i = this.evaluaciones.length - 1; i >= 0; i--) {
      if(!this.evaluaciones[i].calificado){
        alert("Califica todos los rubros");
        return false;
            }
      
        }
        return true;
   }
}

