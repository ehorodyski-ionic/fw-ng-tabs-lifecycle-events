import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'alpha',
        loadChildren: () => import('./alpha/alpha.module').then(m => m.AlphaPageModule),
      },
      {
        path: 'bravo',
        loadChildren: () => import('./bravo/bravo.module').then(m => m.BravoPageModule),
      },
      {
        path: 'charlie',
        loadChildren: () => import('./charlie/charlie.module').then(m => m.CharliePageModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
})
export class TabsPageModule {}
