import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAttachementComponent } from './case-attachement.component';

describe('CaseAttachementComponent', () => {
  let component: CaseAttachementComponent;
  let fixture: ComponentFixture<CaseAttachementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAttachementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAttachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
