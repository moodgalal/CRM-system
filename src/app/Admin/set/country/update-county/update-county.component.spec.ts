import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountyComponent } from './update-county.component';

describe('UpdateCountyComponent', () => {
  let component: UpdateCountyComponent;
  let fixture: ComponentFixture<UpdateCountyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCountyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
