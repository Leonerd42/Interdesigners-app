import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchedulePage } from './schedule.page';
import { XScrollComponentModule } from 'src/app/component/xscroll/xscroll.component.module';
import { EventCardComponentModule } from 'src/app/component/event-card/event-card.component.module';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MbscModule,
    XScrollComponentModule,
    EventCardComponentModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
