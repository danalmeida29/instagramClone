import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { Auth } from '../../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.pattern(/^(\+\d{1,3}\s)?\(?\d{2,3}\)?[\s-]?\d{3,4}[\s-]?\d{3,4}$|^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), Validators.minLength(10)]),
    'nome_completo': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'nome_usuario': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  constructor( private autenticacao: Auth, private router: Router,) { }

  ngOnInit(): void {
  }

  
  onNavigateTo(pageName: string){
    this.router.navigate([`${pageName}`])
  }

  cadastrarUser(): void{
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )

    this.autenticacao.cadastrarUsuario(usuario)
      .then(() => this.onNavigateTo('login'))

    // if (this.formulario?.get('emailCelular')?.valid) {
    //   let usuario: Usuario = new Usuario(
    //     this.formulario.value.emailCelular,
    //     this.formulario.value.nome_completo,
    //     this.formulario.value.nome_usuario,
    //     this.formulario.value.senha
    //   )
  
    //   let emailCelular = this.formulario.value.emailCelular;
    //   let isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailCelular);
    //   let isCelular = /^(\+\d{1,3}\s)?\(?\d{2,3}\)?[\s-]?\d{3,4}[\s-]?\d{3,4}$/.test(emailCelular);
    
    //   if (isEmail) {
    //     let email = emailCelular
    //     console.log('É um email', email);
    //   } else if (isCelular) {
    //     let celular = emailCelular
    //     console.log('É um celular', celular);
    //   }

    //   console.log(usuario)
      
    // }
  }

}
