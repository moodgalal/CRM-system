import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyModulesComponent } from './company-modules.component';

describe('CompanyModulesComponent', () => {
  let component: CompanyModulesComponent;
  let fixture: ComponentFixture<CompanyModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
