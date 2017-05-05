import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
// declare var $:JQueryStatic; // move to app.module.ts

@Component({
  selector: 'app-release-notes-dialog',
  templateUrl: './release-notes-dialog.component.html',
  styleUrls: ['../../app.component.scss', './release-notes-dialog.component.scss']
})
export class ReleaseNotesDialogComponent implements OnInit, AfterViewInit  {
  @ViewChild('collapsible') el: ElementRef;
  constructor(public dialogRef: MdDialogRef<ReleaseNotesDialogComponent>) {}

  ngOnInit() { }

  ngAfterViewInit() {
    $(this.el.nativeElement)
      .collapsible()
  }

}
