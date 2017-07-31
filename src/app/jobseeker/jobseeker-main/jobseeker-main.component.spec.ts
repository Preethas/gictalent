import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerMainComponent } from './jobseeker-main.component';

describe('JobseekerMainComponent', () => {
  let component: JobseekerMainComponent;
  let fixture: ComponentFixture<JobseekerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
