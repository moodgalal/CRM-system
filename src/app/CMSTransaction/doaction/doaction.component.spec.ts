import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoactionComponent } from './doaction.component';

describe('DoactionComponent', () => {
  let component: DoactionComponent;
  let fixture: ComponentFixture<DoactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
