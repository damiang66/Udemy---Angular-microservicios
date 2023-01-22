import { Alumno } from "./alumno";
import { Pregunta } from "./pregunta";

export class Respuesta {
    id: String;
    texto: string;
    alumno: Alumno;
    pregunta:Pregunta;
}
