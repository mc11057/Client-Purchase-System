import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaOrdenPagoComponent } from './factura-orden-pago.component';

describe('FacturaOrdenPagoComponent', () => {
  let component: FacturaOrdenPagoComponent;
  let fixture: ComponentFixture<FacturaOrdenPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaOrdenPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaOrdenPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
