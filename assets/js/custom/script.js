jQuery(document).ready(function() {
    
    var width = $(window).width();     

    
//    ======== smooth scolling =======
    
        $('a').click(function(){
            
            closeburgur();
            
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
                
            }, 500);
            
            return false;
        });
    
    
//    ======== smooth scolling end =======
    
    

//    ============= Mobile Navbar ============
    
    $('.burgur').on('click', function () {
        $(this).addClass('hidden');
        $('.main-navbar').removeClass('hidden');
        $('.closeburgur').removeClass('hidden');
        $('body').css('overflow', 'hidden');
    })
    
    $('.closeburgur').on('click', function () {
        closeburgur();
    })
    
    function closeburgur () {
        $('.closeburgur').addClass('hidden');
        $('.main-navbar').addClass('hidden');
        $('.burgur').removeClass('hidden');
        $('body').css('overflow', 'auto');
    }
    
//    ============= Mobile Navbar End ============
    
    
    
    
// ======== On Window Resize ========
    
    $(window).on('resize', function () {
        
        if (width >= 768  ) {
            
            $('.main-navbar').addClass('hidden');
            
        }
    })
    
// ======== On Window Resize END ========
    
    
    
//======== Change Navbar Color on Scroll ========    
    
    
    
    $('.section').each(function() {
      $(this).waypoint(function(event) {

        if(event == 'up') {

            if ($(this.element).hasClass("whiteblack")) {
                $('.leftnav').removeClass('blackonwhite');
                $('.leftnav').addClass('whiteonblack');
                $('.rightnav').removeClass('whiteonblack');
                $('.rightnav').addClass('blackonwhite');
            }
            if($(this.element).hasClass("blackwhite")){
                $('.leftnav').removeClass('whiteonblack');
                $('.leftnav').addClass('blackonwhite');
                $('.rightnav').removeClass('blackonwhite');
                $('.rightnav').addClass('whiteonblack');
            }

        }else{
            if ($(this.element).hasClass("whiteblack")) {
                $('.leftnav').removeClass('whiteonblack');
                $('.leftnav').addClass('blackonwhite');
                $('.rightnav').removeClass('blackonwhite');
                $('.rightnav').addClass('whiteonblack');
            }
            if($(this.element).hasClass("blackwhite")){
                $('.leftnav').removeClass('blackonwhite');
                $('.leftnav').addClass('whiteonblack');
                $('.rightnav').removeClass('whiteonblack');
                $('.rightnav').addClass('blackonwhite');
            }

        }



      });
    });

    
//======== Change Navbar Color on Scroll End ========    
    
    
    
    
//    =========== Project Filter =========
    
    
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
    
//    ============= Project Filter End ===========
    

    $('div.project-overlay').on('mousewheel', function(event) {
        
        if(event.deltaY < 0) {
            $('div.project-overlay.active').addClass('fullscreen');
            $('body').addClass('overflow-hidden');
        }
        
        
        
    });

//    $('.projectimages').on('scroll', function () {
//        console.log('scroll ho');
//    })
    
    $(".projectimages").scroll(function () {
            $scrollTop = $(this).scrollTop()
            $offset = $(".lastimg").offset().top - $(".lastimg").offsetParent().offset().top;
//        console.log($scrollTop);
    });
    
    
//$(".getoffset").offset().top - $(".getoffset").offsetParent().offset().top
    
    
    
    $('.project-box').on('click', function () {
        $('div.project-overlay').addClass('close');
        $(this).children('div.project-overlay').removeClass('close');
        $(this).children('div.project-overlay').addClass('active');
        $('.main-navbar, .mainnavbar-burgur').addClass('hidden');
        $('.main-navbar').removeClass('z-50');
        $('body').addClass('overflow-hidden');
    })
    
    $('.closeprojectoverlay').on('click', function () {
        $('.project-overlay').removeClass('active fullscreen');
        $('.project-overlay').addClass('close');
        $('body').removeClass('overflow-hidden');
        $('.mainnavbar-burgur').removeClass('hidden');

        
        if (width >= 768  ) {
            closeProjectInfo();
            $('.main-navbar').removeClass('hidden');
            $('.main-navbar').addClass('z-50');
        }
    })
    
     $('html').click(function() {
        $('body').removeClass('overflow-hidden');
        $('.project-overlay').addClass('close');
        $('.project-overlay').removeClass('active');
        $('.mainnavbar-burgur').removeClass('hidden');           
        

        if (width >= 768  ) {
            closeProjectInfo();
            $('.main-navbar').removeClass('hidden');
            $('.main-navbar').addClass('z-50');
            
        }
         
     });

     $('.project-overlay, .project-box').click(function(event){
         event.stopPropagation();
     });
    
    $('.closeprojectinfo').on('click', function() {
        openProjectInfo();
    })
    
    $('.openprojectinfo').on('click', function() {
        closeProjectInfo();
    })
    
    function openProjectInfo () {
        $('.overlay-actions-close-projectinfo').addClass('hidden');
        $('.overlay-actions-open-projectinfo').removeClass('hidden');
        $('.projectinfo').removeClass('right-0 inset-y-0 absolute');
        $('.projectimages').removeClass('w-1/2');
        $('.projectimages').addClass('w-full');
        $('.projectimages > .inner').addClass('max-w-6xl mx-auto');
    }
    
    function closeProjectInfo () {
        $('.overlay-actions-close-projectinfo').removeClass('hidden');
        $('.overlay-actions-open-projectinfo').addClass('hidden');
        $('.projectinfo').addClass('right-0 inset-y-0 absolute');
        $('.projectimages').addClass('w-1/2');
        $('.projectimages').removeClass('w-full');
        $('.projectimages > .inner').removeClass('max-w-6xl mx-auto');
    }
    
    
    $('.timeline-left').each(function(i, obj) {
        $childHeight = $(this).find('.timeline-right').height();
        $(this).height($childHeight);
    });
    
    

    $('.circle1').circleProgress({
        startAngle: -1.55,
        size: 160,
        thickness: 2,
        value: 0.45,
        fill: {
            color: '#000000'
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
    	$(this).find('strong').html($(this).attr('data-type') +'<br> '+ '<span class="text-sm">' + String(stepValue.toFixed(2)).substr(2)+'%'+'<span/>');
    });


    $('.circle2').circleProgress({
        startAngle: -1.55,
        size: 160,
        thickness: 2,
        value: 0.65,
        fill: {
            color: '#000000'
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
    	$(this).find('strong').html($(this).attr('data-type') +'<br> '+ '<span class="text-sm">' + String(stepValue.toFixed(2)).substr(2)+'%'+'<span/>');
    });


    $('.circle3').circleProgress({
        startAngle: -1.55,
        size: 160,
        thickness: 2,
        value: 0.35,
        fill: {
            color: '#000000'
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
    	$(this).find('strong').html($(this).attr('data-type') +'<br> '+ '<span class="text-sm">' + String(stepValue.toFixed(2)).substr(2)+'%'+'<span/>');
    });


    $('.circle4').circleProgress({
        startAngle: -1.55,
        size: 160,
        thickness: 2,
        value: 0.85,
        fill: {
            color: '#000000'
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
    	$(this).find('strong').html($(this).attr('data-type') +'<br> '+ '<span class="text-sm">' + String(stepValue.toFixed(2)).substr(2)+'%'+'<span/>');
    });


    $('.circle5').circleProgress({
        startAngle: -1.55,
        size: 160,
        thickness: 2,
        value: 0.95,
        fill: {
            color: '#000000'
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
    	$(this).find('strong').html($(this).attr('data-type') +'<br> '+ '<span class="text-sm">' + String(stepValue.toFixed(2)).substr(2)+'%'+'<span/>');
    });


    $('.circle6').circleProgress({
        startAngle: -1.55,
        size: 160,
        thickness: 2,
        value: 0.25,
        fill: {
            color: '#000000'
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
    	$(this).find('strong').html($(this).attr('data-type') +'<br> '+ '<span class="text-sm">' + String(stepValue.toFixed(2)).substr(2)+'%'+'<span/>');
    });

    


  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });


})