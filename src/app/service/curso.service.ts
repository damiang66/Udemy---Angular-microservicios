import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_ENDPOINT } from '../config/app';
import { Curso } from '../modelo/curso';
import { ComunService } from './comun.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends ComunService<Curso> {
  protected override baseEndpoint= BASE_ENDPOINT+'/cursos';
  constructor(protected override http: HttpClient) {
    super(http);
   }
}
