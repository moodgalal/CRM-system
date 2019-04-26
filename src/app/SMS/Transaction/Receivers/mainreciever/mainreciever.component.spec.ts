import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrecieverComponent } from './mainreciever.component';

describe('MainrecieverComponent', () => {
  let component: MainrecieverComponent;
  let fixture: ComponentFixture<MainrecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainrecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainrecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
