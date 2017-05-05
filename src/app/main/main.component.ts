import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
// grab login service
import { LoginService } from '../login/providers/login.service';
import { SpinnerService } from '../ui-components/spinner/providers/spinner.service';
import { FixedActionButtonService } from '../ui-components/fixed-action-button/providers/fixed-action-button.service';

@Component({
  selector: 'app-main-cmp',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.scss', './main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'NGX Starter';
  location: string; // for url location
  @ViewChild(SidenavComponent) cmpsidenav: SidenavComponent;
  @ViewChild('sidenav') sidenav; // view template variable on this view
  @ViewChild('mainSpinner') mainSpinner; // for DOM manipulation
  @ViewChild('fixedActionButton') fixedActionButton; // for DOM manipulation
  spinnerStatus: boolean; // may need to ViewChild for this one...
  fabStatus: boolean;

  // can call mainspinner, inside component has funtion element ref to add fadeOut class

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _login: LoginService,
    private _spinner: SpinnerService,
    private _fab: FixedActionButtonService ) { }

  // ngOnInit for API calls
  ngOnInit() {

    // subscribe to router events! --- start spinner on any route change!!
      // cancel spinner from within destination routes after API calls
    this._router.events
      .subscribe( (event: any): void => {
        this.location = event.url;

        if (event instanceof NavigationStart) {
          this._spinner.displaySpinner(true);
        }
        if (event instanceof NavigationCancel) {
          this._spinner.displaySpinner(false);
        }
        if (event instanceof NavigationError) {
          this._spinner.displaySpinner(false);
        }
        if (event instanceof NavigationEnd) {
          this._toggleFab();
        }
      });

    // subscribe to spinner Subject
    this._spinner.spinnerStatus
      .subscribe( (status: boolean): boolean => this.spinnerStatus = status);

    // subscribe FAB to fabStatus from behaviorSubject
    this._fab.fabStatus
      .subscribe( (status: boolean): boolean => this.fabStatus = status );
  }

  logout(): void {
    // promise that removes LS
    this._login.logout()
      .then( () => {
        this._router.navigate(['/login']);
      });
  }

  goHome(): void {
    this._router.navigate(['../main/home']);
    this.sidenav.close();
    this._spinner.displaySpinner(true);
    setTimeout(() => {
      this._spinner.displaySpinner(false);
    }, 3000);
  }

  // private

  private _toggleFab(): void {
    const locationPath = location.pathname || location.href;
    // OK path
    const okRegexPath = /forms/.test(locationPath);
    console.log(locationPath);
    // display fab only on okRegexPath's
    (okRegexPath) ? this._fab.displayFab(true) : this._fab.displayFab(false);
  }

}
