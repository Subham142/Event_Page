import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { TagsComponent } from './Components/tags/tags.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
