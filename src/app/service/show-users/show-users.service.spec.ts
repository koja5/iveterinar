import { TestBed, inject } from '@angular/core/testing';

import { ShowUsersService } from './show-users.service';

describe('ShowUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowUsersService]
    });
  });

  it('should be created', inject([ShowUsersService], (service: ShowUsersService) => {
    expect(service).toBeTruthy();
  }));
});
