/*======= Page Up ========*/
$(document).ready(function(){
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 590) {
            $('.page__up').addClass("actived fadeInUp animated");
        } else {
            $('.page__up').removeClass("actived fadeInUp animated");
        }
    });
    $('.page__up').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
/*======= End Page Up ========*/


/*======= Smooth scroll ========*/
$(function() {
  setTimeout(function() {
    if (location.hash) {
      window.scrollTo(0, 0);
      target = location.hash.split('#');
      smoothScrollTo($('#'+target[1]));
    }
  }, 1);
  
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      smoothScrollTo($(this.hash));
      return false;
    }
  });
  
  function smoothScrollTo(target) {
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //targetTo = target.offset().top - 131;
    if (target.length) {
      $('html,body').animate({
        scrollTop: target
      }, 1000);
    }
  }
});
/*======= End Smooth scroll ========*/

/*======= Accordion ========*/
$(function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
});

$(function() {
  $(".faq dt").click(function(){
    $(this).toggleClass('opened').next('dd').slideToggle('400');
    return false;
  });
});
/*======= End Accordion ========*/


/*======= Read More ========*/
$(function() {
  //More-Less Text
  $(".maxheight_show").append("<span class='maxheight_btn readmore'>続きを見る >></span>");
  $(".maxheight_hide").append("<span class='maxheight_btn readmore'>閉じる</span>");
  $(".maxheight_show .maxheight_btn").on('click',function(){
    $(this).parent().next(".maxheight_hide").slideDown();
    $(this).hide();
  });
  $(".maxheight_hide .maxheight_btn").on('click',function(){
    $(this).parent().slideUp(function(){
      $(this).prev(".maxheight_show").children(".maxheight_btn").show();
    });
  });
});
/*======= End Read More ========*/


