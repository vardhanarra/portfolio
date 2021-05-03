document.documentElement.style.setProperty('--vh', '${window.innerHeight/100}px');

$(".read-more-btn").on('click', function() {
    $(this).parent().parent().toggleClass('showContent');

    var isExpanded = $(this).parent().parent().hasClass('showContent');
    var text;
    if (isExpanded) {
        text = "Read Less";
        $(this).removeClass('btn-primary');
        $(this).addClass('btn-warning');
    } else {
        text = "Read More";
        $(this).addClass('btn-primary');
        $(this).removeClass('btn-warning');
    }

    $(this).text(text);
});