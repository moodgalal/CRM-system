import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainitemComponent } from './mainitem.component';

describe('MainitemComponent', () => {
  let component: MainitemComponent;
  let fixture: ComponentFixture<MainitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
