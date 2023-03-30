import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './pages/home/home.component';
import { AutenticacaoGuard } from './autenticacao-guard.service';

const routes: Routes = [
  {path:'', component: AcessoComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [ AutenticacaoGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
