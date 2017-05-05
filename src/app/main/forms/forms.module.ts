import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';

// custom modules
import { MediaUploaderModule } from '../../ui-components/media-uploader/media-uploader.module';
// pipes
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
// third party
import { MyDatePickerModule } from 'mydatepicker/dist';
import { MyDateRangePickerModule } from 'mydaterangepicker/dist';

// Components
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MediaUploaderModule,
    MyDatePickerModule,
    MyDateRangePickerModule,
    SharedPipesModule
  ],
  declarations: [
    FormsComponent
  ]
})
export class FormsPageModule { }
