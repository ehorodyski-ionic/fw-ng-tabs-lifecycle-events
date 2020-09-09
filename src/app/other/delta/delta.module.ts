import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeltaPage } from './delta.page';

@NgModule({
  declarations: [
    DeltaPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: DeltaPage }]),
  ],
})
export class DeltaPageModule {}
