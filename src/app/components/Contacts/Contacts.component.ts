import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {emailValidator} from "../../shared/Validators/validators";
import {customerApiService} from "../../shared/httpRequests.service";
import {IServerData} from "../../shared/allData.model";
@Component({selector: 'contacts', templateUrl: './Contacts.component.html'})

export class ContactsComponent implements OnInit {
    constructor(public fb : FormBuilder, private customerApi : customerApiService) {}
    public contactForm : FormGroup;
    public lat : number = 34.239063;
    public lng : number = -118.393227;
    public zoom : number = 10;
    public uluru = {
        lat: 34.239063,
        lng: -118.393227
    }
    public serverData: IServerData;
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
    }
    public onSubmit(form : FormGroup) {
        if (this.contactForm.valid) {
            /*
            let queryString = `contact_subject=${encodeURIComponent(this.contactForm.value.name)}`;
            queryString += `&contact_message=${encodeURIComponent(this.contactForm.value.message)}`;
            queryString += `&contact_phone=${encodeURIComponent(this.contactForm.value.phone)}`;
            queryString += `&contact_email=${encodeURIComponent(this.contactForm.value.email)}`; */
            let formData = {
                contact_name: encodeURIComponent(this.contactForm.value.name),
                contact_message: encodeURIComponent(this.contactForm.value.message),
                contact_phone: encodeURIComponent(this.contactForm.value.phone),
                contact_email: encodeURIComponent(this.contactForm.value.email)
            }

            this
                .customerApi
                .sendMail(formData)
                .subscribe(data => {
                    if (!data.error) {
                        //this.router.navigate[''];
                    } else {}
                }, (err) => {});
        } else {
            this.validateAllFormFields(this.contactForm);
        }
        let queryString;
        //let   params = contact_subject,contact_email,contact_message;
        /*   this.customerApi
            .postRequest(queryString)
            .subscribe(data => {
                if (!data.error) {
                    //this.router.navigate[''];
                } else {}
            }, (err) => {}); */
    };
    ngOnInit() {  
        this.serverData = this
        .customerApi
        .getAllInfo();
        this.contactForm = this
            .fb
            .group({
                name: [
                    '', Validators.required
                ],
                phone: [
                    '', Validators.required
                ],
                zip: [
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
