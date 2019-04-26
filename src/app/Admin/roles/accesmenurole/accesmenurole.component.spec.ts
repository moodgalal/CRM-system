import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesmenuroleComponent } from './accesmenurole.component';

describe('AccesmenuroleComponent', () => {
  let component: AccesmenuroleComponent;
  let fixture: ComponentFixture<AccesmenuroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesmenuroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesmenuroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
