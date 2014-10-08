$(document).ready(function() {
    // Zero Clipboard
    var client = new ZeroClipboard($(".zeroclipboard"));
    client.on( "ready", function(readyEvent) {
        // alert( "ZeroClipboard SWF is ready!" );
        client.on( "aftercopy", function(event) {
            // `this` === `client`
            // `event.target` === the element that was clicked
            alert("Contenido copiado al portapapeles: " + event.data["text/plain"] );
        } );
    });
    // Disqus
    if (allowCookies() == 'ok') {
        var disqus_shortname = 'mimopo';
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    }
});