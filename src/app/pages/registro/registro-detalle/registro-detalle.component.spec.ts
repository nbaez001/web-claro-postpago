import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroDetalleComponent } from './registro-detalle.component';

describe('RegistroDetalleComponent', () => {
  let component: RegistroDetalleComponent;
  let fixture: ComponentFixture<RegistroDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDetalleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
