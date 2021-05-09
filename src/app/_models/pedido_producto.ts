import { Pedido } from "./pedido";
import { PedidoProductoKey } from "./pedido_producto_key";
import { Producto } from "./producto";

export class PedidoProducto {
    id: PedidoProductoKey
    pedido:Pedido;
    producto:Producto;
    cantidad:number;
}