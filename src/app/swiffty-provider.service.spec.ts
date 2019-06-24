import { TestBed } from '@angular/core/testing';

import { SwifftyProviderService } from './swiffty-provider.service';

describe('SwifftyProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwifftyProviderService = TestBed.get(SwifftyProviderService);
    expect(service).toBeTruthy();
  });
});
