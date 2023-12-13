import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar.component';
import { HomeComponent } from './components/home.component';
import { MoviesComponent } from './components/movies.component';
import { TvShowsComponent } from './components/tv-shows.component';
import { BookmarkedComponent } from './components/bookmarked.component';
import { TrendingComponent } from './components/trending.component';
import { RecommendedComponent } from './components/recommended.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    BookmarkedComponent,
    TrendingComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
