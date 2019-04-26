import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindetraddressComponent } from './maindetraddress.component';

describe('MaindetraddressComponent', () => {
  let component: MaindetraddressComponent;
  let fixture: ComponentFixture<MaindetraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindetraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindetraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
