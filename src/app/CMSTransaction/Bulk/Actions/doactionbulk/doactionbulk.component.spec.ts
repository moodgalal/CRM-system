import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoactionbulkComponent } from './doactionbulk.component';

describe('DoactionbulkComponent', () => {
  let component: DoactionbulkComponent;
  let fixture: ComponentFixture<DoactionbulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoactionbulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoactionbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
