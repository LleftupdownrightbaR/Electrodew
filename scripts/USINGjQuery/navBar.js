$(window).scroll(function(){
  var scrollVal = $(this).scrollTop();
  var before = $(window).scrollTop();
  $(window).scroll(function() {
    var after = $(window).scrollTop();
    if (before < after) {
      $("#naviBar").animate({
        marginTop:'-3rem',
      });
      before = after;
    };
    if (before > after) {
      $("#naviBar").animate({
        marginTop:'0rem'
        boxShadow:'8px 8px 50px rgba(0, 0, 0, 0.6)'
      });
      before = after;
    };
  });
});
$(window).load(function(){
  if (scrollVal < 20) {
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