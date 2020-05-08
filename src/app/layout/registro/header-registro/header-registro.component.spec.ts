import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegistroComponent } from './header-registro.component';

describe('HeaderRegistroComponent', () => {
  let component: HeaderRegistroComponent;
  let fixture: ComponentFixture<HeaderRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderRegistroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
