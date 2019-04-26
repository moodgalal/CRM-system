import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainusersComponent } from './mainusers.component';

describe('MainusersComponent', () => {
  let component: MainusersComponent;
  let fixture: ComponentFixture<MainusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
