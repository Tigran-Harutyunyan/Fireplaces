import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {emailValidator} from "../../shared/Validators/validators";
import {customerApiService} from "../../shared/httpRequests.service";
import {IServerData} from "../../shared/allData.model";
import * as toastr from 'toastr'; 
declare var jquery:any;
declare var $ :any;
@Component({selector: 'contacts', templateUrl: './Contacts.component.html'})

export class ContactsComponent implements OnInit {
    constructor(public fb : FormBuilder, private customerApi : customerApiService) {}
    public contactForm : FormGroup;
    public subscribeForm : FormGroup;
    public lat : number = 34.239063;
    public lng : number = -118.393227;
    public zoom : number = 10;
    public uluru = {
        lat: 34.239063,
        lng: -118.393227
    }
    public serverData : IServerData;
    public mapStyle = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                }, {
                    "lightness": "45"
                }
            ]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f89f1e"
                }, {
                    "visibility": "on"
                }
            ]
        }
    ];
    validateAllFormFields(formGroup : FormGroup) {
        Object
            .keys(formGroup.controls)
            .forEach(field => {
                const control = formGroup.get(field);
                if (control instanceof FormControl) {
                    control.markAsDirty({onlySelf: true});
                } else if (control instanceof FormGroup) {
                    this.validateAllFormFields(control);
                }
            });
    };
    public onSubmit(form : FormGroup) {
        if (this.contactForm.valid) {
            let formData = {
                contact_name: this.contactForm.value.name,
                contact_message: this.contactForm.value.message,
                contact_phone: this.contactForm.value.phone,
                contact_email: this.contactForm.value.email,
                contact_zip_code: this.contactForm.value.zipCode 
            };
            this
                .customerApi
                .sendMail(formData)
                .subscribe(data => {
                    if (data.success) {
                        toastr.success("Send email success.");
                    } else {
                        toastr.error("Send email error.");
                    }
                }, (err) => {
                    toastr.error("Server error.");
                });
        } else {
            this.validateAllFormFields(this.contactForm);
        }
    };
    public onSubmitSubscribe(form : FormGroup) {
        if (this.subscribeForm.valid) {
            this
                .customerApi
                .subscribe(this.subscribeForm.value.email)
                .subscribe(data => {
                    if (data.success) {
                        toastr.success("Subsribe success.");
                    } else {
                        toastr.error("Subsribe error.");
                    }
                }, (err) => {
                    toastr.error("Server error.");
                });
        } else {
            this.validateAllFormFields(this.subscribeForm);
        }
        let queryString;

    };
    ngOnInit() { 
        this.serverData = this
            .customerApi
            .getAllInfo();
        this.subscribeForm = this
            .fb
            .group({
                email: [
                    '', Validators.compose([Validators.required, emailValidator])
                ]
            });
        this.contactForm = this
            .fb
            .group({
                name: [
                    '', Validators.required
                ],
                phone: [
                    '', Validators.required
                ],
                zipCode: [
                    '', Validators.required
                ],
                email: [
                    '', Validators.compose([Validators.required, emailValidator])
                ],
                message: [
                    '',
                    [Validators.required]
                ]
            });

    };
}
