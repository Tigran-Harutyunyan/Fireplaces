
    /*   htmlBody.animate({
          scrollTop: 0
      }, 0, 'easeInOutQuad');
      */
    //************* HEADER SCROLLING **********************************

    /*    var controller = new ScrollMagic.Controller();
        var sceneHeader = new ScrollMagic.Scene({
                triggerElement: "#main-section",
                triggerHook: 'onLeave',
                offset: 80
            })
            //.addIndicators()  
            .addTo(controller);
        sceneHeader.setClassToggle("#appHeader", "header--small");*/

        
    /*    if (navigator.userAgent.match(/Trident\/7\./)) { // smooth scrolling for fixed bgs in  IE 
            $('body').on("mousewheel", function () {
                // remove default behavior
                event.preventDefault();
    
                //scroll without smoothing
                var wheelDelta = event.wheelDelta;
                var currentScrollPosition = window.pageYOffset;
                window.scrollTo(0, currentScrollPosition - wheelDelta);
            });
        }*/

   //=============================== smooth scroll ====================
    if (window.chrome && window.chrome.webstore) {
        //smoothScrollInit();
    }
       // ============TOP NAVIGATION ===========================================

    /* var sectionsController = new ScrollMagic.Controller();
     var sceneNav = new ScrollMagic.Scene({
         triggerElement: "#main-section",
         triggerHook: 'onEnter',
         offset: 203
     })
         .addTo(sectionsController)
         //.addIndicators()
         .on("enter", function (e) {
             //console.log("enter");
         })
     sceneNav.setClassToggle("#top-nav", "section-services");*/
