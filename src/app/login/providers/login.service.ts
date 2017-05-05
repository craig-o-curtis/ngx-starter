import { Injectable } from '@angular/core';
import { AppNameCamelCase } from '../../constants/app.constants';

@Injectable()
export class LoginService {

  constructor() { }

  login() {

  }

  public logout(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      localStorage.removeItem(`${AppNameCamelCase}AppToken`);
      localStorage.removeItem(`${AppNameCamelCase}App`);

      resolve(true);
    });
  }

  public checkIfLoggedIn(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let isLoggedIn: boolean;
      isLoggedIn = !!localStorage.getItem(`${AppNameCamelCase}App`);

      resolve(isLoggedIn);
    });
  }

/* ___  ____ _ _  _ ____ ___ ____
   |__] |__/ | |  | |__|  |  |___
   |    |  \ |  \/  |  |  |  |___  */

}
