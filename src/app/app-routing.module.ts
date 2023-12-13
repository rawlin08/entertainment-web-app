import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { MoviesComponent } from './components/movies.component';
import { TvShowsComponent } from './components/tv-shows.component';
import { BookmarkedComponent } from './components/bookmarked.component';

const routes: Routes = [
  { path: 'home', title: 'Entertainment Home', component: HomeComponent },
  { path: 'movies', title: 'Entertainment Movies', component: MoviesComponent },
  { path: 'tv-shows', title: 'Entertainment TV Shows', component: TvShowsComponent },
  { path: 'bookmarks', title: 'Bookmarks', component: BookmarkedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
