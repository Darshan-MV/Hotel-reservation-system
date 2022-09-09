import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaboutComponent } from './pabout.component';

describe('PaboutComponent', () => {
  let component: PaboutComponent;
  let fixture: ComponentFixture<PaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
