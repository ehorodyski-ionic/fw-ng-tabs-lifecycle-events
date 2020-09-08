import { Component } from '@angular/core';

@Component({
  selector: 'app-charlie',
  templateUrl: './charlie.page.html',
  styleUrls: ['./charlie.page.scss'],
})
export class CharliePage {
  ionViewWillEnter(): void {
    console.warn('CharliePage#ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.warn('CharliePage#ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.warn('CharliePage#ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.warn('CharliePage#ionViewDidLeave');
  }
}
