import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdebtorclassComponent } from './creatdebtorclass.component';

describe('CreatdebtorclassComponent', () => {
  let component: CreatdebtorclassComponent;
  let fixture: ComponentFixture<CreatdebtorclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatdebtorclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatdebtorclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
