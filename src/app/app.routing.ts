import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {ControleFrequenciaComponent} from "./controle-frequencia/controle-frequencia.component";
import {MeusEventosComponent} from "./meus-eventos/meus-eventos.component";
import {CadEventoComponent} from "./cad-evento/cad-evento.component";
import {LoginComponent} from "./user/autentication/login/login.component";
import {RegisterComponent} from "./user/autentication/register/register.component";
import {RecoverPasswordComponent} from "./user/autentication/recover-password/recover-password.component";

const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'frequencia',        component: ControleFrequenciaComponent },
    { path: 'meus-eventos',        component: MeusEventosComponent },
    { path: 'cad-evento',        component: CadEventoComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'register',        component: RegisterComponent },
    { path: 'recover-password',        component: RecoverPasswordComponent },
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
