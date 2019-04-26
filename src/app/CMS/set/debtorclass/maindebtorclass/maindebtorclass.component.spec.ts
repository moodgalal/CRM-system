import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindebtorclassComponent } from './maindebtorclass.component';

describe('MaindebtorclassComponent', () => {
  let component: MaindebtorclassComponent;
  let fixture: ComponentFixture<MaindebtorclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindebtorclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindebtorclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
