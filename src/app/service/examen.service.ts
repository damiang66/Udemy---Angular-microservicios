import { Injectable } from '@angular/core';
import { Examen } from '../modelo/examen';
import { ComunService } from './comun.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from '../config/app';
import { Observable } from 'rxjs';
import { Asignatura } from '../modelo/asignatura';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends ComunService<Examen> {
 protected override baseEndpoint = BASE_ENDPOINT + '/examenes';
  constructor(http:HttpClient) {
    super(http);
  }
  public findAllAsignatura():Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(`${this.baseEndpoint}/asignaturas`);
  }
 
}
