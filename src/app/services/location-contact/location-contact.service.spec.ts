import { TestBed } from '@angular/core/testing';

import { LocationContactService } from './location-contact.service';

describe('LocationContactService', () => {
  let service: LocationContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
