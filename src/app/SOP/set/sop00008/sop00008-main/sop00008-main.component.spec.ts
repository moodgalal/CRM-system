import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sop00008MainComponent } from './sop00008-main.component';

describe('Sop00008MainComponent', () => {
  let component: Sop00008MainComponent;
  let fixture: ComponentFixture<Sop00008MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sop00008MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sop00008MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
