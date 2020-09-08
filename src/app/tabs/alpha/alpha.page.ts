import { Component } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.page.html',
  styleUrls: ['./alpha.page.scss'],
})
export class AlphaPage {
  ionViewWillEnter(): void {
    console.warn('AlphaPage#ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.warn('AlphaPage#ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.warn('AlphaPage#ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.warn('AlphaPage#ionViewDidLeave');
  }
}
