import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcontactComponent } from './pcontact.component';

describe('PcontactComponent', () => {
  let component: PcontactComponent;
  let fixture: ComponentFixture<PcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
