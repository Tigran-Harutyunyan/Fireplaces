import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http'
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx' 
//import {ToastrService} from 'ngx-toastr'; 
import {ErrorHandlerService} from './error-handler.service'
import { forEach } from '@angular/router/src/utils/collection';
import { debug } from 'util';
@Injectable()

export class customerApiService {
    constructor(  private http : Http,  private router : Router, private errHandler : ErrorHandlerService) {}
 
    apiPath = "http://api.corefireplace.com"; 
    
    allData = {};
    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/x-www-form-urlencoded; charset=UTF-8'
        },)
    });
   
   
    public getAlldata() : Observable < any > {
        let url = `${this.apiPath}/api/getAllData`; 
        return this
            .http
            .get(url, this.options)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                } else {
                  
                    this.allData = this.proccessData(response.json());
                    return this.allData;
                } 
            })
            .catch(error => {
                this.handleError(error.json());
                return error.json();
            })

    };
    private proccessData(data:any){
        if(data.services){
            data.services.forEach(element => {
                element.imgUrl = `${this.apiPath}/images/services/${element.image}`
            });
        }
        if(data.testimonials){
            data.services.forEach(element => {
                element.style = `background-image:url(${this.apiPath}/images/testimonials/${element.image})`
            });
        }
         
        if(data.slider){
            data.slider.forEach(element => {
                element.style = {'background-image':`url(${this.apiPath}/images/sliders/${element.image})`}
            });
        }
        return data; 
    };
    public getAllInfo () {
        return this.allData;
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
