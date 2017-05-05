import { Component, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ReleaseNotesDialogComponent } from '../release-notes-dialog/release-notes-dialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-release-notes-btn',
  templateUrl: './release-notes-btn.component.html',
  styleUrls: ['../../app.component.scss', './release-notes-btn.component.scss']
})
export class ReleaseNotesBtnComponent implements OnChanges {
  selectedOption: string;
  // tell parent button clicked
  @Output() onReleaseNotesConfirmClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onReleaseNotesCancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialog: MdDialog) {
  }

  openReleaseNotesDialog() {
    const dialogRef = this.dialog.open(ReleaseNotesDialogComponent);
    dialogRef.afterClosed().subscribe( result => {
      this.selectedOption = result;
      // notify parent
      result === 'confirm' ? this.notifyParentConfirm() : this.notifyParentCancel();
    })
  }

  // event emitter for closing sidebar
  notifyParentConfirm() {
    const result = true;
    this.onReleaseNotesConfirmClicked.emit(result);
  }
  notifyParentCancel() {
    const result = false;
    this.onReleaseNotesCancelClicked.emit(result);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.selectedOption);
  }
}
