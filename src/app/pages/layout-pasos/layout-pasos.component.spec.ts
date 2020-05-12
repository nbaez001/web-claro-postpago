import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPasosComponent } from './layout-pasos.component';

describe('LayoutPasosComponent', () => {
  let component: LayoutPasosComponent;
  let fixture: ComponentFixture<LayoutPasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPasosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
