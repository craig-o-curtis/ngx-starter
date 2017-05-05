import { Component, Output, EventEmitter } from '@angular/core';
import { RateThisAppDialogComponent } from '../rate-this-app-dialog/rate-this-app-dialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: '[app-rate-this-app-btn]',
  templateUrl: './rate-this-app-btn.component.html',
  styleUrls: ['../../app.component.scss', './rate-this-app-btn.component.scss']
})
export class RateThisAppBtnComponent{
  selectedOption: string;
  // tell parent button clicked
  @Output() onRateThisAppConfirmClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onRateThisAppCancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialog: MdDialog) {
  }

  openRateThisAppDialog() {
    const dialogRef = this.dialog.open(RateThisAppDialogComponent);
    dialogRef.afterClosed().subscribe( result => {
      this.selectedOption = result;
      // notify parent
      result === 'confirm' ? this.notifyParentConfirm() : this.notifyParentCancel();
    })
  }

  // event emitter for closing sidebar
  notifyParentConfirm() {
    const result = true;
    this.onRateThisAppConfirmClicked.emit(result);
  }
  notifyParentCancel() {
    const result = false;
    this.onRateThisAppCancelClicked.emit(result);
  }

}
