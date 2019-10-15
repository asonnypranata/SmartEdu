var $signUp = $('.signUp');
var $signIn = $('.signIn');
    $(".btn-member").click(function() {
      $signUp.fadeOut('slow');
      $signIn.fadeIn('slow');
    });
   $(".btn-back").click(function() {
      $signIn.fadeOut('slow');
      $signUp.fadeIn('slow');
    });