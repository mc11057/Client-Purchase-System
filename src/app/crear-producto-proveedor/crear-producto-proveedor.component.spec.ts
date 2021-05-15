import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoProveedorComponent } from './crear-producto-proveedor.component';

describe('CrearProductoProveedorComponent', () => {
  let component: CrearProductoProveedorComponent;
  let fixture: ComponentFixture<CrearProductoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
