$(document).ready(function(){

    $("#introText").delay(80).animate({"margin-bottom":"0", "opacity":"100%"}, 2000, "easeInOutExpo");
    $("#introSlide").animate({"margin-bottom":"0", "opacity":"100%"}, 2000, "easeInOutExpo");

    //SCROLL DOWN ON CLICK
    $(".clickArrow").click(function(){
        height = $(window).height();
        scrollTo(0, height);
    });

    //SCROLL UP ON CLICK
    $(".scrollUp").click(function(){
        scrollTo(0, 0);
    });

     // WORK JSON
     $.getJSON("work.json", function(work) {
        let html = '';
        $.each(work, function(i, piece) {
            html += 
                `<div class="grid-items">
                    <a href= ${piece.item} class="info-container">
                        <h5>${piece.name}</h5>
                        <p>${piece.caption}</p>
                    </a>
                    <div class="image-container">
                        <img src= ${piece.image}>
                    </div>
                </div>`
        });
        $(".work-grid").append(html);
    });

    setInterval(function(){
        var imgHeight = (($(".tiltContainer").height())+($(window).height()*0.105))*2;
        $(".slideContainer").animate({"margin-top":-imgHeight}, 2500, "easeInOutExpo", function(){
            $(".slideContainer").find("li:first-child").insertAfter($(".slideContainer").find("li:last-child"));
            $(".slideContainer").css({"margin":"0px"});
        });
    }, 4000);

});