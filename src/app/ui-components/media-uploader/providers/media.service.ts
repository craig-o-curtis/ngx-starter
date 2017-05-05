import { Injectable } from '@angular/core';
import { ApiService } from '../../../providers/api.service';

import { AzureAppId, AppNameAzureCase } from '../../../constants/app.constants';
import { IMedia } from '../media.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MediaService {

  constructor(
    private _api: ApiService
  ) { }

  getSharedAccessSignature(fileName) {
    let params = {
      fileName: fileName
    }

    return this._api.post( 'sharedAccessSignature', params, { commonPath : false } );
  }

  getMedia(AzureAppId?: string, AppNameAzureCase?: string) {
    const mockUrl = './src/app/ui-components/media-uploader/providers/mock-media.json';
    // reall get media call should  pass up
    // *** See BI Reporting Media Service for real working version
    return this._api.mockGet(mockUrl)
      .map( (res: any|Response) => <IMedia[]>res.json().searchResults )
      .catch( this._handleError );
  }

  deleteFile(fileName) {
    return this._api.post( 'deleteFile', { fileName: fileName }, { commonPath: false } );
  }

  updateFileMetadata( params ) {
    return this._api.put( 'updateFileMetadata', params, { commonPath: true} ); // true || { commonPath: true }
  }

  uploadFiles( files ) {
    return;
  }

  private _handleError(err: any) {
    return Observable.throw(err.json().error || 'Server error');
  }


}
