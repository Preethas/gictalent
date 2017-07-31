import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobposterMainComponent } from './jobposter-main.component';

describe('JobposterMainComponent', () => {
  let component: JobposterMainComponent;
  let fixture: ComponentFixture<JobposterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobposterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobposterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
