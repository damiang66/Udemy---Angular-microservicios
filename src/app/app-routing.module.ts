import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoFormComponent } from './componentes/alumnos/alumno-form/alumno-form.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ExamenesComponent } from './componentes/examenes/examenes.component';
import { CursoFormComponent } from './cursos/curso-form.component';
import { ExamenFormComponent } from './examenes/examen-form.component';

const routes: Routes = [
{path:"",pathMatch:'full',redirectTo:'cursos'},
{path:'alumnos',component:AlumnosComponent},
{path:'alumnos/form',component:AlumnoFormComponent},
{path:'alumnos/form/:id',component:AlumnoFormComponent},
{path:'cursos',component:CursosComponent},
{path:'cursos/form',component:CursoFormComponent},
{path:'cursos/form/:id',component:CursoFormComponent},
{path:'examenes',component:ExamenesComponent},
{path:'examenes/form',component:ExamenFormComponent},
{path:'examenes/form/:id',component:ExamenFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
