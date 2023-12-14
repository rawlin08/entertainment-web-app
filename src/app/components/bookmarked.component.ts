import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bookmarked',
  template: `
  <div class="searchContainer">
    <svg class="searchicon"><use href="#icon-search"></use></svg>
    <input type="search" name="search" id="search" placeholder="Search for movies or TV series">
  </div>
  <app-bookmarked-movies></app-bookmarked-movies>
  <app-bookmarked-tv></app-bookmarked-tv>
  `,
  styles: [``]
})
export class BookmarkedComponent implements OnInit {
  constructor(public app: AppComponent) {}
  ngOnInit(): void {
    let bookmarked = this.app.data.filter((element:any) => element.isBookmarked == true);
    this.bookmarkedTV = bookmarked.filter((element:any) => element.category == 'TV Series');
    this.bookmarkedMovies = bookmarked.filter((element:any) => element.category == 'Movie');
  };

  bookmarkedTV:any;
  bookmarkedMovies:any;
}
