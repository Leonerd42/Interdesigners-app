import { Component } from '@angular/core';

//@Pipe({ name: 'safe' })
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //url: SafeResourceUrl;
  constructor() {
    // this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.w3schools.com');
  }

}
