import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LocationContactPageComponent } from './components/location-contact-page/location-contact-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { BlogHomePageComponent } from './components/blog-home-page/blog-home-page.component';
import { BlogPostPageComponent } from './components/blog-post-page/blog-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    LocationContactPageComponent,
    FaqPageComponent,
    BlogHomePageComponent,
    BlogPostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
