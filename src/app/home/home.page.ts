import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  map: mapboxgl.Map;
  mapboxgl:any;

  constructor(public navigate : NavController, public transitions : NativePageTransitions){

          mapboxgl.accessToken = 'pk.eyJ1IjoianJvc2FyaW8yNDEiLCJhIjoiY2pzdXF6NmJiMmgzNzQ5cnJkMjFsa285NSJ9.a6Z7HjeR6q74TBxQhXPy5A';
                
            }
  

  ngOnInit() {
    this.loadMap(); 
    
  }

  loadMap(){
    this.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jrosario241/cjsuqzyev4cip1fo3cv5c3vr5',
  });   

  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
  });

    this.map.addControl(geolocate);
  
    this.map.on('load', function()
{
	  geolocate.trigger();
});
  
    }

    transitionFoward(){ //transicion hacia adelante
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

    navigateFoward(){ //navegar
      this.transitionFoward();
      this.navigate.navigateRoot('/select-vehicle');
    }
}
