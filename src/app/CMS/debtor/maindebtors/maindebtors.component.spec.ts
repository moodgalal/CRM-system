import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindebtorsComponent } from './maindebtors.component';

describe('MaindebtorsComponent', () => {
  let component: MaindebtorsComponent;
  let fixture: ComponentFixture<MaindebtorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindebtorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
