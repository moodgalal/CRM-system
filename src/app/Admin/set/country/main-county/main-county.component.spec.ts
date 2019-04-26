import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCountyComponent } from './main-county.component';

describe('MainCountyComponent', () => {
  let component: MainCountyComponent;
  let fixture: ComponentFixture<MainCountyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCountyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
