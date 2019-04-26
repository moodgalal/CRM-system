import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompanyComponent } from './main-company.component';

describe('MainCompanyComponent', () => {
  let component: MainCompanyComponent;
  let fixture: ComponentFixture<MainCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
