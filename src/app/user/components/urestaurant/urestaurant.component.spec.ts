import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrestaurantComponent } from './urestaurant.component';

describe('UrestaurantComponent', () => {
  let component: UrestaurantComponent;
  let fixture: ComponentFixture<UrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
