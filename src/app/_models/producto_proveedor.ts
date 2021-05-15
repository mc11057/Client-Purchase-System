import { Producto } from "./producto";
import { ProductoProveedorKey } from "./producto_proveedor_key";
import { Proveedor } from "./proveedor";

export class ProductoProveedor {
    id: ProductoProveedorKey;
   proveedor: Proveedor;
   producto: Producto;
   precio:number;

}