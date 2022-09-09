import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CthanksComponent } from './cthanks.component';

describe('CthanksComponent', () => {
  let component: CthanksComponent;
  let fixture: ComponentFixture<CthanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CthanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CthanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
