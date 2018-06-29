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
import {AtividadeComponent} from "./evento/atividade/atividade.component";
import {CadAtividadeComponent} from "./evento/atividade/cad-atividade/cad-atividade.component";
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'auth/login', component: LoginComponent },
            { path: 'auth/register',        component: RegisterComponent },
            { path: 'password/reset',        component: RecoverPasswordComponent },

            { path: 'dashboard',      component: HomeComponent, canActivate: [AuthGuard]},
            { path: 'user',           component: UserComponent, canActivate: [AuthGuard]},
            { path: 'frequencia',        component: ControleFrequenciaComponent, canActivate: [AuthGuard] },
            { path: 'meus-eventos',        component: MeusEventosComponent, canActivate: [AuthGuard] },
            { path: 'cad-evento',        component: CadEventoComponent, canActivate: [AuthGuard] },
            { path: 'detalhes-evento',        component: DetalhesEventoComponent, canActivate: [AuthGuard] },
            { path: 'atividade',        component: AtividadeComponent, canActivate: [AuthGuard] },
            { path: 'cad-atividade',        component: CadAtividadeComponent, canActivate: [AuthGuard] },
            { path: '',          redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] }

        ])
    ],
    declarations: [],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
