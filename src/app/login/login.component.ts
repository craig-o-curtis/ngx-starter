import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './providers/login.service';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;


  constructor(
    private _router: Router,
    private _login: LoginService ) { }

  // ngOnInit for API calls
  ngOnInit() {

    this._rerouteIfLoggedIn();

  }

  reset(): void {
    this.username = '';
    this.password = '';
  }

  login(): void {
    this._router.navigate(['/main']);
  }



  private _rerouteIfLoggedIn(): void {
    this._login.checkIfLoggedIn()
      .then( (res) => {
        if (res) { this._router.navigate(['/main']); };
      });
  }

}
