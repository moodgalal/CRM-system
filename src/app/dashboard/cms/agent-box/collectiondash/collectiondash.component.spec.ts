import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiondashComponent } from './collectiondash.component';

describe('CollectiondashComponent', () => {
  let component: CollectiondashComponent;
  let fixture: ComponentFixture<CollectiondashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiondashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiondashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
