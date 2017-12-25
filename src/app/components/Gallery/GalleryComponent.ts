import {Component, OnInit} from '@angular/core';
import {customerApiService} from "../../shared/httpRequests.service";
@Component({templateUrl: './Gallery.component.html'})
export class GalleryComponent implements OnInit {
    public allInfo;
    constructor(private customerApi : customerApiService) {}
    ngOnInit() {
        this.allInfo = this.customerApi.getAllInfo() 

    };
}
