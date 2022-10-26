
$().click(function(e){
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $( $(this).attr() ).offset().top - 120
    }, 1000);
});
