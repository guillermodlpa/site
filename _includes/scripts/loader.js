(function() {
    var presented = false;
    var MIN_TIMEOUT = Number('{% if include.min_timeout %}{{ include.min_timeout }}{% endif %}') || 50;

    function hideLoader() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('is-loading');

        setTimeout(function() {
            var loaderOverlay = document.getElementById('loader-overlay');
            loaderOverlay.remove();
        }, 550);
    }

    setTimeout(function() {
        presented = true;
    }, MIN_TIMEOUT);

    var interval = setInterval(function() {
        if (presented && document.readyState === 'complete') {
            clearInterval(interval);
            hideLoader();
        }
    }, 10);
})();