import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-release-notes-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['../../app.component.scss', './contact-us-dialog.component.scss']
})
export class ContactUsDialogComponent {

  constructor(public dialogRef: MdDialogRef<ContactUsDialogComponent>) {}
}
