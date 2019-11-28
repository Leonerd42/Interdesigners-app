import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventCardComponent } from './event-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
 ],
  declarations: [EventCardComponent], 
  exports: [EventCardComponent]
})
export class EventCardComponentModule {}