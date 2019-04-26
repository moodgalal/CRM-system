import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsmsaccountComponent } from './mainsmsaccount.component';

describe('MainsmsaccountComponent', () => {
  let component: MainsmsaccountComponent;
  let fixture: ComponentFixture<MainsmsaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsmsaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsmsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
