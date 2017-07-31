import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobposterDashboardComponent } from './jobposter-dashboard/jobposter-dashboard.component';
import { JobposterMainComponent } from './jobposter-main/jobposter-main.component';
import {JobposterRoutingModule} from './jobposter-routing.module';

@NgModule({
  imports: [
    CommonModule,JobposterRoutingModule
  ],
  declarations: [JobposterDashboardComponent, JobposterMainComponent]
})
export class JobposterModule { }
