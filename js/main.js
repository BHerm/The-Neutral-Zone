
$(function(){
  $("#open-button").hide().fadeIn(1000);
  $("#home-button").hide().fadeIn(1000);
  $("#about-button").hide().fadeIn(1000);
  $("#logo").hide().fadeIn(1000);

  // open the login screen on login click
  $("#open-button").on('click', function(){
    $("#loginmodal").css({display: 'block'});
  });

  //close when click the x
  $("#closelogin").on('click', function(){
    $("#loginmodal").css({display: 'none'});
  });

  $("#register-button").on('click', function(){
    $("#register-modal").css({display: 'block'});
    $("#loginmodal").css({display: 'none'});
  });

  $("#closeregister").on('click', function(){
    $("#register-modal").css({display: 'none'});
    $("#loginmodal").css({display: 'block'});
  });

});
