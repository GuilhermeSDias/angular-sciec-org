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
    { path: 'eventos', title: 'Eventos',  icon: 'pe-7s-date', class: '' },
    { path: 'gerenciar-eventos', title: 'Gerenciar Eventos',  icon: 'pe-7s-config', class: '' },
    { path: 'validar-certificado', title: 'Validar Certificado',  icon:'pe-7s-check', class: '' },
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
