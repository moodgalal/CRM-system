import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterecieverComponent } from './createreciever.component';

describe('CreaterecieverComponent', () => {
  let component: CreaterecieverComponent;
  let fixture: ComponentFixture<CreaterecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
