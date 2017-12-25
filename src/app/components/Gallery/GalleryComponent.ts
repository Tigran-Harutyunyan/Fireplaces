import {Component, OnInit} from '@angular/core';
import {customerApiService} from "../../shared/httpRequests.service";
@Component({templateUrl: './Gallery.component.html'})
export class GalleryComponent implements OnInit {
    public allInfo : {};
    public gallery : any[];
    constructor(private customerApi : customerApiService) {}
    ngOnInit() {
        this.allInfo = this
            .customerApi
            .getAllInfo();
        this
            .customerApi
            .getGalleryImages()
            .subscribe(responseData => {
                if (!responseData.error && Array.isArray(responseData)) {
                    responseData.forEach(element => {
                        element.imgUrl = `http://api.corefireplace.com/images/galleries/${element.image}`
                    });
                    this.gallery = responseData;
                }

            }, (err) => {})
    };
}
