import { Auth } from './../../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null,[Validators.required, Validators.minLength(6)]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(8)])
  })

  constructor( private autenticacao: Auth) { }

  ngOnInit(): void {
  }

  autenticar():void{
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    )
  }

}
