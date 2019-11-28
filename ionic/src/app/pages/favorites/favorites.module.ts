import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavoritesPage } from './favorites.page';
import { XScrollComponentModule } from 'src/app/component/xscroll/xscroll.component.module';
import { EventCardComponentModule } from 'src/app/component/event-card/event-card.component.module';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    XScrollComponentModule,
    EventCardComponentModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
