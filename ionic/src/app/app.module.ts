import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { SchedulePage } from './pages/schedule/schedule.page';
import { EventCardComponent } from './component/event-card/event-card.component';
import { XscrollComponent } from './component/xscroll/xscroll.component';
import { SchedulePageModule } from './pages/schedule/schedule.module';
import { HttpClientModule }    from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  entryComponents: [],
  imports: [ 
    FormsModule,  
    MbscModule,
    AngularFontAwesomeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot()
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    Network, 
    HTTP
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
