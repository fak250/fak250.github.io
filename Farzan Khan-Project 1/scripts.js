$("a").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "black");
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//$(function () {
//    setNavigation();
//});
//
//function setNavigation() {
//    var path = window.location.pathname;
//    path = path.replace(/\/$/, "");
//    path = decodeURIComponent(path);
//
//    $(".header a").each(function () {
//        var href = $(this).attr('href');
//        if (path.substring(0, href.length) === href) {
//            $(this).closest('button').addClass('active');
//        }
//    });
//}
//
//jQuery(document).ready(function($){
//  // Get current path and find target link
//  var path = window.location.pathname.split("/").pop();
//  
//  // Account for home page with empty path
//  if ( path == '' ) {
//    path = 'index.php';
//  }
//      
//  var target = $('nav a[href="'+path+'"]');
//  // Add active class to target link
//  target.addClass('active');
//});
//
//console.log(path);