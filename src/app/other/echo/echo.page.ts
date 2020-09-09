import { Component } from '@angular/core';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.page.html',
  styleUrls: ['./echo.page.scss'],
})
export class EchoPage {
  ionViewWillEnter(): void {
    console.warn('EchoPage.ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.warn('EchoPage.ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.warn('EchoPage.ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.warn('EchoPage.ionViewDidLeave');
  }
}
