import { Component, Input, OnInit } from '@angular/core';
import { FacturaOrdenPago } from '../_models/factura_orden_pago';
import { FormaPago } from '../_models/forma_pago';
import { first } from 'rxjs/operators';
import { PagoFacturaOrdenPagoService } from '../_services/pago-factura-orden-pago.service';
@Component({
  selector: 'app-pagar-factura-orden-pago',
  templateUrl: './pagar-factura-orden-pago.component.html',
  styleUrls: ['./pagar-factura-orden-pago.component.css']
})
export class PagarFacturaOrdenPagoComponent implements OnInit {
  
  formaDePagoSelected: FormaPago;
  formasDePago: Array<FormaPago> = new Array();
  mostrarBotonAgregar = false;
  monto:number;
  loading = false;

  
  @Input() factura: FacturaOrdenPago; 
  constructor(private pagoFacturaService:PagoFacturaOrdenPagoService) { }

  ngOnInit(): void {
    this.loading = false;
    this.pagoFacturaService.obtenerFormasDePago().pipe(first())
    .subscribe(
      data => {
        this.loading = false;
        this.formasDePago = data;
      },
      error => {
      });
  }
  onChangeSelect(){

  }
  agregar(){

  }

}
