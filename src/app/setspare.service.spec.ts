import { TestBed, inject } from '@angular/core/testing';

import { SetspareService } from './setspare.service';

describe('SetspareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetspareService]
    });
  });

  it('should be created', inject([SetspareService], (service: SetspareService) => {
    expect(service).toBeTruthy();
  }));
});
