import { NgModule } from '@angular/core';
// Modules
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'ngx-bootstrap';
// child components
import { RateThisAppBtnComponent } from './rate-this-app-btn/rate-this-app-btn.component';
import { RateThisAppDialogComponent } from './rate-this-app-dialog/rate-this-app-dialog.component';
import { StarsComponent } from './rate-this-app-dialog/stars/stars.component';
// Services
import { RateThisAppService } from './providers/rate-this-app.service';

@NgModule({
  declarations: [
    RateThisAppBtnComponent,
    RateThisAppDialogComponent,
    StarsComponent
  ],
  imports: [
    SharedModule,
    RatingModule
  ],
  entryComponents: [ RateThisAppDialogComponent, StarsComponent ],
  exports: [
    SharedModule,
    RateThisAppBtnComponent,
    RateThisAppDialogComponent,
    StarsComponent
  ],
  providers: [
    RateThisAppService
  ]
})
export class RateThisAppModule { }
