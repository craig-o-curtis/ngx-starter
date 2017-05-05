import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GoogleApiService {

  constructor( private _http: Http) { }

  public get(url: string, params?: any) {
    // optional params
    params = params || {};
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.get(url, {headers: headers, params: params} );

  }

}
