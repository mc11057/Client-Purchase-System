import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoDetailComponent } from './pedido-detail/pedido-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { FormsModule } from '@angular/forms';
import { ProveedorProductoComponent } from './proveedor-producto/proveedor-producto.component';
import { CrearProductoProveedorComponent } from './crear-producto-proveedor/crear-producto-proveedor.component';
import { FacturaOrdenPagoComponent } from './factura-orden-pago/factura-orden-pago.component';
import { PagarFacturaOrdenPagoComponent } from './pagar-factura-orden-pago/pagar-factura-orden-pago.component';






@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule,
      FormsModule
      
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      PedidoComponent,
      PedidoDetailComponent,
      CrearPedidoComponent,
      ProveedorProductoComponent,
      CrearProductoProveedorComponent,
      FacturaOrdenPagoComponent,
      PagarFacturaOrdenPagoComponent
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

      // provider used to create fake backend
      fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
