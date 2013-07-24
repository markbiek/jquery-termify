(function($) {
    var stylesheets = $('link[rel=stylesheet]');

    $(document).ready( function() {
        $(document).data('head', $('head').html());
        $(document).data('body', $('body').html());
        $(document).data('term', false);
        $(document).data('no-term', true);

        process();
    });

    $(window).resize( function() {
        process();
    });
    var process = function(){
        var w = $(window).width();
        var h = $(window).height();

        if(w <= 664 || h <= 405) {
            if(!$(document).data('term')) {
                $(document).data('term', true);
                $(document).data('no-term', false);
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

                //Remove Google Translate
                $('#goog-gt-tt').remove();

                //Set up new styles
                $('html,body,div').css({
                    'margin': '0',
                    'padding': '0',
                    'overflow': 'hidden'
                });
                $('body').css('padding', '10px');
                $('div,p,a,li,h1,h2,h3,h4,h5').css({
                    'font-size': '14px',
                    'color': '#06ef00'
                });
                $('body,div').css({
                    'background': 'black'
                });
                $('body').css('border', '5px solid #ccc');
            }
        }else {
            //Make sure we don't restore the html for every resize, just the first one
            if($(document).data('term')) {
                if(!$(document).data('no-term')) {
                    $(document).data('no-term', true);
                    $(document).data('term', false);
                    /*$('head').empty();
                    $('body').empty();
                    $('head').html($(document).data('head'));
                    $('body').html($(document).data('body'));*/
                    console.log('no term!');
                    window.location = window.location.href;
                }
            }
        }
    };
})(jQuery);
