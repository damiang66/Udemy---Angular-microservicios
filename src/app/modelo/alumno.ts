import { Generico } from "./generico";

export class Alumno  implements Generico{
    id:number;
    nombre:string;
    apellido:string;
    email:string;
    fecha:string;
    fotoHashCode:number;
}
