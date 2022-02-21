import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ServicesComponent } from './home/services/services.component';
import { AboutComponent } from './home/about/about.component';
import { OfferComponent } from './home/offer/offer.component';
import { PosterComponent } from './home/poster/poster.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    OfferComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
