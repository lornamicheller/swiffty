import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerificarCodigoPage } from './verificar-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarCodigoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerificarCodigoPage]
})
export class VerificarCodigoPageModule {}
