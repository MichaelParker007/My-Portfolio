$(function(){
    $('.btn').click(function(){
        $('#exampleModal').arcticmodal();
    });
    $(".info").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

});