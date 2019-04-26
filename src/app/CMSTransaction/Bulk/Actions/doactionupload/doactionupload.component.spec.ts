import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoactionuploadComponent } from './doactionupload.component';

describe('DoactionuploadComponent', () => {
  let component: DoactionuploadComponent;
  let fixture: ComponentFixture<DoactionuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoactionuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoactionuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
