import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesadminComponent } from './queriesadmin.component';

describe('QueriesadminComponent', () => {
  let component: QueriesadminComponent;
  let fixture: ComponentFixture<QueriesadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueriesadminComponent]
    });
    fixture = TestBed.createComponent(QueriesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
