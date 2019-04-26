import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsginmentComponent } from './asginment.component';

describe('AsginmentComponent', () => {
  let component: AsginmentComponent;
  let fixture: ComponentFixture<AsginmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsginmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsginmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
