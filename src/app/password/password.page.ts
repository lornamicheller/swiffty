import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(public transitions : NativePageTransitions, public navigate : NavController, public location : Location) { }

  ngOnInit() {
  }

  navigateBack(){
    this.transitionBack();
    this.location.back();
  }

  transitionBack(){
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

  confirmPass(){
    this.transition();
    this.navigate.navigateRoot('/verificar-codigo')
  }
}
