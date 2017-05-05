import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReleaseNotesBtnComponent } from './release-notes-btn/release-notes-btn.component';
import { ReleaseNotesDialogComponent } from './release-notes-dialog/release-notes-dialog.component';

@NgModule({
  declarations: [
    ReleaseNotesBtnComponent,
    ReleaseNotesDialogComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [ReleaseNotesDialogComponent],
  exports: [
    SharedModule,
    ReleaseNotesBtnComponent,
    ReleaseNotesDialogComponent
  ]
})
export class ReleaseNotesModule { }
