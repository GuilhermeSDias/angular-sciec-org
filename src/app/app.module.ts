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
import {CommonModule} from "@angular/common";
import {AuthModule} from "./user/auth/auth.module";

import { AppComponent } from './app.component';

import { HomeComponent } from './evento/home.component';
import { UserComponent } from './user/user.component';
import { ControleFrequenciaComponent } from './evento/controle-frequencia/controle-frequencia.component';
import { MeusEventosComponent } from './evento/meus-eventos/meus-eventos.component';
import { CadEventoComponent } from './evento/cad-evento/cad-evento.component';
import { RegisterComponent } from './user/auth/register/register.component';
import { RecoverPasswordComponent } from './user/auth/recover-password/recover-password.component';
import { DetalhesEventoComponent } from './evento/detalhes-evento/detalhes-evento.component';
import { AtividadeComponent } from './evento/atividade/atividade.component';
import { CadAtividadeComponent } from './evento/atividade/cad-atividade/cad-atividade.component';
import {AuthGuard} from "./guards/auth.guard";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RefreshTokenInterceptor} from "./interceptors/refresh-token.interceptor";
<<<<<<< HEAD
import { UpdateEventComponent } from './evento/update-event/update-event.component';
// import { NewPasswordComponent } from './user/auth/new-password/new-password.component';
=======
>>>>>>> 42d6bccc1c5f732504a59740fa9b1a08e987cd84

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ControleFrequenciaComponent,
    MeusEventosComponent,
    CadEventoComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    DetalhesEventoComponent,
    AtividadeComponent,
    CadAtividadeComponent,
<<<<<<< HEAD
    UpdateEventComponent,
    // NewPasswordComponent,
=======
>>>>>>> 42d6bccc1c5f732504a59740fa9b1a08e987cd84

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
    CommonModule,
    AuthModule,
  ],
  providers: [
      AuthGuard,
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true }
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
