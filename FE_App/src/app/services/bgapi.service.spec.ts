import { TestBed } from '@angular/core/testing';

import { BGApiService } from './bgapi.service';

describe('BGApiService', () => {
  let service: BGApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BGApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
