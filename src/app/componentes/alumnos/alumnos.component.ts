import { Component, OnInit } from '@angular/core';
import { BASE_ENDPOINT } from 'src/app/config/app';

import { Alumno } from 'src/app/modelo/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

import { ComunListarComponent } from '../comun-listar.component';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent 
extends ComunListarComponent<Alumno,AlumnoService> implements OnInit {
  baseEndpoint =BASE_ENDPOINT + '/alumnos'
  public override titulo: string = 'Listado de Alumnos';
  protected override nombreModel='Alumno';
  
  constructor(service: AlumnoService) {
  super(service)
  }
  
}
