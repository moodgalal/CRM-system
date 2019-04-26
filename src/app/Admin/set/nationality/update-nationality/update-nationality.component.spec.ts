import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNationalityComponent } from './update-nationality.component';

describe('UpdateNationalityComponent', () => {
  let component: UpdateNationalityComponent;
  let fixture: ComponentFixture<UpdateNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
