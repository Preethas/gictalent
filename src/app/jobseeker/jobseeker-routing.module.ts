import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {JobseekerMainComponent}    from './jobseeker-main/jobseeker-main.component';
import {JobseekerDashboardComponent}    from './jobseeker-dashboard/jobseeker-dashboard.component';
import {JobseekerSignupComponent}    from './jobseeker-signup/jobseeker-signup.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: JobseekerMainComponent,
        children: [
          {
            path: '',
            component: JobseekerSignupComponent
          },
          {
            path:'jobseekerdashboard',
            component:JobseekerDashboardComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class JobseekerRoutingModule {
}
