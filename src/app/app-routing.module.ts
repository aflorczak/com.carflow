import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {LocationContactPageComponent} from "./components/location-contact-page/location-contact-page.component";
import {FaqPageComponent} from "./components/faq-page/faq-page.component";
import {BlogHomePageComponent} from "./components/blog-home-page/blog-home-page.component";
import {BlogPostPageComponent} from "./components/blog-post-page/blog-post-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogHomePageComponent },
  { path: 'blog/:postSlug', component: BlogPostPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'kontakt', component: ContactPageComponent },
  { path: 'lokalizacje/:locationSlug/kontakt', component: LocationContactPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
