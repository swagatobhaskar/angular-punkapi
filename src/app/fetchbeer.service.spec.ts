import { TestBed } from '@angular/core/testing';

import { FetchbeerService } from './fetchbeer.service';

describe('FetchbeerService', () => {
  let service: FetchbeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchbeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
