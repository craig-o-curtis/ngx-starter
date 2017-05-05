/*
NOTES - need to check commonPath logic, porting from ng1 projects
*/

import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Environment } from '../../environments/environment';
import { AppNameDashCase, AppNameCamelCase } from '../constants/app.constants';

const EnvServer = Environment.apiBaseUrl;

@Injectable()
export class ApiService {

  constructor( private _http: Http ) { }

  public mockGet(mockUrl): Observable<any> {
    // mpaping handled by specific service
    return this._http.get(mockUrl)
      .map( (res: Response) => res )
      .catch( (err: any) => 'mock error' ) ;
  }

  // GET
  public get( endpoint: string,
        params?: any,
        options?: any ): Observable<any> {

    const apiURL = this._generateApiUrl(options);
    const searchParams: URLSearchParams = new URLSearchParams();

    params.forEach( (key) => {
      let value = params[key];
      value = (typeof params[key] === 'object') ? JSON.stringify(params[key]) : value;
      searchParams.set(key, value);
    });

    return this._http.get( (apiURL + `api.php?endpoint=${endpoint}&`), { search: searchParams } )
      .map( (res: Response) => res.json())
      .catch( (err: any) => Observable.throw(err.json().error) || `Server error on GET request of ${endpoint} endpoint.`);

  }

  // post
  public post( endpoint: string,
        body?: any,
        options?: any): Observable<any> {

    const bodyString = body ? JSON.stringify(body) : '';
    const apiURL = this._generateApiUrl(options);
    const requestOptions = this._generateRequestOptions(options);

    return this._http.post( (apiURL + `api.php?endpoint=${endpoint}`), body, requestOptions)
      .map( (res: Response ) => res.json())
      .catch( (err: any) => Observable.throw( err.json().error || `Server error on POST request of ${endpoint} endpoint.`));
  }

  // put
  public put(  endpoint: string,
        body?: any,
        options?: any ) {

    const bodyString = body ? JSON.stringify(body) : '';
    const apiURL = this._generateApiUrl(options);
    const requestOptions = this._generateRequestOptions(options);

    return this._http.put( (apiURL + `api.php?endpoint=${endpoint}`), body, requestOptions)
      .map( (res: Response ) => res.json())
      .catch( (err: any) => Observable.throw( err.json().error || `Server error on PUT request of ${endpoint} endpoint.`));
  }

/* ___  ____ _ _  _ ____ ___ ____
   |__] |__/ | |  | |__|  |  |___
   |    |  \ |  \/  |  |  |  |___  */

  // internal generate call metadata
  private _generateApiUrl(options) {
    // if this is not a common path (i.e. release notes), add the folder name of the app
    return (options === undefined || options.commonPath === undefined || !options.commonPath)
       ? `${EnvServer}${AppNameDashCase}/` : EnvServer;
  }

  /// for post
  private _generateRequestOptions(options): RequestOptions {
    let headerObj = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    headerObj['X-Access-Token'] = (options === undefined || options.useAuthorization === undefined || !options.useAuthorization)
      ? localStorage.getItem(`${AppNameCamelCase}Token`) : delete headerObj['X-Access-Token'];

    const headers = new Headers(headerObj);
    const requestOptions = new RequestOptions( { headers: headers } );

    return requestOptions;
  }
}
