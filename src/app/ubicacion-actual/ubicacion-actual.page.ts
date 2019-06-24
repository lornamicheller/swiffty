import { Component, OnInit } from '@angular/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-ubicacion-actual',
  templateUrl: './ubicacion-actual.page.html',
  styleUrls: ['./ubicacion-actual.page.scss'],
})
export class UbicacionActualPage implements OnInit {

  constructor(public locationAccuracy : LocationAccuracy,
              public navigate : NavController, public transitions : NativePageTransitions) { }

  ngOnInit() {
  }

  turnLocationOn(){ //FUNCION QUE PRENDE GPS DEL CELULAR
     this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => console.log('Error requesting location permissions', error)
        );
      }
    
    });
    this.changePage();
  }
  changePage(){ //FUNCION QUE CAMBIA PAGINA
    this.transitionFoward();
    this.navigate.navigateRoot('/registro');
  }

  transitionFoward(){ //FUNCION QUE APLICA TRANSICIONES AL MOVIMIENTO Y CAMBIO DE PAGINAS
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
