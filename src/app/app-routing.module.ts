import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DummyComponent} from './main/dummy.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home/dummy', component: DummyComponent },
      { path: 'home', component: MainComponent },
      {path: 'home/jobseeker', loadChildren: 'app/jobseeker/jobseeker.module#JobseekerModule'},
      {path: 'home/jobposter', loadChildren: 'app/jobposter/jobposter.module#JobposterModule'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
