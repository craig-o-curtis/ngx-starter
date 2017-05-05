import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
// Our defined components
import { LoginComponent } from './login.component';
// Services
import { LoginService } from './providers/login.service';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    LoginService
  ],
  exports: [
    SharedModule,
    LoginComponent
  ]
})
export class LoginModule { }
