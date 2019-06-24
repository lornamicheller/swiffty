import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registro : boolean;
  
  constructor(public navigate : NavController, public transitions : NativePageTransitions) { }

  ngOnInit() {
    this.registro = true;
  }

  changeRegistro(registro : boolean){

    this.registro = registro;
    console.log("statusChange");
    
    }

    signUp(){
      this.transitionFoward();
      this.navigate.navigateRoot('/password');
    }

    signIn(){
      this.transitionFoward();
      this.navigate.navigateRoot('/home');
    }

    transitionFoward(){
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 400,
        slowdownfactor: -1,
        slidePixels: 20,
        iosdelay: 100,
        androiddelay: 150,
       }
    
     this.transitions.slide(options);
    }

}
