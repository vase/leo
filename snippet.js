(function (window, document, cb) {
        var Leo = window.Leo || {};
        var as = document.createElement('script');
        as.type = 'text/javascript';
        as.async = true;
        as.src = 'leo.js';
        as.onload = function() {window.Leo.init(); cb();};
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(as, s);
      })(window, document, function LeoEvent () {
        Leo.logEvent('visit')
      });