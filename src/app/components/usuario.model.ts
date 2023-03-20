export class Usuario {
    constructor(
        public emailCelular: string | number,
        public nome_completo: string,
        public nome_usuario: string,
        public senha: string
    ){}
}