import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./components/usuario.model";
import * as firebase from "firebase";

@Injectable()
export class Auth { 

    constructor(
        private router: Router
    ){}
    public token_id!: string

    cadastrarUsuario(usuario: Usuario): Promise<any> {
  
       return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any)=> {

                delete usuario.senha
                
                firebase.database().ref(`usuario_detalhes/${btoa(usuario.email)}`)
                    .set({ usuario })

            })
            .catch((error: Error) =>{
                console.log(error)
            })
    }

    autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) =>{ 
            firebase.auth().currentUser?.getIdToken()
            .then((idToken: string) => {
                this.token_id = idToken
                localStorage.setItem('idToken', idToken)
                this.router.navigate(['/home'])
            })
                
           
        })
        .catch((error: Error) => console.log(error))
    }

    autenticado(): boolean{
        if(this.token_id === undefined && localStorage.getItem('idToken') !== null){
            this.token_id = localStorage.getItem('idToken')!;
        }

        if( this.token_id === undefined){
            this.router.navigate(['/'])
        }
        return this.token_id !== undefined
    }

    sair(): void{
        firebase.auth().signOut().then(()=>{
            localStorage.removeItem('idToken')
            this.token_id = undefined! 
            this.router.navigate(['/'])
        })
       
    }

}