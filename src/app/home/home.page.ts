import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cont: number;
  public show: String;

  constructor() {
    this.cont = 0;
    this.show = '00';
  }

  sumar(){
    if (this.cont < 21) {
      this.cont++;
      this.show = this.cont + "";
    }
  }

  restar(){
    this.cont--;
    this.show = this.cont + "";
  }

  reset(){
    this.cont = 0;
    this.show = this.cont + "";
  }

}
