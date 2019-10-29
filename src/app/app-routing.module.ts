import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso/curso.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { EvaluacionEstudianteComponent } from './evaluacion-estudiante/evaluacion-estudiante.component';



const routes: Routes = [
	{ path: '', component: CursoComponent },
	{ path: 'estudiantes', component: EstudianteComponent },
	{ path: 'evaluacion', component: EvaluacionComponent },
	{ path: 'evaluacion-estudiante', component: EvaluacionEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
