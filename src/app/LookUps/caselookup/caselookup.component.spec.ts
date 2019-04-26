import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaselookupComponent } from './caselookup.component';

describe('CaselookupComponent', () => {
  let component: CaselookupComponent;
  let fixture: ComponentFixture<CaselookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaselookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaselookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
