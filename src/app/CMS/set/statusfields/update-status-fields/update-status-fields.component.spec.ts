import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusFieldsComponent } from './update-status-fields.component';

describe('UpdateStatusFieldsComponent', () => {
  let component: UpdateStatusFieldsComponent;
  let fixture: ComponentFixture<UpdateStatusFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatusFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
