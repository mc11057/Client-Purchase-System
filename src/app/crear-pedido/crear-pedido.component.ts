import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../_services/producto.service';
import { first } from 'rxjs/operators';
import { CategoriaProductoService } from '../_services/categoria-producto.service';
import { CategoriaProducto } from '../_models/categoria_producto';
import { Producto } from '../_models/producto';
import { PedidoProducto } from '../_models/pedido_producto';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from '../_models/pedido';
import { EmpleadoService } from '../_services/empleado.service';
import { ApplicationUser } from '../_models/applicationuser';
import { PedidoService } from '../_services/pedido.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {
  categorias: Array<CategoriaProducto> = new Array();
  categoriaSelected: CategoriaProducto;
  productosPorCategoriaSeleccionada: Array<Producto>;
  pedidoProductos: Array<PedidoProducto> = new Array();
  cantidad: number = 1;
  closeModal: string;
  loading = false;
  productosLoading = false;

  constructor(private productoService: ProductoService,
    private categoriaService: CategoriaProductoService,
    private empleadoService: EmpleadoService,
    private pedidoService: PedidoService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.categoriaService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.categorias = data;
        },
        error => {
        });
  }
  categoriaSeleccionada(categoriaId: number) {
    this.productosLoading = true;
    let categoriaFounded = this.categorias.find(categoria => categoria.categoriaProductoId == categoriaId);
    this.categoriaSelected = categoriaFounded!;
    this.productoService.findByCategory(categoriaId)
      .pipe(first())
      .subscribe(
        data => {
          this.productosPorCategoriaSeleccionada = data;
          this.productosLoading = false;

        },
        error => {
          console.log(error);
        });
  }
  agregarProducto(producto: Producto) {
    console.log(this.pedidoProductos);
    let pedidoProducto: PedidoProducto = new PedidoProducto();
    pedidoProducto.producto = producto;
    pedidoProducto.cantidad = this.cantidad;
    if (this.pedidoProductos.length == 0) {
      this.pedidoProductos.push(pedidoProducto);
    } else {
      let pedidoProductos: Array<PedidoProducto> = new Array();
      let addnewProduct = true;
      this.pedidoProductos.forEach((element, index) => {
        if (element.producto.productoId == producto.productoId) {
          element.cantidad = element.cantidad + this.cantidad;
          pedidoProductos.push(element);
          addnewProduct = false;
        } else {
          pedidoProductos.push(element);
        }
      });
      if(addnewProduct) pedidoProductos.push(pedidoProducto);
      this.pedidoProductos = pedidoProductos;

    }


  }
  eliminarProducto(pedidoProducto: PedidoProducto) {

    let pedidoProductos: Array<PedidoProducto> = new Array();
    this.pedidoProductos.forEach((element, index) => {
      if (element.producto.productoId != pedidoProducto.producto.productoId) {
        pedidoProductos.push(element);
      }
    });
    this.pedidoProductos = pedidoProductos;

  }

  triggerModal(content: any) {
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
  crearPedido() {
    this.loading = true;
    let pedido: Pedido = new Pedido;
    pedido.productos = this.pedidoProductos;
    let user: ApplicationUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.empleadoService.getEmployeeByUserID(user.id)
      .pipe(first())
      .subscribe(
        data => {
          pedido.empleado = data;
          this.pedidoService.guardarPedido(pedido)
            .pipe(first())
            .subscribe(
              data => {
                this.loading = false;
                this.modalService.dismissAll();
                this.router.navigate(['/pedidos'])
              },
              error => {
              });

        },
        error => {
        });
  }
}
