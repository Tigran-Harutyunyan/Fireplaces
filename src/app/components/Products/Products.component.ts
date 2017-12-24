import {
  Component,
  OnInit, AfterViewInit 
} from '@angular/core'; 
declare var jquery : any;
declare var $ : any;

@Component({
  templateUrl: './Products.component.html'  
})
export class ProductsComponent implements AfterViewInit {
  constructor() {}

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
}

 