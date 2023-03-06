import { TestBed } from '@angular/core/testing';

import { HeadOfficeContactService } from './head-office-contact.service';

describe('HeadOfficeContactService', () => {
  let service: HeadOfficeContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadOfficeContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
