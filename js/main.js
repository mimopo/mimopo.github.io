$(document).ready(function() {
    // Bootsrap tooltips
    $('.navbar .tooltip-toggle').data('container', 'body');
    $('.tooltip-toggle').tooltip({
        placement: 'auto top'
    });
    // Scroll events
    $(window).bind('scroll resize', scrolling);
    scrolling();
    // RSS Subscribe button
    $('.social-subscribe a').click(function(event) {
        event.preventDefault();
        alert('Copia esta URL: ' + $(this).attr('href'));
    });
    // Old Browser Warning
    detectOldBrowser();
    // EU Cookies Law
    if (site.analytics_id) {
        cookiesLaw();
    }
    // Logo animation
    $('.navbar-brand').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $(this).find('.logo').animate(
            {
                width: $(this).height()
            },
            {
                duration: 200,
                complete: function() {
                    location.href = url;
                }
            }
        );
    });
});


function scrolling()
{
    // Main block shadow
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
        $('.main').removeClass('shadow');
    } else {
        $('.main').addClass('shadow');
    }
    // Go to navbar link
    $('.goto-navbar')
        .css('opacity', ($(window).scrollTop() <= 40) ? $(window).scrollTop() * 0.0125 : 0.5)
        .css('display', ($(window).scrollTop() < 1) ? 'none' : 'block')
    ;
}


// OLD BROWSER WARNING

function detectOldBrowser()
{
    if (!Modernizr.mq('only all')) {
        showOldbrowserWarning();
        return false;
    }
    var properties = [
        'borderRadius',
        'boxShadow',
        'boxSizing',
        'transition',
        'opacity',
        'textShadow'
    ];
    $.each(properties, function(i,v) {
        if (!Modernizr.testAllProps(v)) {
            showOldbrowserWarning();
            return false;
        }
    });
    var features = [
        'cssgradients',
        'fontface',
        'multiplebgs',
        'rgba'
    ];
    $.each(features, function(i,v) {
        if (!Modernizr[v]) {
            showOldbrowserWarning();
            return false;
        }
    });
}

function showOldbrowserWarning()
{
    var container = $('.oldbrowser-container');
    var html = container.html().replace('<!--[if lt IE 8]>', '').replace('<![endif]-->', '');
    container.html(html);
}


// EU COOKIES LAW

function cookiesLaw()
{
    switch (allowCookies()) {
        case 'ask':
            allowCookies('ok');
            // no break;
        case 'ok':
            $('.hidden-cookies').remove();
            break;
        case 'ko':
            break;
        default:
            allowCookies('ask');
            break;
    }
    $('.cookies-ok, .cookies-ko').click(function() {
        $('.hidden-cookies').remove();
    });
    $('.cookies-ok').click(function(){
        allowCookies('ok');
    });
    $('.cookies-ko').click(function(){
        allowCookies('ko');
    });
    tracking();
}

function allowCookies(v)
{
    if (typeof v == 'undefined') {
        return $.cookie('allow_cookies');
    } else {
        return $.cookie('allow_cookies', v, { expires: 730 });
    }
}

function tracking()
{
    var tracking_params = {
        'cookieDomain': site.domain
    };
    if (allowCookies() != 'ok'){
        tracking_params.storage = 'none';
        tracking_params.clientId = 'nocookie.' + new Date().getTime();
    }
    // GOOGLE ANALYTICS
    ga('create', site.analytics_id);
    ga('send', 'pageview');
}