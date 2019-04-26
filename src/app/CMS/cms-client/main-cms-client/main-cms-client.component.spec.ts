import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCmsClientComponent } from './main-cms-client.component';

describe('MainCmsClientComponent', () => {
  let component: MainCmsClientComponent;
  let fixture: ComponentFixture<MainCmsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCmsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCmsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
