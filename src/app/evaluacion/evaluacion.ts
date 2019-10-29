export class Evaluacion {
	nombre: string;
	valor: number;
	calificado:boolean;
	porcentaje:number;
	calificacion:number;
	is_new: boolean;
	constructor() {
		this.is_new = true;
		this.calificado = false;
	}
}
