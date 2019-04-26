import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterlogComponent } from './printerlog.component';

describe('PrinterlogComponent', () => {
  let component: PrinterlogComponent;
  let fixture: ComponentFixture<PrinterlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
