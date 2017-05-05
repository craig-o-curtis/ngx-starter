import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
// Components
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: []
})
export class HomeModule { }
