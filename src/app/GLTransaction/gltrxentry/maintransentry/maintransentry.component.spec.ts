import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintransentryComponent } from './maintransentry.component';

describe('MaintransentryComponent', () => {
  let component: MaintransentryComponent;
  let fixture: ComponentFixture<MaintransentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintransentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintransentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
