$(document).ready(function(){

$('.burger').click(function(){
    event.preventDefault();
    $('.js-nav-active ').removeClass('transform');
})
$('.nav-close').click(function(){
    event.preventDefault();
    $('.js-nav-active ').addClass('transform');
})

})
