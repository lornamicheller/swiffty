import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from "@ionic/angular";
import { SwifftyProviderService } from "./../swiffty-provider.service";
import { Location } from "@angular/common";
import { MapaPage } from '../mapa/mapa.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
service : any;

  constructor(public popController : PopoverController,
              public transitions : NativePageTransitions, public nav : NavController,
              public provider : SwifftyProviderService, public location : Location,
              public mapaPage : MapaPage, private camera: Camera) {
                this.service = this.provider.service;
              }

  ngOnInit() {
    //this.provider.overlayHidden;
  }

  closePop(){
   this.provider.change();
   this.popController.dismiss();
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

  navigate(){
    //console.log(this.provider.overlayHidden);
    this.transition();
    this.closePop();
    this.nav.navigateRoot("/booking-succesful");
  }

  cameraOpen(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
