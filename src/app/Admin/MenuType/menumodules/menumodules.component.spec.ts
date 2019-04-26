import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumodulesComponent } from './menumodules.component';

describe('MenumodulesComponent', () => {
  let component: MenumodulesComponent;
  let fixture: ComponentFixture<MenumodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenumodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
