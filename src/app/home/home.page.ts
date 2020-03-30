import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides', { static: true }) slides: any;
  
  public slidesArray: number[] = [1,2,3];
  
  public counter: number = 100;

  constructor() {}
  
  reachStart() {
    if (this.counter <= 0) {
      console.warn('Caught infinite loop');
      debugger;
    }
    console.log('Reached start',this.slides);
    this.slidesArray.push(this.slidesArray.length);
    
    this.slides.slideTo(1);
    this.counter--;
  }
  
  reachEnd() {
    console.log('Reached end');
    this.slides.slideTo(1);
  }

}
