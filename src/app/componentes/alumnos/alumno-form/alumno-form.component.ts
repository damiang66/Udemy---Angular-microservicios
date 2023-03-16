import { Component, OnInit } from '@angular/core';

import { Alumno } from 'src/app/modelo/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

import { ComunFormComponent } from '../../comun-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent
  extends ComunFormComponent<Alumno, AlumnoService>
  implements OnInit {
  private fotoSeleccionada: File;
  constructor(service: AlumnoService, router: Router, ruta: ActivatedRoute) {
    super(service, router, ruta);
    this.titulo = 'Crear Alumno'
    this.model = new Alumno();
    this.redireccion = '/alumnos';
    this.nombreModel = 'Alumno'
  }
  seleccionFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image')<0){
      this.fotoSeleccionada=null;
      Swal.fire('Error al seleccionar la foto: ', 
      'El archivo debe ser un archivo de image',
      'error')
    }
  }
  public override guardar(): void {
    if (!this.fotoSeleccionada) {
      super.guardar();
    } else {
      this.service.crearConFoto(this.model, this.fotoSeleccionada).subscribe(data => {
        this.model = data;
        console.log(data);

        Swal.fire('Nuevo: ', `${this.nombreModel} ${data.nombre} creado con exito`, 'success');
        this.router.navigate([this.redireccion]);
      }, err => {
        if (err.status === 400) {
          this.error = err.error
          console.log(this.error);

        }
      });
    }
  }
  public override editar(): void {
    if (!this.fotoSeleccionada) {
      super.editar();
    } else {
      this.service.editarConFoto(this.model, this.fotoSeleccionada).subscribe(data => {
        this.model = data;
        console.log(data);

        Swal.fire('Modificado ', `${this.nombreModel} ${data.nombre} actualizado con exito`, 'success');
        this.router.navigate([this.redireccion]);
      }, err => {
        if (err.status === 400) {
          this.error = err.error
          console.log(this.error);

        }
      });
    }
  }
}
