import { Component, OnInit } from '@angular/core';
import { ProductoProveedor } from '../_models/producto_proveedor';
import { ProveedorProductoService } from '../_services/proveedor-producto.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-producto',
  templateUrl: './proveedor-producto.component.html',
  styleUrls: ['./proveedor-producto.component.css']
})
export class ProveedorProductoComponent implements OnInit {
 loading = true;
 productosProveedores: Array<ProductoProveedor> = new Array();
 sinProductoProveedor=true;
  constructor(private productoProveedorService:ProveedorProductoService,private router: Router ) { }

  ngOnInit(): void {
    this.loading = true;
    this.productoProveedorService.getAll().pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.loading = false;
        if (data.length > 0) { this.sinProductoProveedor = false; }
        this.productosProveedores = data;
      },
      error => {
      });
  }

  registrarProducto()
  {
    this.router.navigate(['/crear-producto-proveedor'])

  }

}
