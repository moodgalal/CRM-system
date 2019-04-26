import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxviewComponent } from './trxview.component';

describe('TrxviewComponent', () => {
  let component: TrxviewComponent;
  let fixture: ComponentFixture<TrxviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrxviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
