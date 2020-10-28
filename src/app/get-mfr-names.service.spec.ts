import { TestBed } from '@angular/core/testing';

import { GetMfrNamesService } from './get-mfr-names.service';

describe('GetMfrNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMfrNamesService = TestBed.get(GetMfrNamesService);
    expect(service).toBeTruthy();
  });
});
