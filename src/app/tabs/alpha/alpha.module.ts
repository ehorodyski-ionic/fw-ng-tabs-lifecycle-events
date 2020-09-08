import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlphaPage } from './alpha.page';

@NgModule({
  declarations: [
    AlphaPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AlphaPage }]),
  ],
})
export class AlphaPageModule {}
