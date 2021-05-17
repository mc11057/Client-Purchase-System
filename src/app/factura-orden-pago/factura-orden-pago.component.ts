import { Component, Input, OnInit } from '@angular/core';
import { FacturaOrdenPago } from '../_models/factura_orden_pago';
import { FacturaOrdenPagoService } from '../_services/factura-orden-pago.service';
import { first } from 'rxjs/operators';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-factura-orden-pago',
  templateUrl: './factura-orden-pago.component.html',
  styleUrls: ['./factura-orden-pago.component.css']
})
export class FacturaOrdenPagoComponent implements OnInit {
  
  facturas: Array<FacturaOrdenPago> = new Array();
  loading = false;
  sinFacturas = true;
  closeModal: string;
  facturaSelected:FacturaOrdenPago;
  constructor(private facturaOrdenPagoService:FacturaOrdenPagoService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loading = true;
    this.facturaOrdenPagoService.getAll().pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.loading = false;
        if (data.length > 0) { this.sinFacturas = false; }
        this.facturas = data;
      },
      error => {
      });
  }

  triggerModal(content: any, factura: FacturaOrdenPago) {
    this.facturaSelected = factura;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
