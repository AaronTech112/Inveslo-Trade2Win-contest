$(document).ready(function() {
    $('.preloader').hide();
    var url_1 = $('#url_1').val();
    var url_2 = $('#url_2').val();

    $(".lange_chnage").click(function(e) {
        var val = $(this).data("val");
        let c = [];
        var val = $(this).data("val");

        const lastUrlSegment = location.pathname.split('/').filter(function (segment) {
            return segment !== '';
        }).pop();

        if (val == "en")
            window.location.href = url_1 + lastUrlSegment;
        else if (val == lastUrlSegment || lastUrlSegment == "en")
            window.location.href = url_1 + val + "/";
        else
            window.location.href = url_2 + val + '/' + lastUrlSegment;
    });
    var nw_lcl = $('#nw_lcl').val();
    var defaultlng = nw_lcl;
    var inlanguage = ["en", "es", "vi", "pt", "fa", "tr"];
    if (inlanguage.includes(defaultlng)) {
        $(".lang" + defaultlng).removeClass("d-none");
        $(".lang" + defaultlng).show()
    } else {
        $(".langen").removeClass("d-none");
        $(".langen").show();
    }
});


$('.scroll_down').click(function() {
    var keyword = $(this).attr('ss');
    var scrollTo = $('#' + keyword);
    $('html, body').animate({
        scrollTop: scrollTo.offset().top
    }, 500);
});
