export class Usuario {
    public password: string;
    public nombre: string;
    public apellido: string;
    public correo: string;
    public direccion: string;
    public sexo: string;
    
    constructor(
         password: string,
         nombre: string,
         apellido: string,
         correo: string,
         direccion: string,
         sexo: string
    
    ) {
    
    this.password = password;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.sexo = sexo;
    this.correo=correo;
    
    }
    
    }