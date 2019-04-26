import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sop00008CreateComponent } from './sop00008-create.component';

describe('Sop00008CreateComponent', () => {
  let component: Sop00008CreateComponent;
  let fixture: ComponentFixture<Sop00008CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sop00008CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sop00008CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
