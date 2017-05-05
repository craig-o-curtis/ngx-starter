import { Component, Output, EventEmitter } from '@angular/core';
import { ContactUsDialogComponent } from '../contact-us-dialog/contact-us-dialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: '[app-contact-us-btn]',
  templateUrl: './contact-us-btn.component.html',
  styleUrls: ['../../app.component.scss', './contact-us-btn.component.scss']
})
export class ContactUsBtnComponent {
  // this seledct option can be passed up to main to handle, or handled here with a service
  selectedOption: string;
  // tell parent button clicked
  @Output() onContactUsConfirmClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onContactUsCancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialog: MdDialog) {
  }

  openContactUsDialog() {
    const dialogRef = this.dialog.open(ContactUsDialogComponent);
    dialogRef.afterClosed().subscribe( result => {
      this.selectedOption = result;
      // notify parent
      result === 'confirm' ? this.notifyParentConfirm() : this.notifyParentCancel();
    });
  }

  // event emitter for closing sidebar
  notifyParentConfirm() {
    const result = true;
    this.onContactUsConfirmClicked.emit(result);
  }
  notifyParentCancel() {
    const result = false;
    this.onContactUsCancelClicked.emit(result);
  }

}

