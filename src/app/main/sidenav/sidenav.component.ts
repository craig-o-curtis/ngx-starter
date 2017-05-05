import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [ MdSidenav ]
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav;

  constructor( public leftsidenav: MdSidenav, public el: ElementRef ) {
  }

  toggleSidebar(): void {
    this.sidenav.opened ? this.sidenav.close() : this.sidenav.open();
  }

  ngOnInit() {
  }


}
