import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-booking-succesful',
  templateUrl: './booking-succesful.page.html',
  styleUrls: ['./booking-succesful.page.scss'],
})
export class BookingSuccesfulPage implements OnInit {

  constructor(public nav : NavController, public transitions : NativePageTransitions) { }

  ngOnInit() {
  }

  transitionFoward(){ //FUNCION QUE APLICA TRANSICIONES AL MOVIMIENTO Y CAMBIO DE PAGINAS
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
     }
   this.transitions.slide(options);
  }

  navigate(){
    this.transitionFoward();
    this.nav.navigateRoot('/home');
  }
}
