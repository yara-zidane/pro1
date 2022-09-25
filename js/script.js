$(window).on("load",function(){
    $(".lds-hourglass").fadeOut(1000,function(){
        $(this).parent().fadeOut(1000,function(){
            $(this).remove();
        });
    });

});


$(document).ready(function(){

    $(window).on("scroll",function(){
        if ($(window).scrollTop() >= 800){
            $(".scroll-tp").css("opacity","1");
        }
        else{
            $(".scroll-tp").css("opacity","0");
        }
    });
    
    $(".scroll-tp").on("click",function(){
        $("html,body").animate(
           {scrollTop:0},250
        );
    });
});
