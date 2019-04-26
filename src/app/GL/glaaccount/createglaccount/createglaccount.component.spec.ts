import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateglaccountComponent } from './createglaccount.component';

describe('CreateglaccountComponent', () => {
  let component: CreateglaccountComponent;
  let fixture: ComponentFixture<CreateglaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateglaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateglaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
