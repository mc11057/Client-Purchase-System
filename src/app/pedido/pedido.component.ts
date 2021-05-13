import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_services/pedido.service';
import { first } from 'rxjs/operators';
import {Pedido} from '../_models/pedido';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router } from '@angular/router';




@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos:Array<Pedido>;
  pedidoIdSelected:number;
  closeModal: string;
  loading=true;
  constructor(private pedidoService: PedidoService,private modalService: NgbModal,
    private router: Router ) { }

  ngOnInit(): void {
   this.pedidoService.getOrders().pipe(first())
    .subscribe(
        data => {
          this.loading=false;
          this.pedidos = data;
        },
        error => { 
        });
  }
  changePedidoIdSelected(pedidoId:number){
    this.pedidoIdSelected = pedidoId;
  }
  crearPedido(){
    this.router.navigate(['/crear-pedido'])
  }

  aprobarPedido(pedidoId:number){
    //ejecutar el proc almacenado
    this.pedidoService.aprobarPedido(pedidoId).subscribe(

    );

    console.log(pedidoId);
  }
  denegarPedido(pedidoId:number){
    //cambiar estado a denegado
    this.pedidoService.denegarPedido(pedidoId).subscribe(

      );
      this.ngOnInit();
    console.log(pedidoId);
  }
  triggerModal(content:any,pedidoId:number) {
    this.changePedidoIdSelected(pedidoId);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
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
      return  `with: ${reason}`;
    }
  }
 

}
