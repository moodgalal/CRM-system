import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesmstemplateComponent } from './createsmstemplate.component';

describe('CreatesmstemplateComponent', () => {
  let component: CreatesmstemplateComponent;
  let fixture: ComponentFixture<CreatesmstemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesmstemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesmstemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
