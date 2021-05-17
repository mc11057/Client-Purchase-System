import { Injectable } from '@angular/core';
import { FacturaOrdenPago } from '../_models/factura_orden_pago';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturaOrdenPagoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<FacturaOrdenPago>>(`${environment.apiUrl}/app/v1/facturaordenpago` )
        .pipe(map(facturas => {
            return facturas;  
        }));
  }
}
