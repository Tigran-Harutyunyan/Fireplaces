import {Component, OnInit, AfterViewInit} from '@angular/core';
declare var jquery : any;
declare var $ : any;
import * as toastr from 'toastr';
import {customerApiService} from "../../shared/httpRequests.service";
import {IServerData} from "../../shared/allData.model";
import {forEach} from '@angular/router/src/utils/collection';
@Component({templateUrl: './Products.component.html'})
export class ProductsComponent implements AfterViewInit {
  constructor(private customerApi : customerApiService) {}
  public serverData : IServerData;
  public filterResults : any[];
  public noRecords : boolean = false;
  public loading : boolean = false;
  public filterProducts() {
    this.loading = true;
    let filter = {
      fuelTypes: [],
      fireplaceSizeRanges: [],
      heatOutputRanges: [],
      priceRanges: []
    }
    console.log(filter)
    this
      .serverData
      .fuelTypes
      .forEach(element => {
        if (element.isChecked) {
          filter
            .fuelTypes
            .push(element.id)
        }
      });
    this
      .serverData
      .priceRanges
      .forEach(element => {
        if (element.isChecked) {
          filter
            .priceRanges
            .push(element.id)
        }
      });
    this
      .serverData
      .heatOutputRanges
      .forEach(element => {
        if (element.isChecked) {
          filter
            .heatOutputRanges
            .push(element.id)
        }
      });
    this
      .serverData
      .fireplaceSizeRanges
      .forEach(element => {
        if (element.isChecked) {
          filter
            .fireplaceSizeRanges
            .push(element.id)
        }
      });

    this
      .customerApi
      .filterProducts(filter)
      .subscribe(data => {
        if (data.success) {
          if (data.data && Array.isArray(data.data)) {
            this.filterResults = data.data;
            this.noRecords = false;
          } else {
            this.noRecords = true;
            this.filterResults = [];
          }
        } else {
          toastr.error("Filter error.");
        }
       /*  setTimeout(() => {
          this.loading = false;
        }, 1200);  */
      }, (err) => {
        this.loading = false;
        toastr.error("Filter error.");
      });
  };
  ngAfterViewInit() {
    $("#slider1").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      loop: false,
      smartSpeed: 1000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 0,
      nav: true,
      dots: true,
      items: 1,
      autoHeight: true,
      mouseDrag: false,
      onInitialized: function (event) {
        setTimeout(function () {
          $('.home-slider').addClass('show-slider');
        }, 200);
      }
    });
  };
  ngOnInit() {
    this.serverData = this
      .customerApi
      .getAllInfo();
    this.filterProducts();
  };
}
