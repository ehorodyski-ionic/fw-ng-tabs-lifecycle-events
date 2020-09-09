import { Component } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.page.html',
  styleUrls: ['./delta.page.scss'],
})
export class DeltaPage {
  ionViewWillEnter(): void {
    console.warn('DeltaPage.ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.warn('DeltaPage.ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.warn('DeltaPage.ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.warn('DeltaPage.ionViewDidLeave');
  }
}
