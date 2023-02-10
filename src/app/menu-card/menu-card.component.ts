import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent {
  navEl: any;
  isSidebarOpen: any;
  navHide() {
    throw new Error('Method not implemented.');
  }
}
