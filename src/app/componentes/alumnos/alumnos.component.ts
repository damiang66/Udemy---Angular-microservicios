import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[];
  public titulo: string = 'Listado de Alumnos';
  constructor(private service: AlumnoService) {

  }
  ngOnInit(): void {
    this.service.listar().subscribe(data => {
      this.alumnos = data;
    });
  }
}
