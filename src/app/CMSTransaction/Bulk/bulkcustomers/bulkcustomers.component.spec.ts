import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkcustomersComponent } from './bulkcustomers.component';

describe('BulkcustomersComponent', () => {
  let component: BulkcustomersComponent;
  let fixture: ComponentFixture<BulkcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
