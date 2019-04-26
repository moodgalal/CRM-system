import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainglaccountComponent } from './mainglaccount.component';

describe('MainglaccountComponent', () => {
  let component: MainglaccountComponent;
  let fixture: ComponentFixture<MainglaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainglaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainglaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
