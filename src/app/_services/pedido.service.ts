import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../_models/pedido';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Array<Pedido>>(`${environment.apiUrl}/app/v1/pedido` )
        .pipe(map(pedido => {
            return pedido;  
        }));
}
}
