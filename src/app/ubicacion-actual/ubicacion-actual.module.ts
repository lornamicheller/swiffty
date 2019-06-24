import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UbicacionActualPage } from './ubicacion-actual.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionActualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UbicacionActualPage]
})
export class UbicacionActualPageModule {}
