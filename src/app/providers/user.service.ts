import { Injectable } from '@angular/core';
import { AppNameDashCase, AppNameCamelCase, AdminGroups } from '../constants/app.constants';
import { IUser } from '../interfaces/user.interface';
import { moment, _ } from '../vendor/third-party-libs';

@Injectable()
export class UserService {
  public user: any;

  constructor() { }

  // set to LS
  setUserData(userObject: IUser) {
    // set two-digit area
    userObject.isAdmin = this._getIsAdmin(userObject);
    userObject.role = JSON.parse(localStorage.getItem( `${AppNameCamelCase}AppRole`));

    const newUserObject = {
      user: userObject
    };

    localStorage.setItem(`${AppNameCamelCase}App`, JSON.stringify(newUserObject));
  }

  // get from LS
  getUserData() {
    const userObject = JSON.parse(localStorage.getItem(`${AppNameCamelCase}App`));

    const user = (userObject && userObject.user) ? userObject.user : null;
    this.user = user;

    return user;
  }

/* ___  ____ _ _  _ ____ ___ ____
   |__] |__/ | |  | |__|  |  |___
   |    |  \ |  \/  |  |  |  |___  */

  // checks app.constants and compares user array of groups
  private _getIsAdmin(userObject, adminRole?) {
    // this is an array, create interface
    const userAdminGroups = userObject.groups;

    adminRole = (adminRole) ? adminRole : 'isAdmin';

    let checkAdmin = ((()=>{
      let foundAdmin = false;
      const adminAccessGroups = _.filter(AdminGroups, {flag: adminRole});

      checkAdmin = _.forEach(userAdminGroups, (userGroup) => {
        const findAdmin = _.some(adminAccessGroups, { group: (userGroup) } );
        if ( findAdmin ) {
          foundAdmin = true;
        }
      });

      return foundAdmin;
    })());

    return checkAdmin;
  }

}
