import { TestBed } from '@angular/core/testing';

import { FormiService } from './formi.service';

describe('FormiService', () => {
  let service: FormiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
