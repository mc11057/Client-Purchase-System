import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoProducto } from '../_models/pedido_producto';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoDetailService {

  constructor(private http: HttpClient) { }

  
  getProductsbyPedidoId(pedidoId:number) {
    return this.http.get<Array<PedidoProducto>>(`${environment.apiUrl}/app/v1/pedido-detail/${pedidoId}` )
        .pipe(map(pedidoProductos => {
            return pedidoProductos;  
        }));
}
}
