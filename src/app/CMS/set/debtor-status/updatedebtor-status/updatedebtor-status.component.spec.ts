import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedebtorStatusComponent } from './updatedebtor-status.component';

describe('UpdatedebtorStatusComponent', () => {
  let component: UpdatedebtorStatusComponent;
  let fixture: ComponentFixture<UpdatedebtorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedebtorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedebtorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
