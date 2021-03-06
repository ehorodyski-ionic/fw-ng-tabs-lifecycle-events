import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EchoPage } from './echo.page';

@NgModule({
  declarations: [
    EchoPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: EchoPage }]),
  ],
})
export class EchoPageModule {}
