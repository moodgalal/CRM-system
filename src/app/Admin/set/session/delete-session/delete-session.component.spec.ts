import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSessionComponent } from './delete-session.component';

describe('DeleteSessionComponent', () => {
  let component: DeleteSessionComponent;
  let fixture: ComponentFixture<DeleteSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
