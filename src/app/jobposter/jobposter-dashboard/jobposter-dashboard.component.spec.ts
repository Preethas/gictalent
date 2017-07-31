import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobposterDashboardComponent } from './jobposter-dashboard.component';

describe('JobposterDashboardComponent', () => {
  let component: JobposterDashboardComponent;
  let fixture: ComponentFixture<JobposterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobposterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobposterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
