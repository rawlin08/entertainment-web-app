import { Component } from '@angular/core';
import { TvShowsComponent } from './tv-shows.component';

@Component({
  selector: 'app-all-tv-shows',
  template: `
  <h2>TV Series</h2>
  <div class="regularcards">
    <div class="regularcard card" *ngFor="let card of tv.tvshows">
      <div class="image">
        <img [src]="card.thumbnail.regular.small" alt="">
        <svg class="bookmarkicon"><use attr.href="{{ card.isBookmarked == true ? '#icon-bookmark-full' : '#icon-bookmark-empty' }}"></use></svg>
      </div>
      <div class="details">
        <div class="top">
          <p>{{ card.year }}</p>
          &centerdot;
          <div class="category">
            <svg class="detailsicon"><use attr.href="{{ card.category == 'Movie' ? '#icon-nav-movies' : '#icon-nav-tv-shows' }}"></use></svg>
            <p>{{ card.category }}</p>
          </div>
          &centerdot;
          <p>{{ card.rating }}</p>
        </div>
        <h3>{{ card.title }}</h3>
      </div>
    </div>
  </div>
  `,
  styles: [``]
})
export class AllTvShowsComponent {
  constructor(public tv: TvShowsComponent) {}
}
