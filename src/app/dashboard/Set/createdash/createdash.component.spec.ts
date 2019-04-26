import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedashComponent } from './createdash.component';

describe('CreatedashComponent', () => {
  let component: CreatedashComponent;
  let fixture: ComponentFixture<CreatedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
