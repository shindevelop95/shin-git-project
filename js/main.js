$(function(){
  AOS.init({
      easing:'ease',
      duration:1000
  });
});

$(document).ready(function(){

  $('.student-view .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,  
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        
        },
        1000:{
            items:6,
          
            loop:false
        }
    }
});

$('.staff-view .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,  
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        
        },
        1000:{
            items:6,
            loop:false
        }
    }
});

var $grid = $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
});

//filter items on button click
$(".button-group").on("click","button",function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({filter:filterValue});
});

   
});


$(document).ready(function(){

    /*Cancel Toggle*/
    $("#cancel-btn-1").click(function(){
        $(".approved-1").toggleClass("strike");
    });

    $("#cancel-btn-1").click(function(){
        $(this).toggleClass("hidden");
    });

    $("#cancel-btn-1").click(function(){
        $(".cancelled-1").toggleClass("show");
    });

    /*End of Cancel Toggle*/

    /*Cancel Toggle*/
    $("#cancel-btn-2").click(function(){
        $(".approved-2").toggleClass("strike");
    });

    $("#cancel-btn-2").click(function(){
        $(this).toggleClass("hidden");
    });

    $("#cancel-btn-2").click(function(){
        $(".cancelled-2").toggleClass("show");
    });
    /*End of Cancel Toggle*/

    /*Cancel Toggle*/
    $("#cancel-btn-3").click(function(){
        $(".approved-3").toggleClass("strike");
    });

    $("#cancel-btn-3").click(function(){
        $(this).toggleClass("hidden");
    });

    $("#cancel-btn-3").click(function(){
        $(".cancelled-3").toggleClass("show");
    });

    /*End of Cancel Toggle*/

    /*Cancel Toggle*/
    $("#cancel-btn-4").click(function(){
        $(".approved-4").toggleClass("strike");
    });

    $("#cancel-btn-4").click(function(){
        $(this).toggleClass("hidden");
    });

    $("#cancel-btn-4").click(function(){
        $(".cancelled-4").toggleClass("show");
    });
    /*End of Cancel Toggle*/

    /*Cancel Toggle*/
    $("#cancel-btn-5").click(function(){
        $(".approved-5").toggleClass("strike");
    });

    $("#cancel-btn-5").click(function(){
        $(this).toggleClass("hidden");
    });

    $("#cancel-btn-5").click(function(){
        $(".cancelled-5").toggleClass("show");
    });

    /*End of Cancel Toggle*/

    /*Cancel Toggle*/
    $("#cancel-btn-6").click(function(){
        $(".approved-6").toggleClass("strike");
    });

    $("#cancel-btn-6").click(function(){
        $(this).toggleClass("hidden");
    });

    $("#cancel-btn-6").click(function(){
        $(".cancelled-6").toggleClass("show");
    });
    /*End of Cancel Toggle*/
    
});


$(document).ready(function(){
    $(".suspend").click(function(){
        if (confirm("Are you sure you want to suspend this account?")) {
            $(this).parent().parent().parent().toggleClass("card-suspended")
                        .append('<label class="suspend-label">Account Suspended</label>');
        }
       
    });
});



