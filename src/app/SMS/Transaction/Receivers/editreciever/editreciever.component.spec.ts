import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecieverComponent } from './editreciever.component';

describe('EditrecieverComponent', () => {
  let component: EditrecieverComponent;
  let fixture: ComponentFixture<EditrecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
