import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHogarComponent } from './detalle-hogar.component';

describe('DetalleHogarComponent', () => {
  let component: DetalleHogarComponent;
  let fixture: ComponentFixture<DetalleHogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleHogarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
