import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Empleado } from '../_models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  getEmployeeByUserID(userId:number) {
    return this.http.get<Empleado>(`${environment.apiUrl}/app/v1/empleado/porUsuario/${userId}` )
        .pipe(map(pedido => {
            return pedido;  
        }));
}
}
