import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquasionFieldsComponent } from './equasion-fields.component';

describe('EquasionFieldsComponent', () => {
  let component: EquasionFieldsComponent;
  let fixture: ComponentFixture<EquasionFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquasionFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquasionFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
