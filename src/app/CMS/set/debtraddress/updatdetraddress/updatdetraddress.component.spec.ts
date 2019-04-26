import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatdetraddressComponent } from './updatdetraddress.component';

describe('UpdatdetraddressComponent', () => {
  let component: UpdatdetraddressComponent;
  let fixture: ComponentFixture<UpdatdetraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatdetraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatdetraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
