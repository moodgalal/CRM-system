import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdetraddressComponent } from './creatdetraddress.component';

describe('CreatdetraddressComponent', () => {
  let component: CreatdetraddressComponent;
  let fixture: ComponentFixture<CreatdetraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatdetraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatdetraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
