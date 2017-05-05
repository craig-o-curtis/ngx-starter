import { TestBed, inject } from '@angular/core/testing';

import { RateThisAppService } from './rate-this-app.service';

describe('RateThisAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateThisAppService]
    });
  });

  it('should ...', inject([RateThisAppService], (service: RateThisAppService) => {
    expect(service).toBeTruthy();
  }));
});
