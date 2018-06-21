import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './evento/home.component';
import { UserComponent } from './user/user.component';
import {ControleFrequenciaComponent} from "./evento/controle-frequencia/controle-frequencia.component";
import {MeusEventosComponent} from "./evento/meus-eventos/meus-eventos.component";
import {CadEventoComponent} from "./evento/cad-evento/cad-evento.component";
import {LoginComponent} from "./user/auth/login/login.component";
import {RegisterComponent} from "./user/auth/register/register.component";
import {RecoverPasswordComponent} from "./user/auth/recover-password/recover-password.component";
import {DetalhesEventoComponent} from "./evento/detalhes-evento/detalhes-evento.component";

/*const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'frequencia',        component: ControleFrequenciaComponent },
    { path: 'meus-eventos',        component: MeusEventosComponent },
    { path: 'cad-evento',        component: CadEventoComponent },
    { path: 'detalhes-evento',        component: DetalhesEventoComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'register',        component: RegisterComponent },
    { path: 'recover-password',        component: RecoverPasswordComponent },
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];*/

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'dasborad', pathMatch: 'full' },
            { path: 'auth/login', component: LoginComponent },
            { path: 'auth/register',        component: RegisterComponent },
            { path: 'auth/recover-password',        component: RecoverPasswordComponent },

            { path: 'dashboard',      component: HomeComponent },
            { path: 'user',           component: UserComponent },
            { path: 'frequencia',        component: ControleFrequenciaComponent },
            { path: 'meus-eventos',        component: MeusEventosComponent },
            { path: 'cad-evento',        component: CadEventoComponent },
            { path: 'detalhes-evento',        component: DetalhesEventoComponent },

        ])
    ],
    declarations: [],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
