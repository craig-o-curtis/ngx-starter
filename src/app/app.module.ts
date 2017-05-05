import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ng4 animations
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// SharedModule
import { SharedModule } from './shared/shared.module';

// Our Routing logic
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './routing/app-routing.module';
// Angular Material & related
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { RatingModule } from 'ngx-bootstrap';

// AppComponent is the root of the app
import { AppComponent } from './app.component';
// These are modules we define
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
// Services
import { ApiService } from './providers/api.service';
// Pipes
import { SharedPipesModule } from './pipes/shared-pipes.module';
// Rxjs Extensions
import './rxjs/rxjs-extensions';
// Shared like moment, jQ, lodash
import './vendor/third-party-libs';
// scrollbar
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false,
  suppressScrollY: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    RatingModule.forRoot(),
    MaterialModule.forRoot(),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    AppRoutingModule,
    LoginModule,
    MainModule,
    SharedPipesModule
  ],
  providers: [ ApiService ],
  exports: [
    RouterModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
