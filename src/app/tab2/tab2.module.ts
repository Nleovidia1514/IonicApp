import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { PirateShipComponent } from './../components/pirate-ship/pirate-ship.component';

import { PausePageModule } from './../pages/pause/pause.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    PausePageModule
  ],
  declarations: [Tab2Page, PirateShipComponent]
})
export class Tab2PageModule {}
