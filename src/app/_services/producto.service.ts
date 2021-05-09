import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../_models/producto';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }


  findByCategory(categoriaId:number) {
    return this.http.get<Array<Producto>>(`${environment.apiUrl}/app/v1/producto/porcategoria/${categoriaId}` )
        .pipe(map(producto => {
            return producto;  
        }));
}
}
