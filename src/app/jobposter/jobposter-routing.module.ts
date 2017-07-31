import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {JobposterMainComponent}    from './jobposter-main/jobposter-main.component';
import {JobposterDashboardComponent}    from './jobposter-dashboard/jobposter-dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: JobposterMainComponent,
        children: [
          {
            path: '',
            component: JobposterDashboardComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class JobposterRoutingModule {
}
