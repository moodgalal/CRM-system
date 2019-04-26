import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCityComponent } from './main-city.component';

describe('MainCityComponent', () => {
  let component: MainCityComponent;
  let fixture: ComponentFixture<MainCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
