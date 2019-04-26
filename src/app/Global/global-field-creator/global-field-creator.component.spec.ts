import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFieldCreatorComponent } from './global-field-creator.component';

describe('GlobalFieldCreatorComponent', () => {
  let component: GlobalFieldCreatorComponent;
  let fixture: ComponentFixture<GlobalFieldCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFieldCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFieldCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
