import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerDashboardComponent } from './jobseeker-dashboard.component';

describe('JobseekerDashboardComponent', () => {
  let component: JobseekerDashboardComponent;
  let fixture: ComponentFixture<JobseekerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
