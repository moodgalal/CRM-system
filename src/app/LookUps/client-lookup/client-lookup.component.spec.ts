import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLookupComponent } from './client-lookup.component';

describe('ClientLookupComponent', () => {
  let component: ClientLookupComponent;
  let fixture: ComponentFixture<ClientLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
