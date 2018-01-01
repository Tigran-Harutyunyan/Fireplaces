import {Component, OnInit} from '@angular/core';
import {customerApiService} from "../../shared/httpRequests.service";
import {IServerData} from "../../shared/allData.model";

@Component({templateUrl: './Gallery.component.html'})
export class GalleryComponent implements OnInit {
    public serverData: IServerData;
    constructor(private customerApi : customerApiService) {}
    ngOnInit() {
        this.serverData = this.customerApi.getAllInfo(); 
    };
}
