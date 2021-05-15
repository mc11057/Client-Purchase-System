import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Proveedor } from '../_models/proveedor';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }


  
  getAll() {
    return this.http.get<Array<Proveedor>>(`${environment.apiUrl}/app/v1/proveedor` )
        .pipe(map(proveedor => {
            return proveedor;  
        }));
}


}
