import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentrankdashComponent } from './agentrankdash.component';

describe('AgentrankdashComponent', () => {
  let component: AgentrankdashComponent;
  let fixture: ComponentFixture<AgentrankdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentrankdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentrankdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
