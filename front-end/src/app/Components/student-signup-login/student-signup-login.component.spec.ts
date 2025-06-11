import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSignupLoginComponent } from './student-signup-login.component';

describe('StudentSignupLoginComponent', () => {
  let component: StudentSignupLoginComponent;
  let fixture: ComponentFixture<StudentSignupLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSignupLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
