import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancebulkletterComponent } from './advancebulkletter.component';

describe('AdvancebulkletterComponent', () => {
  let component: AdvancebulkletterComponent;
  let fixture: ComponentFixture<AdvancebulkletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancebulkletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancebulkletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
