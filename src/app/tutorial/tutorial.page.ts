import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(public navigate : NavController, public transitions : NativePageTransitions) { }

  ngOnInit() {
  }

  changePage(){
    this.transitionFoward();
    this.navigate.navigateRoot('/ubicacion-actual');
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
