$(document).ready(function () {
    var disabled = false;
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
        onInitialized: function (event) { 
        }
    });

    $(".products-slider").owlCarousel({
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        loop: false,
        smartSpeed: 600,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:30, 
        nav: false,
        dots: true, 
        autoHeight: true,
        mouseDrag: false,
        dotsContainer: $('.products-dots'),
        onInitialized: function (event) {},
        responsive : {
            // breakpoint from 0 up
            0 : { 
                items:1
            },
            // breakpoint from 480 up
            820 : {
                items:2
            },
            // breakpoint from 768 up
            1180 : {
                items:3
            }
        }
    });
    $(".accessories-slider").each(function() {
         $(this).owlCarousel({
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            loop: false,
            smartSpeed: 600,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:30, 
            nav: false,
            dots: true, 
            autoHeight: true,
            mouseDrag: false,
            dotsContainer: $(this).parent().find('.products-dots'),
            onInitialized: function (event) { 
            },
            responsive : {
                // breakpoint from 0 up
                0 : { 
                    items:1
                },
                // breakpoint from 480 up
                820 : {
                    items:2
                },
                // breakpoint from 768 up
                1180 : {
                    items:3
                }
            }
        });
      });
    
  
   /*  $(".slider2").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        loop: false,
        smartSpeed:3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:30, 
        nav: true,
        dots: true, 
        autoHeight: true,
        mouseDrag: false,
        dotsContainer: $('.slider2-section .products-dots'),
        onInitialized: function (event) { 
        },
        responsive : {
            // breakpoint from 0 up
            0 : { 
                items:1
            },
            // breakpoint from 480 up
            820 : {
                items:2
            },
            // breakpoint from 768 up
            1180 : {
                items:3
            }
        }
    }); */
    // =============== SCROLL TO PLUGIN ==================
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 100,
        highlightClass: "active-menu"
    });
  //==========SUBSCRIPTION FORM ============================
    $("#subscription_form").validate({
        rules: {
            subscription_mail: "required" 
        },
        submitHandler: function () {
            if (!disabled) {
                var button = $(".btn-submit");
                button.disabled = true;
                button.val("Sending...");
                var data = $(this.currentForm).serialize();
                $.ajax('http://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    data: data
                }).done(function (success) {
                    $("#contact_name").val("");
                    $("#contact_email").val("");
                    $("#contact_message").val("");
                    toastr.success("Success!")
                }).fail(function (error) {
                    toastr.error("An error occured.")
                }).always(function () {
                    disabled = false;
                    button.enabled = false;
                    button.val("Send");
                });
            }
        }
    });
    //==========CONTACT FORM ============================
    $("#contact_form").validate({
        rules: {
            contact_name: "required",
            contact_email: "required",
            contact_message: "required",
            contact_zip: "required",
            phone: "required"
        },
        submitHandler: function () {
            if (!disabled) {
                var button = $(".btn-submit");
                button.disabled = true;
                button.val("Sending...");
                var data = $(this.currentForm).serialize();
                $.ajax('http://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    data: data
                }).done(function (success) {
                    $("#contact_name").val("");
                    $("#contact_email").val("");
                    $("#contact_message").val("");
                    toastr.success("Success!")
                }).fail(function (error) {
                    toastr.error("An error occured.")
                }).always(function () {
                    disabled = false;
                    button.enabled = false;
                    button.val("Send");
                });
            }
        }
    });
    var menuToggler = $('#toggleMobileMEnu'),
        overlay = $('#overlay'),
        backdrop = $('.backdrop');

    // ============= MOBILE DROPDOWN =================
    menuToggler.click(function () {
        $(this).toggleClass('active');
        overlay.toggleClass('open');
       // backdrop.toggleClass('backdrop-active');
    });

    $('.overlay-menu a').click(function () {
        closeMenu();
    });

    backdrop.click(function () {
        closeMenu();
    });

    function closeMenu() {
        menuToggler.toggleClass('active');
        overlay.toggleClass('open');
       // backdrop.removeClass('backdrop-active');
    }

    // ================ jPAGES ==========================
/*     var paginatorOptions = {
        containerID: "itemContainer",
        previous: "",
        next: "",
        animation: ''

    }
    var galleriesPaginator = $("div.holder");
    var paginatorInitiated = false;
    var screenState;
    var latestScreenState = -1;
    var initPagination = function () {
        var windowWidth = $(window).width();
        if (windowWidth <= 1100) {
            paginatorOptions.perPage = 1;
            screenState = 0;
        } else {
            paginatorOptions.perPage = 2;
            screenState = 1;
        }
        if (latestScreenState === screenState) {
            return;
        } else {
            latestScreenState = screenState;
            if (paginatorInitiated) {
                galleriesPaginator.jPages("destroy");
            }
            paginatorInitiated = true;
            galleriesPaginator.jPages(paginatorOptions);
        }

    }; */
    //initPagination();
    /* var lazyLayout = _.debounce(initPagination, 200);
     $(window).resize(lazyLayout);
    setTimeout(function () {
        $("#itemContainer").addClass('visible-jpages');
    }, 1000) */
    // ================TOASTER ==========================

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "30000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    
});

function initMap() {
    var uluru = {
        lat: 34.239063, 
        lng: -118.393227
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    var customMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "45"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f89f1e"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
        , {
            name: 'Custom Style'
        });
    var customMapTypeId = 'custom_style';
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
};