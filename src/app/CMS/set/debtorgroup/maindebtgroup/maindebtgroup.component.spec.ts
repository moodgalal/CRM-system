import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindebtgroupComponent } from './maindebtgroup.component';

describe('MaindebtgroupComponent', () => {
  let component: MaindebtgroupComponent;
  let fixture: ComponentFixture<MaindebtgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindebtgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindebtgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
