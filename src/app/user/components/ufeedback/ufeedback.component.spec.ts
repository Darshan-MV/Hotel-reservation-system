import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfeedbackComponent } from './ufeedback.component';

describe('UfeedbackComponent', () => {
  let component: UfeedbackComponent;
  let fixture: ComponentFixture<UfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
