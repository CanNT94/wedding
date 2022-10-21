import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/layout/header/header.component';
import { FooterComponent } from './page/layout/footer/footer.component';
import { LayoutComponent } from './page/layout/layout.component';
import {AppRoutingModule} from "./app.routing.module";
import {LocationComponent} from "./page/location/location.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {NgxScrollTopModule} from "ngx-scrolltop";
import {PhotoLibraryComponent} from "./page/photo-libary/photo-library.component";
import {SwiperModule} from "swiper/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TimeComponent} from "./page/time/time.component";
import {CountdownComponent} from "./page/time/countdown/countdown.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LocationComponent,
    PhotoLibraryComponent,
    TimeComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxScrollTopModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
