import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { JobseekerDashboardComponent } from './jobseeker-dashboard/jobseeker-dashboard.component';
import { JobseekerMainComponent } from './jobseeker-main/jobseeker-main.component';
import { JobseekerRoutingModule} from './jobseeker-routing.module';
import { JobseekerSignupComponent } from './jobseeker-signup/jobseeker-signup.component';

@NgModule({
  imports: [
    CommonModule,JobseekerRoutingModule,FormsModule,Ng2AutoCompleteModule,ReactiveFormsModule
  ],
  declarations: [JobseekerDashboardComponent, JobseekerMainComponent, JobseekerSignupComponent]
})
export class JobseekerModule { }
