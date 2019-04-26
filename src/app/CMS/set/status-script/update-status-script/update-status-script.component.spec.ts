import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusScriptComponent } from './update-status-script.component';

describe('UpdateStatusScriptComponent', () => {
  let component: UpdateStatusScriptComponent;
  let fixture: ComponentFixture<UpdateStatusScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatusScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
