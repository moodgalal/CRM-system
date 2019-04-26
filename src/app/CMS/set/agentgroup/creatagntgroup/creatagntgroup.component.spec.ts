import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatagntgroupComponent } from './creatagntgroup.component';

describe('CreatagntgroupComponent', () => {
  let component: CreatagntgroupComponent;
  let fixture: ComponentFixture<CreatagntgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatagntgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatagntgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
