import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoactioncaseComponent } from './doactioncase.component';

describe('DoactioncaseComponent', () => {
  let component: DoactioncaseComponent;
  let fixture: ComponentFixture<DoactioncaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoactioncaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoactioncaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
