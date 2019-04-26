import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesmsaccountComponent } from './createsmsaccount.component';

describe('CreatesmsaccountComponent', () => {
  let component: CreatesmsaccountComponent;
  let fixture: ComponentFixture<CreatesmsaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesmsaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesmsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
