import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ComunFormComponent } from '../componentes/comun-form.component';
import { CursoService } from '../service/curso.service';
import { Curso } from './../modelo/curso';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent extends ComunFormComponent<Curso,CursoService>  {
constructor(service:CursoService,router:Router,ruta:ActivatedRoute){
super(service,router,ruta);
this.titulo='Crear Curso';
this.model= new Curso();
this.redireccion='/cursos'
this.nombreModel= Curso.name;
}
}
