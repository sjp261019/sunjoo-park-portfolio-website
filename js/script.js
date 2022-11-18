$(document).ready(function(){

    $("#introText").animate({"margin-bottom":"0", "opacity":"100%"}, 2000, "easeInOutExpo");
    $("#introText > h2").animate({"margin-bottom":"0", "opacity":"100%"}, 2000, "easeInOutExpo").delay(1000);

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

});