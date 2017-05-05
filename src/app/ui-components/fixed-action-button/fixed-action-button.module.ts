import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
// components
import { FixedActionButtonComponent } from './fixed-action-button.component';
// Services
import { FixedActionButtonService } from './providers/fixed-action-button.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FixedActionButtonComponent
  ],
  providers: [
    FixedActionButtonService
  ],
  exports: [
    FixedActionButtonComponent
  ]
})
export class FixedActionButtonModule { }
