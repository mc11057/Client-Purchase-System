import { TestBed } from '@angular/core/testing';

import { PedidoDetailService } from './pedido-detail.service';

describe('PedidoDetailService', () => {
  let service: PedidoDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
