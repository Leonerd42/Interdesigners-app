import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Programação',
      url: '/schedule',
      icon: 'calendar'
    },
    {
      title: 'Favoritos',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'Locais',
      url: '/locations',
      icon: 'pin'
    },
    {
      title: 'Avisos',
      url: '/warnings',
      icon: 'warning'
    },
    {
      title: 'Sobre',
      url: '/about',
      icon: 'information-circle'
    }//,{
    //   title: 'Criação',
    //   url: '/creation',
    //   icon: 'color-wand'
    // }
  ];

  constructor( private platform: Platform,
               private splashScreen: SplashScreen,
               private statusBar: StatusBar, 
               private dbService: DatabaseService ) {
    this.initializeApp();
    //this.dbService.SortArray();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
