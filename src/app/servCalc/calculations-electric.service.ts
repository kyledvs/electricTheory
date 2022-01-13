import { Injectable } from '@angular/core';






@Injectable({
  providedIn: 'root'
})
export class CalculationsElectricService {


  ampere: number = 123;
  volt: number = 123;

  ohm: number = 123;
  volts: number = 123;


  answer: any;



  constructor() { }

  calculateNumbers() {


    if (this.ampere === 123) {
      this.calcAmps()
    } else if (this.volt === 123) {
      this.calcVolt()
    } else if (this.ohm === 123) {
      this.calcOhm()
    }


  }

  calcAmps() { this.volt / this.ohm;
  }
  calcVolt() { }
  calcOhm() { }





}
