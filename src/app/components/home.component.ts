import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="searchContainer">
    <svg class="searchicon"><use href="#icon-search"></use></svg>
    <input type="search" name="search" id="search" placeholder="Search for movies or TV series">
  </div>
  <app-trending></app-trending>
  <app-recommended></app-recommended>
  `,
  styles: [`
  .searchicon {
    width: 24px;
    height: 24px;
    color: var(--white);
  }
  `]
})
export class HomeComponent {

}
