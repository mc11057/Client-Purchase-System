import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../_models/producto';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { CategoriaProducto } from '../_models/categoria_producto';


@Injectable({
  providedIn: 'root'
})
export class CrearPedidoService {

  constructor(private http: HttpClient) { }


}
