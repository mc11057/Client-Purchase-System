import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_services/pedido.service';
import { first } from 'rxjs/operators';
import { Pedido } from '../_models/pedido';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PedidoProducto } from '../_models/pedido_producto';
import { ApplicationUser } from '../_models/applicationuser';
import { EmpleadoService } from '../_services/empleado.service';




@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos: Array<Pedido>;
  productosSelected: Array<PedidoProducto>;
  closeModal: string;
  loading = true;
  sinPedidos = true;
  denyAprovalClick = false;
  constructor(private pedidoService: PedidoService, private modalService: NgbModal,
    private router: Router, private empleadoService: EmpleadoService,) { }

  ngOnInit(): void {
    this.sinPedidos = true;
    this.pedidoService.getOrders().pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          if (data.length > 0) { this.sinPedidos = false; }
          this.pedidos = data;
        },
        error => {
        });
  }

  crearPedido() {
    this.router.navigate(['/crear-pedido'])
  }

 
  aprobarDenegarPedido(pedido:Pedido,aprovar:boolean) {
    this.loading = true;
    let user: ApplicationUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.empleadoService.getEmployeeByUserID(user.id)
      .pipe(first())
      .subscribe(
        dataEmploye => {
          pedido.empleado = dataEmploye;
          this.pedidoService.aprobarDenegarPedido(pedido,aprovar).subscribe(
            data => {
              this.loading = false;
              this.denyAprovalClick = false;
              this.ngOnInit();
            },
            error => {
              this.loading = false;
              this.denyAprovalClick = false;
              this.ngOnInit();
            }
          );
        }
        , error => {
          this.loading = false;
          this.denyAprovalClick = false;
          this.ngOnInit();
        }
      );
  }
  triggerModal(content: any, productos: Array<PedidoProducto>) {
    this.changePedidoIdSelected(productos);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  changePedidoIdSelected(productos: Array<PedidoProducto>) {
    this.productosSelected = productos;
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
