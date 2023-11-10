import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerysolutionComponent } from './querysolution.component';

describe('QuerysolutionComponent', () => {
  let component: QuerysolutionComponent;
  let fixture: ComponentFixture<QuerysolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuerysolutionComponent]
    });
    fixture = TestBed.createComponent(QuerysolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
