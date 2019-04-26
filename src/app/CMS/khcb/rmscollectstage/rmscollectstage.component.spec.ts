import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmscollectstageComponent } from './rmscollectstage.component';

describe('RmscollectstageComponent', () => {
  let component: RmscollectstageComponent;
  let fixture: ComponentFixture<RmscollectstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmscollectstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmscollectstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
