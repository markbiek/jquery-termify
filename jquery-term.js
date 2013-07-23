(function($) {
    var stylesheets = $('link[rel=stylesheet]');

    $(document).ready( function() {
        $(document).data('head', $('head').html());
        $(document).data('body', $('body').html());
    });

    $(window).resize( function() {
        var w = $(window).width();
        var h = $(window).height();

        if(w <= 664 && h <= 405) {
            if(!$(document).data('term')) {
                $(document).data('term', true);
                console.log('term!'); 

                //Remove inline styles
                $('*[style]').attr('style', '');

                //Remove class attributes
                $('*[class]').attr('class', '');

                //Remove id attributes
                $('*[id]').attr('id', '');

                //Remove image tags
                $('img').remove();

                //Remove stylesheets
                $('link[rel=stylesheet]').remove();

                //Remove inputs
                $('input').remove();
            }
        }else {
            console.log('no term!');
            if($(document).data('term')) {
                $(document).data('term', false);
                $('head').html($(document).data('head'));
                $('body').html($(document).data('body'));
            }
        }
    });
})(jQuery);
