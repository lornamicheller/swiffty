import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwifftyProviderService {

  service : any;
  overlayHidden: boolean = false;

  constructor() {

   }

   change(){
     if(this.overlayHidden == false){
      this.overlayHidden = true;
     }
   }

}
