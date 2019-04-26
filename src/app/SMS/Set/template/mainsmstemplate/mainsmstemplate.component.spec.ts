import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsmstemplateComponent } from './mainsmstemplate.component';

describe('MainsmstemplateComponent', () => {
  let component: MainsmstemplateComponent;
  let fixture: ComponentFixture<MainsmstemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsmstemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsmstemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
