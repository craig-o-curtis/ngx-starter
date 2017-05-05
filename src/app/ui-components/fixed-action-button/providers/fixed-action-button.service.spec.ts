import { TestBed, inject } from '@angular/core/testing';

import { FixedActionButtonService } from './fixed-action-button.service';

describe('FixedActionButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixedActionButtonService]
    });
  });

  it('should ...', inject([FixedActionButtonService], (service: FixedActionButtonService) => {
    expect(service).toBeTruthy();
  }));
});
