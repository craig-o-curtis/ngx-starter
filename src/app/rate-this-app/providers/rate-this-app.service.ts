import { Injectable } from '@angular/core';

@Injectable()
export class RateThisAppService {
  ratingData: string;

  constructor() { }

  getRating(appName) {
    const ratingData = JSON.parse( localStorage.getItem(`${appName}-rating-data`));
    return ratingData;
  }

  setRating(appName, rating) {
    const ratingData = JSON.stringify(rating);
    localStorage.setItem(`${appName}-rating-data`, ratingData);
  }

}
