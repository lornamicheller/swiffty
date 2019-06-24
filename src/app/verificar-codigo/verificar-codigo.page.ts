import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-verificar-codigo',
  templateUrl: './verificar-codigo.page.html',
  styleUrls: ['./verificar-codigo.page.scss'],
})
export class VerificarCodigoPage implements OnInit {

  constructor(public navigate : NavController, public transitions : NativePageTransitions,
              public location : Location) { }

  ngOnInit() {
  }

  transition(){
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

  transitionBack(){
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

  navigateback(){
    this.transitionBack();
    this.location.back();
  }

  navigateFoward(){
    this.transition();
    this.navigate.navigateRoot('/home')
  }
}
