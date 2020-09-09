import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CharliePage } from './charlie.page';

@NgModule({
  declarations: [
    CharliePage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: CharliePage }]),
  ],
})
export class CharliePageModule {}
