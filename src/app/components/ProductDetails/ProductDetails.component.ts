import {Component, OnInit, AfterViewInit} from '@angular/core';

declare var jquery : any;
declare var $ : any;

@Component({templateUrl: './ProductDetails.component.html'})

export class ProductDetailsComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    $(".accessories-slider")
      .each(function () {
        $(this).owlCarousel({
          autoplay: false,
          autoplayTimeout: 5000,
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
          dotsContainer: $(this)
            .parent()
            .find('.products-dots'),
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
      });

  };
}
