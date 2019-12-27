import { Component, OnInit } from '@angular/core';
import { Usuario} from 'app/clases/user.class';
//import { MatSnackBar } from '@angular/material';
import { ApiService } from  'app/services/api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    usuarios: Usuario[] = [];
    select_sexo: string;
      sexos: string[] = ['M', 'F'];
    radioOptions: string = 'TEST1';
    sexo: string;
   M = 'M';
   F = 'F';
  

  
     password: string;
     nombre: string;
     apellido: string;
     direccion: string;
     correo: string;
     celular: number;
  
    constructor(private reguser: ApiService) {
      if(localStorage.getItem('usuarios')){
        this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
  
      }
    }
  
    ngOnInit() {
    }
  
    f_crear_profesor(){
  
      if( !this.password || !this.nombre ||!this.apellido||!this.sexo ||!this.direccion ||!this.correo  ) return;
      const nuevoUser = new Usuario( this.password, this.nombre, this.apellido,this.correo,this.direccion,this.sexo,);
  
          this.usuarios.push(nuevoUser);
          this.guardarStorage('usuarios');
         // if(!this.nuevoUser){
          //this.snackBar.open('', '¡Se a creado, correctamente!', {duration: 3000});
        //}
    }
  
    f_borrar_profesor(i :number){
    this.usuarios.splice(i,1);
    this.guardarStorage('profesores');
    //this.snackBar.open('', 'Profesor borrado correctamente', {duration: 3000});
  }
  

  
  
    registra_usuario(){
        const nuevoUser = new Usuario( this.password, this.nombre, this.apellido,this.correo,this.direccion,this.sexo);
  
        this.usuarios.push(nuevoUser);
        console.log("userssss",this.usuarios);
      const prof = this.reguser.postReg_Prof(nuevoUser).subscribe(
        (data: Usuario[]) => {
          console.log("data",data);
          if(data!=null){
             // this.snackBar.open('', 'Profesores Registrados correctamente', {duration: 3000});
        }
    });
  }
  
  guardarStorage(event){ 
    switch(event){
      case 'usuarios':
        localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
      break;
    }
  }
}
