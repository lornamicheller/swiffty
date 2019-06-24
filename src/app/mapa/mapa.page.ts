import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as mapboxgl from 'mapbox-gl';
import { SwifftyProviderService } from "./../swiffty-provider.service";
import { Location } from "@angular/common";
import { PopoverComponent } from "./../popover/popover.component";
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  mapservice: mapboxgl.Map;
  mapboxgl:any;
  service : any;
  overlayHidden: boolean = true;

  constructor(public navigate : NavController, public transitions : NativePageTransitions,
              public provider : SwifftyProviderService, public location : Location,
              public popoverController : PopoverController) { 
    this.service = this.provider.service;
    mapboxgl.accessToken = 'pk.eyJ1IjoianJvc2FyaW8yNDEiLCJhIjoiY2pzdXF6NmJiMmgzNzQ5cnJkMjFsa285NSJ9.a6Z7HjeR6q74TBxQhXPy5A';
  }

  hideOverlay(){
   this.overlayHidden = this.provider.overlayHidden;
  }

  ngOnInit() {
    console.log(this.service);
    this.loadMap();
  }

  navigateFoward(){
    this.transitionFoward();
    this.navigate.navigateRoot('/home');
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

  loadMap(){
    this.mapservice = new mapboxgl.Map({
    container: 'mapservice',
    style: 'mapbox://styles/jrosario241/cjsuqzyev4cip1fo3cv5c3vr5',
  });   
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

    async servicio(ev: any) {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        translucent: false,
        backdropDismiss: false
      });
      //this.hideOverlay();
      return await popover.present();
    }
  
}
