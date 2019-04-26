import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdebtorStatusComponent } from './creatdebtor-status.component';

describe('CreatdebtorStatusComponent', () => {
  let component: CreatdebtorStatusComponent;
  let fixture: ComponentFixture<CreatdebtorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatdebtorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatdebtorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
