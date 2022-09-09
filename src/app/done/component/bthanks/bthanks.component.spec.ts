import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BthanksComponent } from './bthanks.component';

describe('BthanksComponent', () => {
  let component: BthanksComponent;
  let fixture: ComponentFixture<BthanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BthanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BthanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
