import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BravoPage } from './bravo.page';

@NgModule({
  declarations: [
    BravoPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: BravoPage }]),
  ],
})
export class BravoPageModule {}
