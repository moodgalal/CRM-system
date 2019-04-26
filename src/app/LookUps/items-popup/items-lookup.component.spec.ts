import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsLookupComponent } from './items-lookup.component';

describe('ItemsLookupComponent', () => {
  let component: ItemsLookupComponent;
  let fixture: ComponentFixture<ItemsLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
