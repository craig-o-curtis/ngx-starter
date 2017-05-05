import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactUsBtnComponent } from './contact-us-btn/contact-us-btn.component';
import { ContactUsDialogComponent } from './contact-us-dialog/contact-us-dialog.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ContactUsBtnComponent,
    ContactUsDialogComponent
  ],
  entryComponents: [ContactUsDialogComponent],
  exports: [
    SharedModule,
    ContactUsBtnComponent,
    ContactUsDialogComponent
  ]
})
export class ContactUsModule { }
