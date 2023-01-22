import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ExamenesComponent } from './componentes/examenes/examenes.component';
import { LayoutModule } from './layout/layout.module';
import{HttpClientModule} from '@angular/common/http';
import { AlumnoFormComponent } from './componentes/alumnos/alumno-form/alumno-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    CursosComponent,
    ExamenesComponent,
    AlumnoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
