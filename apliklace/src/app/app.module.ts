import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {StranadvjeComponent} from './stranadvje/stranadvje.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {HomeComponent} from './home/home.component';
import {AboutcompComponent} from './aboutcomp/aboutcomp.component';
import {HomecompComponent} from './homecomp/homecomp.component';
import {BlogComponent} from './blog/blog.component';
import { ExcreptPipe } from './excrept.pipe';
import { LitesoutComponent } from './litesout/litesout.component';
import { CheckedformsComponent } from './checkedforms/checkedforms.component';
import { HttpClientModule } from '@angular/common/http';
import { MinDirective } from './min.directive';
import { MaxDirective } from './max.directive';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    StranadvjeComponent,
    AboutusComponent,
    HomeComponent,
    AboutcompComponent,
    HomecompComponent,
    BlogComponent,
    ExcreptPipe,
    LitesoutComponent,
    CheckedformsComponent,
    MinDirective,
    MaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
