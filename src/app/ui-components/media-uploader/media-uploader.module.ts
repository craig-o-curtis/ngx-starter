import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MediaUploaderComponent } from './media-uploader.component';
import { MediaService } from './providers/media.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    SharedModule,
    PerfectScrollbarModule,
  ],
  declarations: [
    MediaUploaderComponent
  ],
  exports: [
    MediaUploaderComponent
  ],
  providers: [
    MediaService
  ]
})
export class MediaUploaderModule { }
