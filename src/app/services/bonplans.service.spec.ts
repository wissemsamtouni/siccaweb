import { TestBed } from '@angular/core/testing';

import { BonplansService } from './bonplans.service';

describe('BonplansService', () => {
  let service: BonplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
