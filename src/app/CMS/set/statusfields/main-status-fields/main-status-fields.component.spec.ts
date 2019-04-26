import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusFieldsComponent } from './main-status-fields.component';

describe('MainStatusFieldsComponent', () => {
  let component: MainStatusFieldsComponent;
  let fixture: ComponentFixture<MainStatusFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStatusFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
