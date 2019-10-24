import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = []

@NgModule({
    declarations: [CustomButtonComponent],
    imports: [
      IonicModule,
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule
    ] ,
    exports: [CustomButtonComponent]
  })
  export class CustomModule {}