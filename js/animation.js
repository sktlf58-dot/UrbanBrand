$(document).ready(function() {

    var slide = $(".typo_box");

    slide.click(function() {
        slide.not($(this)).stop().animate({"width":"9%", "backgroundColor":"#24252B",}, 700);
        slide.not($(this)).find(".typo_box_title_wrap").stop().fadeOut(1);
        slide.not($(this)).find(".contents_article_large").stop().fadeIn();
        slide.not($(this)).find("span").stop().fadeOut();

        
        $(this).stop().find(".contents_article_large").fadeOut(1);
        $(this).stop().find(".typo_box_title_wrap").fadeIn();
        $(this).stop().animate({"width":"30%", "backgroundColor":"#E05A2D"}, 700, function() {
            $(this).stop().find("span").fadeIn(100);
        });
    })


    

});