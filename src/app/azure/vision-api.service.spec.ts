import { TestBed, inject } from '@angular/core/testing';

import { VisionApiService } from './vision-api.service';

describe('VisionApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisionApiService]
    });
  });

  it('should be created', inject([VisionApiService], (service: VisionApiService) => {
    expect(service).toBeTruthy();
  }));
});
