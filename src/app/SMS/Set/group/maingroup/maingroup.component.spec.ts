import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingroupComponent } from './maingroup.component';

describe('MaingroupComponent', () => {
  let component: MaingroupComponent;
  let fixture: ComponentFixture<MaingroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaingroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaingroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
