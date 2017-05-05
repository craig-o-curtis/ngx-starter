import { timeout } from 'rxjs/operator/timeout';
import { Component } from '@angular/core';
import { ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // since toastrs are app-wide, config master here

  constructor( public toastrConfig: ToastrConfig ) {
    // default config --- individual config set where call service
    this.toastrConfig = {
      maxOpened : 0,
      autoDismiss : false,
      timeOut : 10000,
      iconClasses : {
        error: 'mdl-color--red',
        info: 'mdl-color--red',
        success: 'mdl-color--red',
        warning: 'mdl-color--red',
      },
      newestOnTop : true,
      preventDuplicates : false,
    }
  }

}
