import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereConditionComponent } from './where-condition.component';

describe('WhereConditionComponent', () => {
  let component: WhereConditionComponent;
  let fixture: ComponentFixture<WhereConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
