import { Injectable } from '@angular/core';
import { ProductoProveedor } from '../_models/producto_proveedor';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorProductoService {

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<Array<ProductoProveedor>>(`${environment.apiUrl}/app/v1/producto-proveedor` )
        .pipe(map(productoProveedor => {
            return productoProveedor;  
        }));
}

save(productoProveedor:ProductoProveedor) {
  return this.http.post<any>(`${environment.apiUrl}/app/v1/producto-proveedor`,productoProveedor )
      .pipe(map(response => {
          return response;  
      }));
}
}
