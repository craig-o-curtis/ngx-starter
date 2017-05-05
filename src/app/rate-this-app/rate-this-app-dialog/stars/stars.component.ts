import { Component } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['../../../app.component.scss',  './stars.component.scss']
})
export class StarsComponent {
  public max: number = 5;
  public rate: number = 4;
  public isReadonly: boolean = false;
  public overStar: number;
  public percent: number;

  constructor() { }

  public hoveringOver(value:number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }

}
