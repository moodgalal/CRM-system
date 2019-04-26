import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtoreditEnreyComponent } from './debtoredit-enrey.component';

describe('DebtoreditEnreyComponent', () => {
  let component: DebtoreditEnreyComponent;
  let fixture: ComponentFixture<DebtoreditEnreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtoreditEnreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtoreditEnreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
