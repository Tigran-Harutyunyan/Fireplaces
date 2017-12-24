/**
 *
 * author: Tigran Harutyunyan.
 * 2017.
 **/


var section_to_scroll;



$(document).ready(function() {
    var disabled = false,
        allowScrolling = true,
        _docWidth = $(window).width(),
        sliders = $('.sliders-place'),
        menuToggler = $('#menu-toggler'),
        mobileMenuContainer = $('.mobile-menu-container'),
        latestSwitchID = "new",
        latestScreenSize,
        currentPageID = $('body').attr("data-id"),
        _htmlElement = $('html'),
        htmlBody = $('html,body');


    // =================== MENU TOGGLER MECHANISM ==================

    menuToggler.click(function(event) {
        event.stopPropagation()
        $(this).toggleClass("opened-menubar");
        mobileMenuContainer.toggleClass('menu-opened')
    });
    // =============================================================


    if (currentPageID === "gallery") {

        // =================== GALLERY PAGINATION MECHANISM ==================

        var galleriesPages = $(".holder-inner");
        var galleriesPaginator = $("div.holder");
        var paginatorInitiated = false;
        var screenState;
        var latestScreenState = -1;
        var initPagination = function() {
            var windowWidth = $(window).width();
            var paginatorOptions = {
                containerID: "gallery-slider",
                animation: "bounceIn",
                previous: "",
                next: "", //jp-previous jp-disabled jp-next
                callback: function(pages, items) {
                    galleriesPages.html(items.range.start + " - " + items.range.end + " / " + items.count);
                }
            };

            if (windowWidth > 1260) {
                screenState = 3;
                paginatorOptions.perPage = 9;
            } else if (windowWidth > 850 && windowWidth <= 1260) {
                screenState = 0;
                paginatorOptions.perPage = 6;
            } else {
                screenState = 1;
                paginatorOptions.perPage = 3;
            }


            //console.log("windowWidth: " + windowWidth);
            //console.log("screenState: " + screenState);

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
            //console.log("latestScreenState: " + latestScreenState);
        };
        initPagination();
        var lazyLayout = _.debounce(initPagination, 10);
        $(window).resize(lazyLayout);

    } else if (currentPageID === "home") {

        // =============HOME PAGE START============================       

        var homeSlider = $('#gallery-1').royalSlider({ // HOME SLIDER 
            addActiveClass: true,
            arrowsNav: false,
            controlNavigation: 'none',
            autoScaleSlider: true,
            autoScaleSliderWidth: 960,
            autoScaleSliderHeight: 340,
            addActiveClass: true,
            transitionSpeed: 800,
            loop: true,
            fadeinLoadedSlide: false,
            numImagesToPreload: 3,
            globalCaption: true,
            keyboardNavEnabled: true,
            globalCaptionInside: false,
            visibleNearby: {
                enabled: true,
                centerArea: 0.4,
                center: true,
                breakpoint: 1200,
                breakpointCenterArea: 0.64,
                navigateByCenterClick: true
            }
        }).data('royalSlider');
        homeSlider.ev.on('rsAfterContentSet', function() {
            // fires when every time when slide content is loaded and added to DOM
            setTimeout(function() {
                $(".slider-title").dotdotdot({
                    ellipsis: '... ',
                    wrap: 'word',
                    watch: true
                });
            }, 200)
        });
        // link to fifth slide from slider description.
        $('#home-prev').click(function(e) {
            homeSlider.prev();
            return false;
        });
        $('#home-next').click(function(e) {
            homeSlider.next();
            return false;
        });
        // =============HOME PAGE END============================
    } else if (currentPageID === "menu") {
        var scrollTarget = $(".menu-scroll-place");
        if (_docWidth > 780) {
            scrollTarget.height($(window).height() - 274); // Set menu scroller height
        } else {
            scrollTarget.height($(window).height() - 150); // Set menu scroller height
        }

        // if (_docWidth > 1200) {
        // init custom scrollbar
        scrollTarget.mCustomScrollbar({
            autoHideScrollbar: false,
            theme: "light-thin",
            advanced: {
                updateOnContentResize: true,
                autoScrollOnFocus: false
            },
            mouseWheel: {
                preventDefault: true
            },
            scrollInertia: 300
        });
        // }
        // ============ LEFT MENU LIST TOGGLER ================================
        var menuListToggler = $("#menu-list-toggler");
        var menuListCloser = $("#closeMenuList");
        var menulistHolder = $(".ul-menu-items");
        var offeringsItems = $('.offerrings-container div'); //bounceInDown
        //var menuListContainer = $(".menu-categories-container");
        var menuContainer = $('.menus-container');
        var allMenuLinks = $('.menu__link');
        var offeringsDescription = $('.offerring-description');
        // ================Animate menu items================
        allMenuLinks.on('click', function(e) {
           // e.preventDefault(); 
            var currentLinkElem = $(this);
            allMenuLinks.removeClass('active-menu');
            currentLinkElem.addClass('active-menu'); //offeringsDescription
            offeringsDescription.removeClass('current-menu-item-active');
            offeringsItems.removeClass('bounceInRight').addClass('bounceOutRight');
            manipulateMenuSection(false);
            htmlBody.removeClass('no-scroll');
            setTimeout(function() {
                offeringsItems.removeClass('bounceOutRight').addClass('bounceInRight');
            }, 1000);
            setTimeout(function() {
                offeringsDescription.addClass('current-menu-item-active');
            }, 1100)
        });
        //=====================================================
        menuListToggler.on("click", function() {
            manipulateMenuSection(true);
            htmlBody.addClass('no-scroll');
            menuListToggler.hide();
        });
        menuListCloser.on("click", function() {
            manipulateMenuSection(false);
            htmlBody.removeClass('no-scroll');
            menuListToggler.show();
        });
        if (_docWidth < 1250) {
            menulistHolder.removeClass("menus-opened");
        }

        function manipulateMenuSection(isMenuListOpened) {
            if (isMenuListOpened) {
                menuContainer.addClass("opened-list");
                setTimeout(function() {
                    menulistHolder.addClass("menus-opened");
                }, 20);
            } else {
                menuContainer.removeClass("opened-list");
                //menulistHolder.removeClass("menus-opened");
            }
        }

/*         function evalLayout() {}

        $(window).resize(_.debounce(evalLayout, 100)); */
    }

    // ====================== MENU SCROLLER ======================================
    $("a[href*='#']").mPageScroll2id({
        offset: 100
    });

    // Close menu list 
    //================== Close menu list =====================
    var mainMenuCloser = $('#trigger');
    $(".drawer-list a").on('click', function() {
        mainMenuCloser.prop('checked', false)
    });
    /* $.mPageScroll2id("scrollTo", "#section-about", {
         offset: "200"
     });*/

    /*$(".menu-item, .logo-link, .nav-item").bind('click', function (event) {
        var param = event.currentTarget.attributes['data-scroll-nav'];
        if (param && param.value) {
            section_to_scroll = "#" + param.value;
            var currentElement = $(this);
            $(".menu-item").removeClass('active-menu');
            $(".nav-item").removeClass('active-menu');
            currentElement.addClass('active-menu');
            if ($(section_to_scroll).offset()) {
                htmlBody.animate({
                    scrollTop: $(section_to_scroll).offset().top - 150
                }, 500);
            }
        }
    });*/
    //====================== SUBSCRIBE FORM =============================
    $("#subscriptionForm").validate({
        rules: {
            subscribe_email: "required"
        },
        submitHandler: function() {
            if (!disabled) {
                var button = $(".btn-submit");
                button.disabled = true;
                button.val("Sending...");
                setTimeout(function(){
                    disabled = false;
                    button.val("Send");
                    toastr.success("Record has been successfully saved");
                }, 3000);
            }
        }
    });

    //==========================TOASTER OPTIONS=============================

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

    //============================================================================== 

});