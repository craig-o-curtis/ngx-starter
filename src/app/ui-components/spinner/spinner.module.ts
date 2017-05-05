import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './providers/spinner.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ SpinnerComponent ],
  exports: [
    // must export components for them to work in other modules
    SpinnerComponent
  ],
  providers: [
    SpinnerService
  ]
})
export class SpinnerModule { }
