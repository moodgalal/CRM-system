import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusScriptComponent } from './main-status-script.component';

describe('MainStatusScriptComponent', () => {
  let component: MainStatusScriptComponent;
  let fixture: ComponentFixture<MainStatusScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
