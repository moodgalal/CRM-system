import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNationalityComponent } from './main-nationality.component';

describe('MainNationalityComponent', () => {
  let component: MainNationalityComponent;
  let fixture: ComponentFixture<MainNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
