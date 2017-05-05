import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fixed-action-button',
  templateUrl: './fixed-action-button.component.html',
  styleUrls: ['../../app.component.scss', './fixed-action-button.component.scss']
})
export class FixedActionButtonComponent implements OnInit {

  // logic handled by service
  constructor( public el: ElementRef ) { }

  ngOnInit() { }

  save(pkg?: any) {
    console.log(`savecalled with: ${pkg}`);
  }

}
// this can use the Behavior Subject, just like the spinner service
// just grabs package, saves up to API
// performs other services
