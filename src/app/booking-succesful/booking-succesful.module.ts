import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingSuccesfulPage } from './booking-succesful.page';

const routes: Routes = [
  {
    path: '',
    component: BookingSuccesfulPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingSuccesfulPage]
})
export class BookingSuccesfulPageModule {}
