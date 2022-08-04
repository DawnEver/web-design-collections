$(function() {
    $(window).scroll(function() {
        var img=$(".back-to-top");
        var rest=1-$(window).scrollTop()/($(document).height()-$(window).height())
            if (rest>0.75) {
                img.src='./img/scrollBattery/100.png'
            } else if(rest>0.5) {                                                
                img.src='./img/scrollBattery/75.png'
            }else if(rest>0.25){
                img.src='./img/scrollBattery/50.png'
            }else{
                img.src='./img/scrollBattery/25.png'
            }
        })
    $('.back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    })
})