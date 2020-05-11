import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOloComponent } from './detalle-olo.component';

describe('DetalleOloComponent', () => {
  let component: DetalleOloComponent;
  let fixture: ComponentFixture<DetalleOloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOloComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
