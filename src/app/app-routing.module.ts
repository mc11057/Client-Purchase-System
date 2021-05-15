import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { CrearProductoProveedorComponent } from './crear-producto-proveedor/crear-producto-proveedor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProveedorProductoComponent } from './proveedor-producto/proveedor-producto.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pedidos', component: PedidoComponent },
  {path: 'crear-pedido',component: CrearPedidoComponent},
  {path: 'producto-proveedores',component: ProveedorProductoComponent},
  {path: 'crear-producto-proveedor',component: CrearProductoProveedorComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
