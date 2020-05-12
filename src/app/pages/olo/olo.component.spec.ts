import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OloComponent } from './olo.component';

describe('OloComponent', () => {
  let component: OloComponent;
  let fixture: ComponentFixture<OloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OloComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
