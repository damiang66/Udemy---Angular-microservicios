import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoFormComponent } from './componentes/alumnos/alumno-form/alumno-form.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ExamenesComponent } from './componentes/examenes/examenes.component';

const routes: Routes = [
{path:"",pathMatch:'full',redirectTo:'cursos'},
{path:'alumnos',component:AlumnosComponent},
{path:'alumnos/form',component:AlumnoFormComponent},
{path:'alumnos/form/:id',component:AlumnoFormComponent},
{path:'cursos',component:CursosComponent},
{path:'examenes',component:ExamenesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
