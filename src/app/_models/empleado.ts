import { CategoriaProductoService } from "../_services/categoria-producto.service";
import { Horario } from "./horario";
import { Nacionalidad } from "./nacionalidad";
import { Sucursal } from "./sucursal";

export class Empleado {
    empleadoId: number;
    sucursal: Sucursal;
    horario: Horario;
    nacionalidad: Nacionalidad;
    categoriaEmpleado: CategoriaProductoService;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento:Date;
    fechaContratacion:Date;
    fechaFinContrato:Date;
    numeroTelefono: string;
    email:string;

}