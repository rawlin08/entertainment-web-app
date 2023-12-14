import { Component } from '@angular/core';
import { BookmarkedComponent } from './bookmarked.component';

@Component({
  selector: 'app-bookmarked-movies',
  template: `
  <h2>Bookmarked Movies</h2>
  <div class="regularcards">
    <div class="regularcard card" *ngFor="let card of bookmark.bookmarkedMovies">
      <div class="image">
        <img [src]="card.thumbnail.regular.small" alt="">
        <svg class="bookmarkicon"><use attr.href="{{ card.isBookmarked == true ? '#icon-bookmark-full' : '#icon-bookmark-empty' }}"></use></svg>
      </div>
      <div class="details">
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
  `,
  styles: [``]
})
export class BookmarkedMoviesComponent {
  constructor(public bookmark: BookmarkedComponent) {}
}
