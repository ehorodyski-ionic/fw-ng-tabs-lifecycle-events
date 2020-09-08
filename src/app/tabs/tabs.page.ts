import { Component } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  private tabRef?: HTMLElement = null;

  private propagateToTab(name: string): void {
    console.warn(`TabsPage#${name}`);
    if (this.tabRef) {
      this.tabRef.dispatchEvent(new CustomEvent(name));
    }
  }

  ionViewWillEnter(): void {
    this.propagateToTab('ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    this.propagateToTab('ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    this.propagateToTab('ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    this.propagateToTab('ionViewDidLeave');
  }

  onTabDidChange(tabsRef: IonTabs): void {
    console.warn('TabsPage#onTabDidChange', tabsRef.outlet.activatedView.element);
    this.tabRef = tabsRef.outlet.activatedView.element;
  }
}
