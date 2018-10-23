import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    HeaderComponent,
    BlogComponent,
    NowPlayingComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
