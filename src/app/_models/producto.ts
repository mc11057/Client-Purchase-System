import { PedidoProducto } from "./pedido_producto";
import { TipoProducto } from "./tipo_producto";

export class Producto {
    productoId: number;
    existenciaId: number;
    vencimientoProductoId: number;
    categoriaProductoId: number;
    producto: Array<PedidoProducto>;
    nombre: string;
    tipoProducto: TipoProducto;

}