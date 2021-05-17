import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { FormaPago } from '../_models/forma_pago';
@Injectable({
  providedIn: 'root'
})
export class PagoFacturaOrdenPagoService {

  constructor(private http:HttpClient) { }


  obtenerFormasDePago() {
    return this.http.get<Array<FormaPago>>(`${environment.apiUrl}/app/v1/formapago` )
        .pipe(map(formasDePagos => {
            return formasDePagos;  
        }));
  }
}
