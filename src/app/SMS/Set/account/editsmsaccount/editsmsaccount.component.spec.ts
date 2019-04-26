import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsmsaccountComponent } from './editsmsaccount.component';

describe('EditsmsaccountComponent', () => {
  let component: EditsmsaccountComponent;
  let fixture: ComponentFixture<EditsmsaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsmsaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsmsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
