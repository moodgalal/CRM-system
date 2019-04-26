import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionytdComponent } from './provisionytd.component';

describe('ProvisionytdComponent', () => {
  let component: ProvisionytdComponent;
  let fixture: ComponentFixture<ProvisionytdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionytdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionytdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
