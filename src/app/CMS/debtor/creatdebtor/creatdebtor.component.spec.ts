import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdebtorComponent } from './creatdebtor.component';

describe('CreatdebtorComponent', () => {
  let component: CreatdebtorComponent;
  let fixture: ComponentFixture<CreatdebtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatdebtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatdebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
