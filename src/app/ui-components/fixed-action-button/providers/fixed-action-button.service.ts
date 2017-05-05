import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FixedActionButtonService {
  // makes fab observable
  public fabStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showPulse: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public fabEl: any;

  constructor() { }

  displayFab(value: boolean) {
    // need reference to DOM element somehow for adding / removing classes
    this.fabStatus.next(value);
  }

  togglePulse(value: boolean) {
    this.showPulse.next(value);
  }

}
