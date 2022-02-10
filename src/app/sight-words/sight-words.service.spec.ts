import { TestBed } from '@angular/core/testing';

import { SightWordsService } from './sight-words.service';

describe('SightWordsService', () => {
  let service: SightWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SightWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
