import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {AboutcompComponent} from "./aboutcomp/aboutcomp.component";
import {HomecompComponent} from "./homecomp/homecomp.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {path: 'stranadvje', component: ContactComponent},
  {path: 'aboutus', component: AboutcompComponent},
  {path: 'home', component: HomecompComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
