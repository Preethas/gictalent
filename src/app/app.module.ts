import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './main/main.component';
import {GraphComponent} from './main/graph.component';
import {DummyComponent} from './main/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GraphComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
