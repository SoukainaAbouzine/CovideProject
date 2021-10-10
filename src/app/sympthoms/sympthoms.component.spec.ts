import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SympthomsComponent } from './sympthoms.component';

describe('StatiComponent', () => {
  let component: SympthomsComponent;
  let fixture: ComponentFixture<SympthomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SympthomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SympthomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
