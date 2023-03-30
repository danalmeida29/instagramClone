import { Auth } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private autenticacao: Auth,
  ) { }

  ngOnInit(): void {
  }

  sair(): void{
    this.autenticacao.sair()
  }

}
