import { Component, OnInit, OnChanges, Input, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['../../app.component.scss', './spinner.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      // transition(':leave', [   // :leave is alias to '* => void'
      //   animate(500, style({opacity:0}))
      // ])
    ])
  ]
})

export class SpinnerComponent implements OnInit, OnChanges {
  // pass in status from parent
  @Input() spinnerStatus: string;
  // logic handled by service
  constructor( public el: ElementRef ) { }

  ngOnInit() {
    console.log(this.spinnerStatus);
  }

  ngOnChanges() { }

}
