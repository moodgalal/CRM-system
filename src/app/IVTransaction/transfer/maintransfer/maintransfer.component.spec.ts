import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintransferComponent } from './maintransfer.component';

describe('MaintransferComponent', () => {
  let component: MaintransferComponent;
  let fixture: ComponentFixture<MaintransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
