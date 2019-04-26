import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbatchComponent } from './mainbatch.component';

describe('MainbatchComponent', () => {
  let component: MainbatchComponent;
  let fixture: ComponentFixture<MainbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
