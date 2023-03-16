import { Alumno } from "./alumno";
import { Examen } from "./examen";
import { Generico } from "./generico";

export class Curso implements Generico {
    id:number;
    nombre:string;
    fecha:string;
    alumnos:Alumno[]=[];
    examenes:Examen[]=[];
}
