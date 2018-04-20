import { TestBed, inject } from '@angular/core/testing';

import { GirlsService } from './girls.service';

describe('GirlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GirlsService]
    });
  });

  it('should be created', inject([GirlsService], (service: GirlsService) => {
    expect(service).toBeTruthy();
  }));
});