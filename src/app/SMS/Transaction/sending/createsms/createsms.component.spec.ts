import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesmsComponent } from './createsms.component';

describe('CreatesmsComponent', () => {
  let component: CreatesmsComponent;
  let fixture: ComponentFixture<CreatesmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
