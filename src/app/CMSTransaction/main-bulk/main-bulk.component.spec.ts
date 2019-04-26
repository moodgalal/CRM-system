import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBulkComponent } from './main-bulk.component';

describe('MainBulkComponent', () => {
  let component: MainBulkComponent;
  let fixture: ComponentFixture<MainBulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
