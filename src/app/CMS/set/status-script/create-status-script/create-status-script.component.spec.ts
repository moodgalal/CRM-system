import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusScriptComponent } from './create-status-script.component';

describe('CreateStatusScriptComponent', () => {
  let component: CreateStatusScriptComponent;
  let fixture: ComponentFixture<CreateStatusScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatusScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
