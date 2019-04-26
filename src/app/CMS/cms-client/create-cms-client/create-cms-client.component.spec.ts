import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCmsClientComponent } from './create-cms-client.component';

describe('CreateCmsClientComponent', () => {
  let component: CreateCmsClientComponent;
  let fixture: ComponentFixture<CreateCmsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCmsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCmsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
