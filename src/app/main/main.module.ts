import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// 3rd party

// Sidebar Modules
import { ReleaseNotesModule } from '../release-notes/release-notes.module';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { RateThisAppModule } from '../rate-this-app/rate-this-app.module';
// custom ui modules
import { MediaUploaderModule } from '../ui-components/media-uploader/media-uploader.module';
import { SpinnerModule } from '../ui-components/spinner/spinner.module';
import { FixedActionButtonModule } from '../ui-components/fixed-action-button/fixed-action-button.module';
// Our defined components
import { MainComponent } from './main.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// Child Modules
import { HomeModule } from './home/home.module';
import { FormsPageModule } from './forms/forms.module';
// Directives
// Child View Components
import { HomeComponent } from './home/home.component';
// Services
import { GeolocationService } from '../providers/geolocation.service';
import { GoogleApiService } from '../providers/google-api.service';
import { UserService } from '../providers/user.service';

@NgModule({
  declarations: [
    MainComponent,
    HeaderMenuComponent,
    SidenavComponent
  ],
  imports: [
    SharedModule,
    ReleaseNotesModule,
    ContactUsModule,
    RateThisAppModule,
    HomeModule,
    FormsPageModule,
    MediaUploaderModule,
    SpinnerModule,
    FixedActionButtonModule
  ],
  providers: [
    GeolocationService,
    GoogleApiService,
    UserService
  ],
  exports: [
    MainComponent,
    SharedModule,
    MediaUploaderModule,
    SpinnerModule,
    FixedActionButtonModule
  ]
})
export class MainModule { }
