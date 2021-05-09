import { Empleado } from "./empleado";
import { PedidoProducto } from "./pedido_producto";
import { ProgresoPedido } from "./progreso_pedido";

export class Pedido {
    pedidoId: number;
    productos: Array<PedidoProducto>;
    progresoPedido:ProgresoPedido;
    empleado:Empleado;

}