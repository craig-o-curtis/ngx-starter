import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-rate-this-app-dialog',
  templateUrl: './rate-this-app-dialog.component.html',
  styleUrls: ['../../app.component.scss', './rate-this-app-dialog.component.scss']
})
export class RateThisAppDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<RateThisAppDialogComponent>) {}

  ngOnInit() {
  }

}
