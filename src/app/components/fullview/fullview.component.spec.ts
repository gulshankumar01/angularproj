import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullviewComponent } from './fullview.component';

describe('FullviewComponent', () => {
  let component: FullviewComponent;
  let fixture: ComponentFixture<FullviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullviewComponent]
    });
    fixture = TestBed.createComponent(FullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
