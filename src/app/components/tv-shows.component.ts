import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tv-shows',
  template: `
  <div class="searchContainer">
    <svg class="searchicon"><use href="#icon-search"></use></svg>
    <input type="search" name="search" id="search" placeholder="Search for movies or TV series">
  </div>
  <app-all-tv-shows></app-all-tv-shows>
  `,
  styles: [``]
})
export class TvShowsComponent {
  constructor(public app: AppComponent) {}
  ngOnInit(): void {
    this.tvshows = this.app.data.filter((element:any) => element.category == 'TV Series');
  }
  tvshows:any;
}
