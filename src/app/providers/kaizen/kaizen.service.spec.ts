import { TestBed, inject } from '@angular/core/testing';

import { KaizenService } from './kaizen.service';

describe('KaizenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KaizenService]
    });
  });

  it('should be created', inject([KaizenService], (service: KaizenService) => {
    expect(service).toBeTruthy();
  }));
});
