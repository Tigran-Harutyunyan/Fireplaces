import {Component, OnInit,  AfterViewInit} from '@angular/core';
import { customerApiService } from "../../shared/httpRequests.service"; 
declare var jquery : any;
declare var $ : any;

@Component({templateUrl: './Home.component.html'})

export class HomeComponent implements AfterViewInit {
  constructor(  private customerApi: customerApiService ) { }
  public showApp: boolean = false;
  public allInfo : {};
  ngOnInit(){
    this.allInfo = this.customerApi.getAllInfo();
    console.log(this.allInfo)
  }

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
    $("#sliderTestimonials").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      loop: false,
      smartSpeed: 600,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 0,
      nav: false,
      dots: true,
      dotsContainer: $('.testimonials-dots'),
      items: 1,
      autoHeight: true,
      mouseDrag: false,
      onInitialized: function (event) {}
    });
    $(".products-slider").owlCarousel({
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      loop: false,
      smartSpeed: 600,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 30,
      nav: false,
      dots: true,
      autoHeight: true,
      mouseDrag: false,
      dotsContainer: $('.products-dots'),
      onInitialized: function (event) {},
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1
        },
        // breakpoint from 480 up
        820: {
          items: 2
        },
        // breakpoint from 768 up
        1180: {
          items: 3
        }
      }
    });
  };
}
