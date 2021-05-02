import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../_models/producto';
import { PedidoDetailService } from '../_services/pedido-detail.service';
import { first } from 'rxjs/operators';
import { PedidoProducto } from '../_models/pedido_producto';


@Component({
  selector: 'app-pedido-detail',
  templateUrl: './pedido-detail.component.html',
  styleUrls: ['./pedido-detail.component.css']
})
export class PedidoDetailComponent implements OnInit {
  productos : Array<Producto> = new Array();
  cantidades: Array<number> = new Array();
  pedidoProductos : Array<PedidoProducto>;
  lineItems = new Map();

  
  @Input() pedidoId: number; 
  constructor(private pedidoDetailService:PedidoDetailService) { }

  ngOnInit(): void {
    this.pedidoDetailService.getProductsbyPedidoId(this.pedidoId)
    .pipe(first())
    .subscribe(
        data => {          
          this.pedidoProductos = data;
          for(let pedidoProducto of this.pedidoProductos)
          {
            this.lineItems.set(pedidoProducto.cantidad,pedidoProducto.producto);
          }        
        },
        error => { 
        });
  }

}
