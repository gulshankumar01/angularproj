import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminacountrequestComponent } from './adminacountrequest.component';

describe('AdminacountrequestComponent', () => {
  let component: AdminacountrequestComponent;
  let fixture: ComponentFixture<AdminacountrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminacountrequestComponent]
    });
    fixture = TestBed.createComponent(AdminacountrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
