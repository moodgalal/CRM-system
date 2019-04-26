import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsdashComponent } from './actionsdash.component';

describe('ActionsdashComponent', () => {
  let component: ActionsdashComponent;
  let fixture: ComponentFixture<ActionsdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
