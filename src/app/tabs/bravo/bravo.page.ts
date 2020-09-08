import { Component } from '@angular/core';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.page.html',
  styleUrls: ['./bravo.page.scss'],
})
export class BravoPage {
  ionViewWillEnter(): void {
    console.warn('BravoPage#ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.warn('BravoPage#ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.warn('BravoPage#ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.warn('BravoPage#ionViewDidLeave');
  }
}
