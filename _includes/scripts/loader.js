(function() {
    var loaded = false;
    var presented = false;
    var MIN_TIMEOUT = 250;

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
    window.onload = function() {
        loaded = true;
    };

    var interval = setInterval(function() {
        if (presented && loaded) {
            clearInterval(interval);
            hideLoader();
        }
    }, 10);
})();