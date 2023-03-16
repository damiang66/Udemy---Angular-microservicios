import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunFormComponent } from '../componentes/comun-form.component';
import { Asignatura } from '../modelo/asignatura';
import { Examen } from '../modelo/examen';
import { Pregunta } from '../modelo/pregunta';
import { ExamenService } from '../service/examen.service';

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.css']
})
export class ExamenFormComponent extends ComunFormComponent<Examen, ExamenService> {
  asignaturaPadre: Asignatura[] = [];
  asignaturaHija: Asignatura[] = [];
  constructor(service: ExamenService, router: Router, ruta: ActivatedRoute) {
    super(service, router, ruta);
    this.titulo = 'Crear Examen'
    this.model = new Examen();
    this.nombreModel = Examen.name;
    this.redireccion = '/examenes';
  }
  override ngOnInit(): void {
    this.ruta.paramMap.subscribe(data => {
      const id: number = +data.get('id');
      if (id) {
        this.service.ver(id).subscribe(data => {
          this.model = data;
          this.service.findAllAsignatura().subscribe(a =>
            this.asignaturaHija = a.filter(a => a.padre && a.padre.id === this.model.asignaturaPadre.id)
          )
        })
      }
    });
    this.service.findAllAsignatura().subscribe(asignatura => {
      this.asignaturaPadre = asignatura.filter(a => !a.padre);
      this.asignaturaHija = asignatura.filter(e => e.padre);
    })
  }

  llenarHijos() {
    this.service.findAllAsignatura().subscribe(a => this.asignaturaHija = a.filter(e => e.padre))
    //this.asignaturaHija= this.model.asignaturaPadre?this.model.asignaturaPadre.hijos:[];
    //this.service.findAllAsignatura().subscribe(asignatura=>
    //this.asignaturaHija=asignatura.filter(e=> e.padre && e.padre.id === this.model.asignaturaPadre.id)



    //)
    console.log(this.asignaturaHija);

  }
  compararAsignatura(a1: Asignatura, a2: Asignatura): boolean {
    if (a1 === undefined && a2 === undefined) {
      return true;
    }
    if (a1 === null || a2 === null || a1 === undefined || a2 === undefined) {
      return false;
    }
    if (a1.id === a2.id) {
      return true;
    }
    return false;
  }
agregarPreguntas(){
  this.model.preguntas.push(new Pregunta);

}  
asignarTexto(pregunta:Pregunta,event:any){
pregunta.texto = event.target.value as string;
console.log(this.model);

}

}
