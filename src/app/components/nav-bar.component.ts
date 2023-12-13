import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  <svg class="logoicon"><use href="#icon-logo"></use></svg>
  <div class="navlinks">
    <a [routerLink]="'/home'"><svg class="navicon" [routerLinkActive]="'selected'"><use href="#icon-nav-home"></use></svg></a>
    <a [routerLink]="'/movies'"><svg class="navicon" [routerLinkActive]="'selected'"><use href="#icon-nav-movies"></use></svg></a>
    <a [routerLink]="'/tv-shows'"><svg class="navicon" [routerLinkActive]="'selected'"><use href="#icon-nav-tv-shows"></use></svg></a>
    <a [routerLink]="'/bookmarks'"><svg class="navicon" [routerLinkActive]="'selected'"><use href="#icon-nav-bookmark"></use></svg></a>
  </div>
  <button><img class="profileicon" src="assets/images/image-avatar.png" alt=""></button>
  `,
  styles: [`
  .logoicon {
    width: 25px;
    height: 20px;
    color: var(--red);
  }
  .navlinks {
    display: flex;
    gap: 23px;
    align-items: center;
  }
  .navicon {
    width: 16px;
    height: 16px;
    color: var(--greyish-blue);
  }
  .selected {
    color: var(--white);
  }
  .profileicon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid var(--white);
  }
  `]
})
export class NavBarComponent {

}
