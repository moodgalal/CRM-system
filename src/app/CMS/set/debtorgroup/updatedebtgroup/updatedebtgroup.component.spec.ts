import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedebtgroupComponent } from './updatedebtgroup.component';

describe('UpdatedebtgroupComponent', () => {
  let component: UpdatedebtgroupComponent;
  let fixture: ComponentFixture<UpdatedebtgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedebtgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedebtgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
