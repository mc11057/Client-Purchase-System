import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarFacturaOrdenPagoComponent } from './pagar-factura-orden-pago.component';

describe('PagarFacturaOrdenPagoComponent', () => {
  let component: PagarFacturaOrdenPagoComponent;
  let fixture: ComponentFixture<PagarFacturaOrdenPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarFacturaOrdenPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarFacturaOrdenPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
