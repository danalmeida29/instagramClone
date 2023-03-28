import { Usuario } from "./components/usuario.model";
import * as firebase from "firebase";

export class Auth { 

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
        console.log('Email:', email)
        console.log('Senha:', senha)
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => console.log(resposta))
        .catch((error: Error) => console.log(error))
    }
}