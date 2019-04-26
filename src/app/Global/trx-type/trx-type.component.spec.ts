import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxTypeComponent } from './trx-type.component';

describe('TrxTypeComponent', () => {
  let component: TrxTypeComponent;
  let fixture: ComponentFixture<TrxTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrxTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
