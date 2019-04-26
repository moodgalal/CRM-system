import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSTRXCaseUploadingComponent } from './cms-trx-case-uploading.component';

describe('CMSTRXCaseUploadingComponent', () => {
  let component: CMSTRXCaseUploadingComponent;
  let fixture: ComponentFixture<CMSTRXCaseUploadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMSTRXCaseUploadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMSTRXCaseUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
