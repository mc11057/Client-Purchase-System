import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { FormaPago } from '../_models/forma_pago';
import { Pago } from '../_models/pago';
import { Moneda } from '../_models/moneda';
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
  guardarPagos(pagos:Array<Pago>) {
    return this.http.post<any>(`${environment.apiUrl}/app/v1/pago`,pagos )
        .pipe(map(response => {
            return response;  
        }));
  }
  getMonedas() {
    return this.http.get<Array<Moneda>>(`${environment.apiUrl}/app/v1/moneda` )
        .pipe(map(monedas => {
            return monedas;  
        }));
  }

}
