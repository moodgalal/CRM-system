import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateagntgroupComponent } from './updateagntgroup.component';

describe('UpdateagntgroupComponent', () => {
  let component: UpdateagntgroupComponent;
  let fixture: ComponentFixture<UpdateagntgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateagntgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateagntgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
