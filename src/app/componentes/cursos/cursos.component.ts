import { Component } from '@angular/core';
import { Curso } from 'src/app/modelo/curso';
import { CursoService } from 'src/app/service/curso.service';
import { ComunListarComponent } from '../comun-listar.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent extends ComunListarComponent<Curso,CursoService> {
constructor(service:CursoService){
  super(service);
  this.titulo='Listado de Curso'
  this.nombreModel= Curso.name;
}
}
