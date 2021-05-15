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

  lineItems = new Map();
  
  @Input() pedidoProductos: Array<PedidoProducto>; 
  constructor(private pedidoDetailService:PedidoDetailService) { }

  ngOnInit(): void {

  }

}
