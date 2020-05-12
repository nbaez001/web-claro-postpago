import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsClaroComponent } from './chips-claro.component';

describe('ChipsClaroComponent', () => {
  let component: ChipsClaroComponent;
  let fixture: ComponentFixture<ChipsClaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsClaroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsClaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
