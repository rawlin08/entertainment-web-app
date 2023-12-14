import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-movies',
  template: `
  <div class="searchContainer">
    <svg class="searchicon"><use href="#icon-search"></use></svg>
    <input type="search" name="search" id="search" placeholder="Search for movies or TV series">
  </div>
  <app-all-movies></app-all-movies>
  `,
  styles: [``]
})
export class MoviesComponent implements OnInit {
  constructor(public app: AppComponent) {}
  ngOnInit(): void {
    this.movies = this.app.data.filter((element:any) => element.category == 'Movie');
  }
  movies:any;
}
