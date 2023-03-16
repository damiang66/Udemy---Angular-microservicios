import { OnInit, Directive } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2'
import { ComunService } from '../service/comun.service';
import { Generico } from './../modelo/generico';
@Directive()
export abstract class ComunFormComponent<E extends Generico,S extends ComunService<E>> implements OnInit {

titulo:string;
model:E;
error: any;
protected redireccion:string;
protected  nombreModel:string;
constructor(protected service:S,protected router:Router,protected ruta:ActivatedRoute){

}
ngOnInit(): void {
 this.ruta.paramMap.subscribe(data=>{
  const id:number = +data.get('id');
  if(id){
    this.service.ver(id).subscribe(data=>{
      this.model=data;
    })
  }
 })
}
public guardar():void{
  console.log("Hola que haces hdp");
  
  console.log(this.model);
  
  this.service.crear(this.model).subscribe(data=>{
    this.model=data;
    console.log(data);
    
    Swal.fire('Nuevo: ',`${this.nombreModel} ${data.nombre} creado con exito`,'success');
    this.router.navigate([this.redireccion]);
  },err=>{
    if(err.status===400){
      this.error=err.error
      console.log(this.error);
      
    }
  });
  

}

public editar():void{
  this.service.editar(this.model).subscribe(data=>{
    this.model=data;
    console.log(data);
    
    Swal.fire('Modificado: ',`${this.nombreModel} ${data.nombre} modificado con exito`,'success');
    this.router.navigate([this.redireccion]);
  },err=>{
    if(err.status===400){
      this.error=err.error
      console.log(this.error);
      
    }
  });
  

}

}
