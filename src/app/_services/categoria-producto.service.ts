import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { CategoriaProducto } from '../_models/categoria_producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProductoService {

  constructor(private http: HttpClient) { }


  
  getAll() {
    return this.http.get<Array<CategoriaProducto>>(`${environment.apiUrl}/app/v1/categoriaproducto` )
        .pipe(map(categoria => {
            return categoria;  
        }));
}
}
