import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveregisterComponent } from './approveregister.component';

describe('ApproveregisterComponent', () => {
  let component: ApproveregisterComponent;
  let fixture: ComponentFixture<ApproveregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveregisterComponent]
    });
    fixture = TestBed.createComponent(ApproveregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
