import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatbatchComponent } from './creatbatch.component';

describe('CreatbatchComponent', () => {
  let component: CreatbatchComponent;
  let fixture: ComponentFixture<CreatbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
