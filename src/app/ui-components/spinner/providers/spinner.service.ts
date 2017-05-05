import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpinnerService {
  // makes spinner observable
  public spinnerStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public spinnerEl: any;

  constructor(  ) {

  }

  displaySpinner(value: boolean) {
    // need reference to DOM element somehow for adding / removing classes
    // not next iteratble thing, but the next state in time
    this.spinnerStatus.next(value);
  }

}
