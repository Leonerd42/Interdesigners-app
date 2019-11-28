import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { XscrollComponent } from './xscroll.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
 ],
  declarations: [XscrollComponent], 
  exports: [XscrollComponent]
})
export class XScrollComponentModule {}