import { TestBed } from '@angular/core/testing';

import { FacturaOrdenPagoService } from './factura-orden-pago.service';

describe('FacturaOrdenPagoService', () => {
  let service: FacturaOrdenPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaOrdenPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
