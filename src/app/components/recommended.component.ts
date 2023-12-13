import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-recommended',
  template: `
  <h2>Recommended for you</h2>
  <div class="regularcards">
    <div class="regularcard card" *ngFor="let card of app.data">
      <div class="image">
        <img [src]="card.thumbnail.regular.small" alt="">
        <svg class="bookmarkicon"><use href="#icon-bookmark-empty"></use></svg>
      </div>
      <div class="details">
        <p>{{ card.year }}</p>
        &centerdot;
        <p>{{ card.category }}</p>
        &centerdot;
        <p>{{ card.rating }}</p>
      </div>
      <h3>{{ card.title }}</h3>
    </div>
  </div>
  `,
  styles: [``]
})
export class RecommendedComponent {
  constructor(public app: AppComponent) {}
}
