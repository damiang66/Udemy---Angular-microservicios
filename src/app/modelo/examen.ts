import { Asignatura } from "./asignatura";
import { Pregunta } from "./pregunta";

export class Examen {
    id:number;
    nombre:string;
    fecha:string;
    preguntas:Pregunta[]=[];
    asignatura:Asignatura;
    respondido:boolean;
}
