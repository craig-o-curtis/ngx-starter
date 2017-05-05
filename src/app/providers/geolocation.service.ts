import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  public getCurrentPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation not supported');
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            resolve(position);
          },
          (err) => {
            reject(err);
          },
          { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true }
        );
      }
    });
  }

}
