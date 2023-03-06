import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'com.carflow';

  constructor(private router: Router) {
  }

  getLocationContactPage(event: { preventDefault: () => void; }, url: string) {
    event.preventDefault();

    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate([url]));
  }
}
