$(window).scroll(function(){
  var scrollVal = $(this).scrollTop();
  var before = $(window).scrollTop();
  $(window).scroll(function() {
    var after = $(window).scrollTop();
    if (before < after) {
      $("#naviBar").slideDown(normal);
      before = after;
    };
    if (before > after) {
      $("#naviBar").slideUp(normal);
      before = after;
    };
  });
});
$(window).ready(function(){
  if (scrollVal < 85) {
    $("#Electrodew").animate({
      backgroundSize:'2.73rem',
      fontSize:'2.27rem',
      lineHeight:'2.73rem'
      width:'2.73rem',  height:'2.73rem'
    });
    $("#searchBox").animate({
      fontSize:'2.27rem',
      lineHeight:'2.73rem'
    });
    $("#naviBarIn").animate({
      gridTemplateRows:'5rem'
    });
  };
});