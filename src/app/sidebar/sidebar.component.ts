import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user/auth/services/auth.service";
import {Router} from "@angular/router";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: 'table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: 'maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
      private auth: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

    /*logout(e){
        e.preventDefault();
        this.auth.logout();
    }*/
    /* SOLUÇÃO TEMPORÁRIA*/
    logout(){
        localStorage.clear()
        this.router.navigate(['dshborad']);
    }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
