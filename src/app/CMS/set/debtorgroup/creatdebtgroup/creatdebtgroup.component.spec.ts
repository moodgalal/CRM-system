import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdebtgroupComponent } from './creatdebtgroup.component';

describe('CreatdebtgroupComponent', () => {
  let component: CreatdebtgroupComponent;
  let fixture: ComponentFixture<CreatdebtgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatdebtgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatdebtgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
