import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './evento/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ControleFrequenciaComponent } from './evento/controle-frequencia/controle-frequencia.component';
import { MeusEventosComponent } from './evento/meus-eventos/meus-eventos.component';
import { CadEventoComponent } from './evento/cad-evento/cad-evento.component';
import { LoginComponent } from './user/autentication/login/login.component';
import { RegisterComponent } from './user/autentication/register/register.component';
import { RecoverPasswordComponent } from './user/autentication/recover-password/recover-password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ControleFrequenciaComponent,
    MeusEventosComponent,
    CadEventoComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    HttpClientModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
