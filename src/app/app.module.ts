import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { EvaluacionService } from './evaluacion/evaluacion.service';
import { EvaluacionEstudianteComponent } from './evaluacion-estudiante/evaluacion-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    EstudianteComponent,
    EvaluacionComponent,
    EvaluacionEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EvaluacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
