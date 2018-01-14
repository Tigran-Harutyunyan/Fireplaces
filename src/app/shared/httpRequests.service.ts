import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx'
//import {ToastrService} from 'ngx-toastr';
import {ErrorHandlerService} from './error-handler.service'
import {forEach} from '@angular/router/src/utils/collection';
import {IServerData} from "../shared/allData.model";
import {debug} from 'util';
@Injectable()

export class customerApiService {
    constructor(private http : Http, private router : Router, private errHandler : ErrorHandlerService) {}
    apiPath = "http://api.corefireplace.com";
    allData : IServerData;
    options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/x-www-form-urlencoded; charset=UTF-8'
        },)
    });

    public getGalleryImages() : Observable < any > {
        let url = `${this.apiPath}/api/getGalleryImages`;
        return this
            .http
            .get(url, this.options)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                } else {
                    return response.json();
                }
            })
            .catch(error => {
                this.handleError(error.json());
                return error.json();
            })
    };
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
    private proccessData(data : any) {
        if (data.services) {
            data
                .services
                .forEach(element => {
                    element.imgUrl = `${this.apiPath}/images/services/${element.image}`
                });
        }
        if (data.gallery) {
            data
                .gallery
                .forEach(element => {
                    element.imgUrl = `${this.apiPath}/images/galleries/${element.image}`
                });
        }
        if (data.testimonials) {
            data
                .services
                .forEach(element => {
                    element.style = `background-image:url(${this.apiPath}/images/testimonials/${element.image})`
                });
        }

        if (data.slider) {
            data
                .slider
                .forEach(element => {
                    element.style = {
                        'background-image': `url(${this.apiPath}/images/sliders/${element.image})`
                    }
                });
        }
        if (data.fireplaceOptionsAndAccessories) {
            data
                .fireplaceOptionsAndAccessories
                .forEach(element => {
                    element.imgSrc = `${this.apiPath}/images/options_and_accessory/${element.image}`;
                });
        }
        if (data.fireplaceSizeRanges) {
            data
                .fireplaceSizeRanges
                .forEach(element => {
                    element.isChecked = false
                });
        }
        if (data.fuelTypes) {
            data
                .fuelTypes
                .forEach(element => {
                    element.isChecked = false
                });
        }
        if (data.heatOutputRanges) {
            data
                .heatOutputRanges
                .forEach(element => {
                    element.isChecked = false
                });
        }
        if (data.priceRanges) {
            data
                .priceRanges
                .forEach(element => {
                    element.isChecked = false
                });
        }

        return data;
    };
    public getAllInfo() {
        return this.allData;
    };

    // ================= CONTACT POST REQUEST ====================

    public sendMail(formData : any) : Observable < any > {
        var url = `${this.apiPath}/api/sendEmail`;
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('contact_name', formData.contact_name);
        urlSearchParams.append('contact_message', formData.contact_message);
        urlSearchParams.append('contact_phone', formData.contact_phone);
        urlSearchParams.append('contact_email', formData.contact_email);
        urlSearchParams.append('contact_zip_code', formData.contact_zip_code);

        return this
            .http
            .post(url, urlSearchParams)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error.json());
                return Observable.empty();
            });
    };

    // ================= SUBSCRIBE POST REQUEST ====================

    public subscribe(email : string) : Observable < any > {
        var url = `${this.apiPath}/api/addSubscriber`;
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('contact_email_subscribe', email);
        return this
            .http
            .post(url, urlSearchParams)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error.json());
                return Observable.empty();
            });
    };
    // ================= CONTACT POST REQUEST ======================

    public filterProducts(filter : any) : Observable < any > {
        var url = `${this.apiPath}/api/filterProducts`;
        let urlSearchParams = new URLSearchParams();
        if (filter.fuelTypes.length) {
            urlSearchParams.append('fuel_type_id', JSON.stringify(filter.fuelTypes));
        }
        if (filter.fireplaceSizeRanges.length) {
            urlSearchParams.append('fireplace_size_range_id', JSON.stringify(filter.fireplaceSizeRanges));
        }
        if (filter.heatOutputRanges.length) {
            urlSearchParams.append('heat_output_range_id', JSON.stringify(filter.heatOutputRanges));
        }
        if (filter.priceRanges.length) {
            urlSearchParams.append('price_range_id', JSON.stringify(filter.priceRanges));
        }

        return this
            .http
            .post(url, urlSearchParams)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                }
                let _response = response.json(); 
                if (_response.data) {
                    _response
                        .data
                        .forEach(element => {
                            element.imgUrl = `${this.apiPath}/images/products/${element.image}`;
                        });
                } 
                return _response;
            })
            .catch(error => {
                this.handleError(error.json());
                return Observable.empty();
            });
    };
    // ================= GET PRODUCT BY ID =========================
    public getProductById(id : any) : Observable < any > {
        var url = `${this.apiPath}/api/filterProducts`;
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('price_range_id', JSON.stringify(id));
        return this
            .http
            .post(url, urlSearchParams)
            .map((response) => {
                if (response.json().error) {
                    this.handleError(response.json());
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error.json());
                return Observable.empty();
            });
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
