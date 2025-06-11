import { TestBed } from '@angular/core/testing';

import { TeacherSignupLoginService } from './teacher-signup-login.service';

describe('TeacherSignupLoginService', () => {
  let service: TeacherSignupLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherSignupLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
