$(function(){
  var header=$("#header"),
  introH=$("#page").innerHeight(),
  scrollOffset=$(window).scrollTop();
  
  /* Fixed Header */
  checkScroll(scrollOffset);
$(window).on("scroll",function(){
  scrollOffset=$(this).scrollTop();
  checkScroll(scrollOffset);
});
  
  function checkScroll(scrollOffset){
  if(scrollOffset>=introH){
    header.addClass("fixed");
  }else{
    header.removeClass("fixed");
  }
  }
  
  /* Smooth scroll */
  
  $("[data-scroll]").on("click",function(event)
  {
      event.preventDefault();
      var $this=$(this),
       blockId=$(this).data('scroll'),
          blockOffset=$(blockId).offset().top;
    $("#nav__toggle").removeClass("active"); 
    $("#nav").removeClass("active"); 
    $("#nav a").removeClass("active"); 
    $this.addClass("active");
      $("html,body").animate({
        scrollTop:  blockOffset
      },500);
});
  
  
/* Menu nav toggle  */
  
  $("#nav__toggle").on("click",function(event){
    event.preventDefault();
    
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    
  })
  
  window.addEventListener("scroll",function(){
    console.log("scrolled");
//    header.classList.add(introH);
  });
  
});