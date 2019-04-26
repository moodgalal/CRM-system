import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigroleComponent } from './configrole.component';

describe('ConfigroleComponent', () => {
  let component: ConfigroleComponent;
  let fixture: ComponentFixture<ConfigroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
