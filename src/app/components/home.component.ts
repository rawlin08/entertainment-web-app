import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  template: `
  <div class="searchContainer">
    <svg class="searchicon"><use href="#icon-search"></use></svg>
    <input #searchInput (input)="search(searchInput.value)" type="search" name="search" id="search" placeholder="Search for movies or TV series">
  </div>
  <div *ngIf="searchInput.value != ''" class="search">
    <h2>Found {{ searched.length }} results for '{{ searchInput.value }}'</h2>
    <div class="regularcards">
      <div class="regularcard card" *ngFor="let card of searched">
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
  </div>
  <app-trending *ngIf="searchInput.value == ''"></app-trending>
  <app-recommended *ngIf="searchInput.value == ''"></app-recommended>
  `,
  styles: [``]
})
export class HomeComponent {
  constructor(public app: AppComponent) {}

  searched:any = [];
  search(terms:any) {
    terms = terms.toLowerCase();
    if (terms == '') {
      this.searched = [];
    }
    else {
      this.searched = this.app.data.filter((element:any) => element.title.toLowerCase().includes(terms));
    }
  }
}
