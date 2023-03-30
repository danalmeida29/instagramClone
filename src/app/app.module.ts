import { Auth } from './auth.service';
import { AutenticacaoGuard } from './autenticacao-guard.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';

import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicacoesComponent } from './pages/home/publicacoes/publicacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    AcessoComponent,
    HomeComponent,
    PublicacoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ Auth, AutenticacaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
