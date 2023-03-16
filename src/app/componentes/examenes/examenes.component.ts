import { Component } from '@angular/core';
import { Examen } from 'src/app/modelo/examen';
import { ExamenService } from 'src/app/service/examen.service';
import { ComunListarComponent } from '../comun-listar.component';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent  extends ComunListarComponent<Examen, ExamenService>{
constructor(service:ExamenService){
  super(service)
  this.nombreModel=Examen.name;
  this.titulo= 'Listar Examen';
  
}
}
