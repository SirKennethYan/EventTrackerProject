import { TestBed } from '@angular/core/testing';

import { TrailTrackerService } from './trail-tracker.service';

describe('TrailTrackerService', () => {
  let service: TrailTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
