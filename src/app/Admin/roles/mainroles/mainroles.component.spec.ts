import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrolesComponent } from './mainroles.component';

describe('MainrolesComponent', () => {
  let component: MainrolesComponent;
  let fixture: ComponentFixture<MainrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
