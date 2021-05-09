import { TestBed } from '@angular/core/testing';

import { CrearPedidoService } from './crear-pedido.service';

describe('CrearPedidoService', () => {
  let service: CrearPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
