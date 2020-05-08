import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroNombreComponent } from './registro-nombre.component';

describe('RegistroNombreComponent', () => {
  let component: RegistroNombreComponent;
  let fixture: ComponentFixture<RegistroNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroNombreComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
