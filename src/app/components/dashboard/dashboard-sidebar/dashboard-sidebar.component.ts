import { Component } from '@angular/core';
import { IListSidebar } from 'src/app/interface/listMenuSidebar';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent {
  sidebarLinks: IListSidebar[] = [
    {
      title: 'Dashboard',
      path: 'dashboard',
      classIcon: 'fa-solid fa-layer-group',
    },
    {
      title: 'Product',
      path: 'product',
      classIcon: 'fa-solid fa-folder',
    },
    {
      title: 'Category',
      path: 'category',
      classIcon: 'fa-solid fa-list-check',
    },
    {
      title: 'Comment',
      path: 'comment',
      classIcon: 'fa-solid fa-comment',
    },
    {
      title: 'Account',
      path: 'account',
      classIcon: 'fa-regular fa-user',
    },
    {
      title: 'News',
      path: 'news',
      classIcon: 'fas fa-newspaper',
    },
    {
      title: 'Order',
      path: 'order',
      classIcon: 'fa-solid fa-cart-shopping',
    },
  ];
}
