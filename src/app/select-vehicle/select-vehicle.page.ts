import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { SwifftyProviderService } from "./../swiffty-provider.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './select-vehicle.page.html',
  styleUrls: ['./select-vehicle.page.scss'],
})
export class SelectVehiclePage implements OnInit {


  constructor(public navigate : NavController, public transitions : NativePageTransitions,
              public provider : SwifftyProviderService, public location : Location) { }

  ngOnInit() {
  }

  navigateFoward(service : any){
    this.provider.service = service;
    console.log(service);
    this.transitionFoward();
    this.navigate.navigateRoot('/mapa');
  }

  navigateBack(){
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
     }
   this.transitions.slide(options);
  this.location.back();
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
