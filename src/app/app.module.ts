import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TutorialPageModule } from "./../app/tutorial/tutorial.module";
import { PopoverComponent } from "././popover/popover.component";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapaPage } from './mapa/mapa.page';

@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TutorialPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    LocationAccuracy,
    MapaPage,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent, PopoverComponent]
})
export class AppModule {}
