import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccesssecurityComponent } from './useraccesssecurity.component';

describe('UseraccesssecurityComponent', () => {
  let component: UseraccesssecurityComponent;
  let fixture: ComponentFixture<UseraccesssecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraccesssecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccesssecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
