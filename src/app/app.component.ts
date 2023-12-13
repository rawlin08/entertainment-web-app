import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('entertainment')!);
    if (!this.data) {
      let entertainment = data;
      localStorage.setItem('entertainment', JSON.stringify(entertainment.entertainment));
      this.data = entertainment.entertainment;
    }
  }

  data:any;
}
