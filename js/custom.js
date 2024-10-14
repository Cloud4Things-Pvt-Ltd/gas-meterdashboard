

$(document).ready(function () {
    

/*Sticky_Header */
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".main-header").addClass("sticky");
        } else {
            $(".main-header").removeClass("sticky");
        }
    }); 


    /*menu-slidetoggle */
    $(".menu-toggle").click(function () {
      $(".full-menu").toggleClass("slide-right");
      $(this).find('i').toggleClass('fa-bars fa-times')
  });
   
//color-swatches-change on click
$(function () {
  'use strict';
  $('.switch-color li').on('click', function () {
    $(':root').css('--color1', $(this).data('color'));
  });
});
//color-swatches slide out
$(document).ready(function ($) {
  $('#slide-button, .close-icon').click(function () {
    $('.palette-swatches').toggleClass('show');
  });
});


// Increase/descrease font size

var $affectedElements = $("*"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});

$("#btn-increase").click(function(){
  changeFontSize(1);
})

$("#btn-decrease").click(function(){
  changeFontSize(-1);
})

$("#btn-orig").click(function(){
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}


});
$(document).ready(function(){
  $(".user-sec").click(function(){
    $(".user-box").slideToggle("slow");
  });
  
  $(".menu-toggle").click(function () {
    $(".menu-res").slideToggle();
    $(this).find('i').toggleClass('fa-bars fa-times')
});
});





  