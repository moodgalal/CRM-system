import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReligionComponent } from './update-religion.component';

describe('UpdateReligionComponent', () => {
  let component: UpdateReligionComponent;
  let fixture: ComponentFixture<UpdateReligionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReligionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
