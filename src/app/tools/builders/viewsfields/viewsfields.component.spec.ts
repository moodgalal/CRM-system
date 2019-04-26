import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsfieldsComponent } from './viewsfields.component';

describe('ViewsfieldsComponent', () => {
  let component: ViewsfieldsComponent;
  let fixture: ComponentFixture<ViewsfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
