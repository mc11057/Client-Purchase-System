import { TestBed } from '@angular/core/testing';

import { ProveedorProductoService } from './proveedor-producto.service';

describe('ProveedorProductoService', () => {
  let service: ProveedorProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
