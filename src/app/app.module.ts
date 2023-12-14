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
import { AllMoviesComponent } from './components/all-movies.component';
import { AllTvShowsComponent } from './components/all-tv-shows.component';
import { BookmarkedTVComponent } from './components/bookmarked-tv.component';
import { BookmarkedMoviesComponent } from './components/bookmarked-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    BookmarkedComponent,
    TrendingComponent,
    RecommendedComponent,
    AllMoviesComponent,
    AllTvShowsComponent,
    BookmarkedTVComponent,
    BookmarkedMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
