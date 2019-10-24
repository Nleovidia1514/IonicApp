import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PausePage } from './pause.page';

import { CustomButtonComponent } from './../../components/custom-button/custom-button.component';
import { CustomModule } from 'src/app/custom.module';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CustomModule
  ],
  declarations: [PausePage],
  entryComponents: [ PausePage ]
})
export class PausePageModule {}
