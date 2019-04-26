import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNationalityComponent } from './create-nationality.component';

describe('CreateNationalityComponent', () => {
  let component: CreateNationalityComponent;
  let fixture: ComponentFixture<CreateNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
