

/*global $, jquery, alert, console*/
$(document).ready(function () {
    
    'use strict';
    
    
    //FOR NAVBAR RESPONSIVE
    if($(window).width() <= 990 ){
        
    $('.nav .icon-nav, .nav ul li a ').click(function () {
            $('.nav-links').animate({
                "height" : "toggle"
    
            });
        });
    }
    ///////////////////////////////////
    //FOR NAVBAR ICON ANIMATION
    var counter = 1;
    $('.nav .icon-nav , .nav ul li a').click(function(){
        counter++;
        if( counter %2 == 0 ){
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(90deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "marginBottom" : "-9px",
                "transform" : "rotate(-45deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "marginTop" : "-9px",
                "transform" : "rotate(45deg)"   
            });
            
        }else{
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(0deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"   
            });
        }
    })
    /////////////////////////////////////////////
    //FOR ANIMATION NAVNAR
    
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() < 990) {
            
            $('.nav').css({
                "height":"70px",
            })
            $('.nav .nav-links').css({
                "top":"70px",
            })
        }else{
            $('.nav').css({
                "height":"60px",
            });
            $('.nav .nav-links').css({
                "top":"60px",
            })
        }
    });
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() > 990) {
            $('.nav').css({
                "paddingTop":"40px",
                "paddingBottom":"250px",
                "background": "transparent" ,
                "height":"70px",
            })
        }else{
            $('.nav').css({
                "paddingTop":"10px",
                "paddingBottom":"0px",
                "background": "#4e2ea9" ,
                "height":"60px !important",
            })
        }
    });
    /////////////////////////////////////////
    //FOR TEAM SECTION
    var count = 0;
    
    $('.moreButton').click(function() {
        
        $('.more').slideToggle();
        
        count++;
        if ( count %2 == 0 ){
            
            $('.team .content button i').css({
                "transform" : "rotate(0deg)"
            });
            
        }else{
            
            $('.team .content button i').css({
                "transform" : "rotate(135deg)"
            });
        }
    })
    
    /*************************************************SCROLL TO ELEMNT**************/
        $('.nav ul li a ').click(function(e){
            e.preventDefault();
            $('html ,body').animate({
                    scrollTop:$('#'+$(this).data('scroll')).offset().top 
                },2000);
            
        });
   /*************************************************SCROLL TO ELEMNT**************/
   /*************************************************SCROLL TO ELEMNT BY BUTTON**************/
    $(' .feat button, .header button  ').click(function(e){
        e.preventDefault();
        $('html ,body').animate({
                scrollTop:$('#'+$(this).data('scroll')).offset().top 
            },2000);

    });
   /*************************************************SCROLL TO ELEMNT BY BUTTTON**************/
   /*************************************************SCROLL_TO_TOP**************/
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 900){
            $('.scrollToTop').fadeIn(1000)
        }else{
            $('.scrollToTop').fadeOut(1000)
        }
    })
    $('.scrollToTop').click(function(){
        $('html,body').animate({
            scrollTop : '0'
        },2000)
    })
   /*************************************************SCROLL_TO_TOP**************/
    /*************************************************LOADING**************/
    $(window).on("load",function(){
        
        $('.loading .overlay .spinner').fadeOut(1000,function(){
            $(this).parent().fadeOut(1500)
        })
    })
   /*************************************************LOADING**************/
    
    
    
    
  
    
});

wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       150,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
new WOW().init();
            
        
