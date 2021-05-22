import { FacturaOrdenPago } from "./factura_orden_pago";
import { FormaPago } from "./forma_pago";
import { Moneda } from "./moneda";

export class Pago {
    pagoId: number;
    formaPagoId: FormaPago;    
    facturaOrdenPagoId: FacturaOrdenPago;
    monto: number;
    userCreate: string;
    monedaId:Moneda;
  }