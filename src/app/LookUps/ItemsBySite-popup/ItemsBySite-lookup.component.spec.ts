import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBySiteLookupComponent } from './itemsBySite-lookup.component';

describe('ItemsBySiteLookupComponent', () => {
  let component: ItemsBySiteLookupComponent;
  let fixture: ComponentFixture<ItemsBySiteLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsBySiteLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBySiteLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
