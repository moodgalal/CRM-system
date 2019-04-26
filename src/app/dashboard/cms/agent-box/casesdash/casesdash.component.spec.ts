import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesdashComponent } from './casesdash.component';

describe('CasesdashComponent', () => {
  let component: CasesdashComponent;
  let fixture: ComponentFixture<CasesdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
