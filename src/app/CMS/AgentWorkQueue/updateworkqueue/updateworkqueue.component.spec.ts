import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkqueueComponent } from './updateworkqueue.component';

describe('UpdateworkqueueComponent', () => {
  let component: UpdateworkqueueComponent;
  let fixture: ComponentFixture<UpdateworkqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateworkqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateworkqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
