import { PedidoProducto } from "./pedido_producto";

export class Producto {
    productoId: number;
    existenciaId: number;
    vencimientoProductoId: number;
    categoriaProductoId: number;
    producto: Array<PedidoProducto>;
    nombre: string;
    tipoProductoId: number;

}