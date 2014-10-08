$(document).ready(function(){
    var url = location.href.split('?q=');
    if (url.length == 2) {
        $('#search-input').val(decodeURIComponent(url.pop().replace(/\+/g, ' ')));
    }
});
(function() {
    var cx = '011263749037340470454:3rodtivpxze';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();