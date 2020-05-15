import { TestBed } from '@angular/core/testing';

import { MockDisputesService } from './mock-disputes.service';

describe('MockDisputesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDisputesService = TestBed.get(MockDisputesService);
    expect(service).toBeTruthy();
  });
});
