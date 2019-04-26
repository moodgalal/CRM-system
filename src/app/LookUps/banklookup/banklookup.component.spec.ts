import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklookupComponent } from './banklookup.component';

describe('BanklookupComponent', () => {
  let component: BanklookupComponent;
  let fixture: ComponentFixture<BanklookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanklookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
