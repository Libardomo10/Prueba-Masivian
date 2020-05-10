import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './layout/banner/banner.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { WoodpeckerComponent } from './components/woodpecker/woodpecker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComicComponent } from './components/rating-comic/rating-comic.component';

import { MatTabsModule } from '@angular/material/tabs';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    BreakingNewsComponent,
    WoodpeckerComponent,
    RatingComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
