import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'delta',
    loadChildren: () => import('./delta/delta.module').then(m => m.DeltaPageModule),
  },
  {
    path: 'echo',
    loadChildren: () => import('./echo/echo.module').then(m => m.EchoPageModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
})
export class OtherPageModule {}
