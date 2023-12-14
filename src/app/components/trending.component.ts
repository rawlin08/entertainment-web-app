import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-trending',
  template: `
  <h2>Trending</h2>
  <div class="trending-cards">
    <div class="trending-card card" *ngFor="let card of app.trending">
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
  styles: [`
  h2 {
    padding: 0 16px;
  }
  `]
})
export class TrendingComponent {
  constructor(public app: AppComponent) {}
}
