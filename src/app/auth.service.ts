import { Usuario } from "./components/usuario.model";
import * as firebase from "firebase";

export class Auth { 
    public cadastrarUsuario(usuario: Usuario): void {
        console.log("oiii", usuario)

        firebase.auth().createUserWithEmailAndPassword(usuario.emailCelular.toString(), usuario.senha)
            .then((resposta: any)=> {
                console.log(resposta)
            })
            .catch((error: Error) =>{
                console.log(error)
            })
    }
}