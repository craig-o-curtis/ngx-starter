import { Component, OnInit } from '@angular/core';
import { moment, _ } from '../../vendor/third-party-libs';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminGroups } from '../../constants/app.constants';
import { SpinnerService } from '../../ui-components/spinner/providers/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {
  spinnerStatus: boolean; // may need to ViewChild for this one...

  constructor(
    private _router: Router,
    private _spinner: SpinnerService ) { }

  ngOnInit() {
    // hookup spinner
    this._spinner.spinnerStatus
      .subscribe( (status: boolean) => this.spinnerStatus = status);

    // END SPINNER
    setTimeout(() => {
      this._spinner.displaySpinner(false);
    }, 3000);

  }

  goTo(destination): void {
    this._spinner.displaySpinner(true);
    // start spinner
    this._router.navigate([destination]);
  }

}
