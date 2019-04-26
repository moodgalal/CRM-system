import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedebtorclassComponent } from './updatedebtorclass.component';

describe('UpdatedebtorclassComponent', () => {
  let component: UpdatedebtorclassComponent;
  let fixture: ComponentFixture<UpdatedebtorclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedebtorclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedebtorclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
