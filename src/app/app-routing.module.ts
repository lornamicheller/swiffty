import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorialPageModule } from "./tutorial/tutorial.module";

const routes: Routes = [
  {
    path: './tutorial/tutorial.module',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' }, 
  { path: 'ubicacion-actual', loadChildren: './ubicacion-actual/ubicacion-actual.module#UbicacionActualPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'verificar-codigo', loadChildren: './verificar-codigo/verificar-codigo.module#VerificarCodigoPageModule' },
  { path: 'password', loadChildren: './password/password.module#PasswordPageModule' },
  { path: 'select-vehicle', loadChildren: './select-vehicle/select-vehicle.module#SelectVehiclePageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'booking-succesful', loadChildren: './booking-succesful/booking-succesful.module#BookingSuccesfulPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
