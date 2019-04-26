import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainagntgroupComponent } from './mainagntgroup.component';

describe('MainagntgroupComponent', () => {
  let component: MainagntgroupComponent;
  let fixture: ComponentFixture<MainagntgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainagntgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainagntgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
