import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsmsComponent } from './viewsms.component';

describe('ViewsmsComponent', () => {
  let component: ViewsmsComponent;
  let fixture: ComponentFixture<ViewsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
