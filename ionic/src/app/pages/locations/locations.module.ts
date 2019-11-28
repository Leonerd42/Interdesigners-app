import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocationsPage } from './locations.page';
import { AgmCoreModule } from '@agm/core';
import { XscrollComponent } from 'src/app/component/xscroll/xscroll.component';
import { EventCardComponent } from 'src/app/component/event-card/event-card.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'API_DO_GOOGLE_MAPS'
    })
  ],
  declarations: [
    LocationsPage
  ]
})
export class LocationsPageModule {
}
