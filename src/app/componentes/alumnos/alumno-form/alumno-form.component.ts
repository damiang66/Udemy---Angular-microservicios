import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/modelo/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

titulo = "Crear Alumno";
alumno:Alumno=new Alumno();
error: any;
constructor(private service:AlumnoService,private router:Router,private ruta:ActivatedRoute){

}
ngOnInit(): void {
 this.ruta.paramMap.subscribe(data=>{
  const id:number = +data.get('id');
  if(id){
    this.service.ver(id).subscribe(data=>{
      this.alumno=data;
    })
  }
 })
}
public guardar():void{
  this.service.crear(this.alumno).subscribe(data=>{
    this.alumno=data;
    console.log(data);
    
    alert(`Alumno ${data.nombre} creado con exito`);
    this.router.navigate(['/alumnos']);
  },err=>{
    if(err.status===400){
      this.error=err.error
      console.log(this.error);
      
    }
  });
  

}

public editar():void{
  this.service.editar(this.alumno).subscribe(data=>{
    this.alumno=data;
    console.log(data);
    
    alert(`Alumno ${data.nombre} editado con exito`);
    this.router.navigate(['/alumnos']);
  },err=>{
    if(err.status===400){
      this.error=err.error
      console.log(this.error);
      
    }
  });
  

}

}
