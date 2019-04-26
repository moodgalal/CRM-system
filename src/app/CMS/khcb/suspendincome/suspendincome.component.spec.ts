import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendincomeComponent } from './suspendincome.component';

describe('SuspendincomeComponent', () => {
  let component: SuspendincomeComponent;
  let fixture: ComponentFixture<SuspendincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
