$('.navbar-toggle').click(function(){
   $(this).toggleClass('open');
})

$(window).scroll(function(){
 navbarhide();
 parallax();
})







function parallax(){
    var wScroll = $(window).scrollTop();

    $('.parallax-bg').css('background-position','center '+(wScroll*0.75)+'px');


}


function navbarhide(){

    var wScroll = $(window).scrollTop();
    if(wScroll <= 250 ){
        $('.navbar').css('background','transparent');
        $('.navbar-nav li a').css('color','#fff');

    }else{
        $('.navbar').css('background','#f1b980');
        $('.navbar-nav li a').css('color','#111');
    } 
}