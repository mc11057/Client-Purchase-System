import { TestBed } from '@angular/core/testing';

import { PagoFacturaOrdenPagoService } from './pago-factura-orden-pago.service';

describe('PagoFacturaOrdenPagoService', () => {
  let service: PagoFacturaOrdenPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoFacturaOrdenPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
