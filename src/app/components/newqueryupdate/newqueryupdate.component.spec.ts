import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewqueryupdateComponent } from './newqueryupdate.component';

describe('NewqueryupdateComponent', () => {
  let component: NewqueryupdateComponent;
  let fixture: ComponentFixture<NewqueryupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewqueryupdateComponent]
    });
    fixture = TestBed.createComponent(NewqueryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
