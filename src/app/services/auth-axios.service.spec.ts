import { TestBed } from '@angular/core/testing';

import { AuthAxiosService } from './auth-axios.service';

describe('AuthAxiosService', () => {
  let service: AuthAxiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAxiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
