import { TestBed } from '@angular/core/testing';

import { EmployeesrivcieService } from './employeesrivcie.service';

describe('EmployeesrivcieService', () => {
  let service: EmployeesrivcieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesrivcieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
