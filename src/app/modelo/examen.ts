import { Asignatura } from "./asignatura";
import { Generico } from "./generico";
import { Pregunta } from "./pregunta";

export class Examen implements Generico{
    id:number;
    nombre:string;
    fecha:string;
    preguntas:Pregunta[]=[];
    asignaturaPadre:Asignatura= new Asignatura;
    asignaturaHija:Asignatura= new Asignatura;
    respondido:boolean;
}
