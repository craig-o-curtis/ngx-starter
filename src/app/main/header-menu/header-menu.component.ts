import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['../../app.component.scss', './header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  sidenavOpen: boolean;
  loggingOut: boolean;

  constructor(private _location: Location) { }

  // ngOnInit for API calls
  ngOnInit() { }

  // Output - attach this method on parent in (parens), calls method specified on parent =""
  @Output() onSidenavClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  // internal method to emit to parent
  notifyParentToggle() {
    this.sidenavOpen = !this.sidenavOpen;
    this.onSidenavClicked.emit(this.sidenavOpen);
  }

  goBack() {
    this._location.back();
  }

  // Output - attach this method on parent in (parens), calls method specified on parent =""
  @Output() onLogoutClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  // internal method to emit to parent
  notifyParentLogout() {
    this.loggingOut = true;
    this.onLogoutClicked.emit(this.loggingOut);
  }


}
