import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaboutComponent } from './uabout.component';

describe('UaboutComponent', () => {
  let component: UaboutComponent;
  let fixture: ComponentFixture<UaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
