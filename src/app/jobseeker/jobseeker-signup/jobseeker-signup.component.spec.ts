import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerSignupComponent } from './jobseeker-signup.component';

describe('JobseekerSignupComponent', () => {
  let component: JobseekerSignupComponent;
  let fixture: ComponentFixture<JobseekerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
