import { Component, OnInit } from '@angular/core';
import { Producto } from '../_models/producto';
import { Proveedor } from '../_models/proveedor';

import { first } from 'rxjs/operators';
import { ProductoService } from '../_services/producto.service';
import { ProveedorService } from '../_services/proveedor.service';
import { ProductoProveedor } from '../_models/producto_proveedor';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductoProveedorKey } from '../_models/producto_proveedor_key';
import { identifierModuleUrl } from '@angular/compiler';
import { ProveedorProductoService } from '../_services/proveedor-producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto-proveedor',
  templateUrl: './crear-producto-proveedor.component.html',
  styleUrls: ['./crear-producto-proveedor.component.css']
})
export class CrearProductoProveedorComponent implements OnInit {
  proveedores: Array<Proveedor> = new Array();
  productos: Array<Producto> = new Array();
  proveedorSelected: Proveedor;
  productoSelected: Producto;
  allFieldsSelected = false;
  productoProveedor: any;
  closeModal: string;
  clicked = false;
  loading = false;
  precio: number;
  precioSeleccionado = false;

  constructor(private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private productoProveedorService: ProveedorProductoService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {


    this.productoService.getAll().pipe(first())
      .subscribe(
        data => {
          this.productos = data;
        },
        error => {
        });
    this.proveedorService.getAll().pipe(first())
      .subscribe(
        data => {
          this.proveedores = data;
        },
        error => {
        });
  }
  proveedorSelecteccionado(proveedor: Proveedor) {
    this.proveedorSelected = proveedor;
    if (this.productoSelected) { this.allFieldsSelected = true }
  }
  productoSelecteccionado(producto: Producto) {
    this.productoSelected = producto;
    if (this.proveedorSelected) { this.allFieldsSelected = true }
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
  onChange(newValue) {
    if(newValue>0) { this.precioSeleccionado = true;}  
    else { this.precioSeleccionado =false; } 
  
  }
  agregar() {

      this.productoProveedor = new ProductoProveedor();
      this.productoProveedor.producto = this.productoSelected;
      this.productoProveedor.proveedor = this.proveedorSelected;
      this.productoProveedor.precio = this.precio;
    
  }
  eliminarProductoProveedor(){
    this.productoProveedor = null;
  }

  registrarProducto() {
    this.loading = true;
      if(this.productoProveedor)
      {
        let id: ProductoProveedorKey = new ProductoProveedorKey ;
        id.proveedorId = this.productoProveedor.proveedor.proveedorId;
        id.productoId = this.productoProveedor.producto.productoId; 
        this.productoProveedor.id = id;    
        this.productoProveedorService.save(this.productoProveedor)
        .pipe(first())
        .subscribe(
          data => {
            this.loading = false;
            this.modalService.dismissAll();
            this.router.navigate(['/producto-proveedores']);
          },
          error => {
            this.loading = false;
          });
      }
  
    
  }

  
}
