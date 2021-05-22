import { Component, Input, OnInit } from '@angular/core';
import { FacturaOrdenPago } from '../_models/factura_orden_pago';
import { FormaPago } from '../_models/forma_pago';
import { first } from 'rxjs/operators';
import { PagoFacturaOrdenPagoService } from '../_services/pago-factura-orden-pago.service';
import { Pago } from '../_models/pago';
import { ApplicationUser } from '../_models/applicationuser';
import { Moneda } from '../_models/moneda';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
  pagos: Array<Pago> = new Array();
  ejecutarPagos = false;
  monedas :Array<Moneda> = new Array();
  totalSelected:number=0;

  
  @Input() factura: FacturaOrdenPago; 
  constructor(private pagoFacturaService:PagoFacturaOrdenPagoService, private modalService: NgbModal,private router: Router) { }

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
      this.pagoFacturaService.getMonedas().pipe(first())
      .subscribe(
        data => {
          this.monedas = data;
        },
        error => {
        });
  }
  onChangeSelect(){
    if(this.monto && this.formaDePagoSelected){ this.mostrarBotonAgregar = true}
  }
  agregar(){
    
    let pago = this.createPago();
    let addPayment = true;
    if(this.pagos.length == 0)
    {
      this.pagos.push(pago);
    }else{
      this.pagos.forEach( element => {
        if (element.formaPagoId == pago.formaPagoId)
        {
          element.monto += pago.monto;
          addPayment = false;
        }
      });
      if(addPayment) this.pagos.push(pago);
    }
    this.calcularTotales();
  }
  createPago(){
    let pago = new Pago;
    let user: ApplicationUser = JSON.parse(localStorage.getItem('currentUser')!); 
    let moneda: Moneda = this.monedas[0];
    pago.userCreate = user.username;
    pago.monedaId = moneda;
    pago.formaPagoId = this.formaDePagoSelected;
    pago.monto = this.monto;
    pago.facturaOrdenPagoId = this.factura;
    return pago;
  }
  eliminar(pago:Pago){
    let newList: Array<Pago> = new Array();
    this.pagos.forEach( element => {
      if(element.formaPagoId != pago.formaPagoId) { newList.push(element);}
    });
    this.pagos = newList;
    this.calcularTotales();
  }
  guardarPagos(){
    this.loading = true;
    this.pagoFacturaService.guardarPagos(this.pagos).pipe(first())
    .subscribe(
      data => {
        this.loading = false;
        this.modalService.dismissAll();
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/factura-orden-pago']);
      },
      error => {
      });
  }
  calcularTotales(){
  this.totalSelected = 0;
    this.pagos.forEach( element => {
      this.totalSelected += element.monto;
    });
    if(this.totalSelected == this.factura.monto) { 
      this.ejecutarPagos = true; 
      this.mostrarBotonAgregar = false;
    }else{
      this.ejecutarPagos = false; 
      this.mostrarBotonAgregar = true;
    }
  }

}
