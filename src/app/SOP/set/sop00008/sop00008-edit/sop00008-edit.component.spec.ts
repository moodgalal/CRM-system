import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sop00008EditComponent } from './sop00008-edit.component';

describe('Sop00008EditComponent', () => {
  let component: Sop00008EditComponent;
  let fixture: ComponentFixture<Sop00008EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sop00008EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sop00008EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
