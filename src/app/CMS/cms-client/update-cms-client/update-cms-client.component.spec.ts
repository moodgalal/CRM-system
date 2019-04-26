import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCmsClientComponent } from './update-cms-client.component';

describe('UpdateCmsClientComponent', () => {
  let component: UpdateCmsClientComponent;
  let fixture: ComponentFixture<UpdateCmsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCmsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCmsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
