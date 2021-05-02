import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_services/pedido.service';
import { first } from 'rxjs/operators';
import {Pedido} from '../_models/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos:Array<Pedido>;
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
   this.pedidoService.getOrders().pipe(first())
    .subscribe(
        data => {
          this.pedidos = data;
        },
        error => { 
        });
  }
  crearPedido(){
    //crear componente para crear pedido
  }
  verProductos(pedidoId:number){
   //crear componente y ver los productos del pedido
    console.log(pedidoId);
  }
  aprobarPedido(pedidoId:number){
    //ejecutar el proc almacenado
    console.log(pedidoId);
  }
  denegarPedido(pedidoId:number){
    //cambiar estado a denegado
    console.log(pedidoId);
  }

}
