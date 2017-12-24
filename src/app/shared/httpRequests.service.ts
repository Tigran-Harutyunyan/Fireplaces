import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http'
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx' 
//import {ToastrService} from 'ngx-toastr'; 
import {ErrorHandlerService} from './error-handler.service'
@Injectable()

export class HttpRequestService {
    constructor(  private http : Http,  private router : Router, private errHandler : ErrorHandlerService) {}
 
    apiPath = "http://api.corefireplace.com"; 

    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/x-www-form-urlencoded; charset=UTF-8'
        },)
    });
   
   
    getAlldata() : Observable < any > {
        let url = `${this.apiPath}/api/getAllData`; 
        return this
            .http
            .get(url, this.options)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error.json());
                return error.json();
            })

    };

    // ======= GENERIC POST REQUEST ====================

    postRequest(params : string, data : Object) : Observable < any > {
        var queryString = `${params}`;
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(queryString, data, options)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error.json());
                return Observable.empty();
            })

    };
  
    //========= HANDLE HTTP ERRORS =================

    private handleError(error : any) {
        let errMsg = (error.message)
            ? error.message
            : error.status
                ? `error.status - error.statusText`
                : 'Server error';
        this
            .errHandler
            .handleHttpErrors(error);
        /*  this
            .toastrService
            .error(errMsg);*/
        return Observable.throw(errMsg);
    };
}
