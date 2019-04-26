import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsmstemplateComponent } from './editsmstemplate.component';

describe('EditsmstemplateComponent', () => {
  let component: EditsmstemplateComponent;
  let fixture: ComponentFixture<EditsmstemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsmstemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsmstemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
