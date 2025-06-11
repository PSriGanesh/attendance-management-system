import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSignupLoginComponent } from './teacher-signup-login.component';

describe('TeacherSignupLoginComponent', () => {
  let component: TeacherSignupLoginComponent;
  let fixture: ComponentFixture<TeacherSignupLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSignupLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
