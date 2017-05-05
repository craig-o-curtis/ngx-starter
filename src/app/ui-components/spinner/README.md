// This spinner uses the Angular Material 2 spinner, plus Sass colors.scss for overlay
// inspired from http://ng-lightning.github.io/ng-lightning/#/components
// on route change http://stackoverflow.com/questions/38637176/show-load-spinner-on-angular2-route-navigate
// BehaviorSubject http://reactivex.io/rxjs/class/es6/BehaviorSubject.js~BehaviorSubject.html

// USAGE

Current usage
-- started from main.component -- listens for internal route changes
-- ended by stopping after API calls on child route
-- Has access to same spinner.service
  -- this creates a BehaviorSubject Observable, accessible as a service from any component nested in Main

Steps
1. import
import { SpinnerService } from '../../ui-components/spinner/providers/spinner.service';

2. Construct
  constructor(
    ...
    private _spinner: SpinnerService ) {
  }

3. Use
this._spinner.displaySpinner(true); // start
this._spinner.displaySpinner(false); // stop
