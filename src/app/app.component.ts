import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cuenta',
      url: '*',
      icon: 'contact'
    },
    {
      title: 'Historial',
      url: '*',
      icon: 'list'
    },
    {
      title: 'Método de Pago',
      url: '*',
      icon: 'card'
    },
    {
      title: 'Términos y Condiciones',
      url: '*',
      icon: 'clipboard'
    },
    {
      title: 'Política de Privacidad',
      url: '*',
      icon: 'lock'
    },
    {
      title: 'Cerrar Sesión',
      url: '*',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
