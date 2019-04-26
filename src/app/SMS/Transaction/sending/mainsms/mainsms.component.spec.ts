import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsmsComponent } from './mainsms.component';

describe('MainsmsComponent', () => {
  let component: MainsmsComponent;
  let fixture: ComponentFixture<MainsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
