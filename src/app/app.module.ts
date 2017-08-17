import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './main/main.component';
import {GraphComponent} from './main/graph.component';
import {DummyComponent} from './main/dummy.component';
import {HomeComponent} from './main/home.component';
import {AboutComponent} from './main/about.component';
import {SearchComponent} from './main/search.component';
import {CompanyComponent} from './main/company.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JobSearchComponent} from './common/jobsearch.component';
import {JobSeekerComponent} from './main/jobseeker.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {CarouselComponent} from './main/carousel.component';
import { NouisliderModule } from 'ng2-nouislider';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DummyComponent,
    GraphComponent,
    HomeComponent,
    MainComponent,
    CarouselComponent,
    CompanyComponent,
    JobSearchComponent,
    JobSeekerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,NgbModule.forRoot(),Ng2CarouselamosModule,NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
