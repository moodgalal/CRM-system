import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConguserComponent } from './conguser.component';

describe('ConguserComponent', () => {
  let component: ConguserComponent;
  let fixture: ComponentFixture<ConguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
