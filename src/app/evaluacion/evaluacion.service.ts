import { Injectable } from '@angular/core';
import {Evaluacion} from './evaluacion'


@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
	public evaluaciones: Evaluacion[];
  constructor() { 
  	this.evaluaciones = [];
  }

  add(evaluacion: Evaluacion){
  	this.evaluaciones.push(evaluacion);
  }
  
  mostrar(){
  	return this.evaluaciones;
  }
  
  delete(nombre_eva:string){
  	this.evaluaciones = this.evaluaciones.filter(p => p.nombre !== nombre_eva);
  	return this.evaluaciones;
  }
}
