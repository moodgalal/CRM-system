import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusFieldsComponent } from './create-status-fields.component';

describe('CreateStatusFieldsComponent', () => {
  let component: CreateStatusFieldsComponent;
  let fixture: ComponentFixture<CreateStatusFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatusFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
