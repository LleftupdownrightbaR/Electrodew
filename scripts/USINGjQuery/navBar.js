$(window).scroll(function(){
  var before = $(window).scrollTop();
  $(window).scroll(function() {
    var after = $(window).scrollTop();
    if (before<after) {
      $("#naviBar").animate({
        margin-top:'-2.2rem',
        box-shadow:'8px 8px 50px rgba(0, 0, 0, 0.6)'
      });
      before = after;
    };
    if (before>after) {
      $("#naviBar").animate({
        margin-top:'0rem'
      });
      before = after;
    };
  });
});
