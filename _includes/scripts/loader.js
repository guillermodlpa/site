(function() {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        document.getElementsByTagName('body')[0].classList.add('ios');
    }

    var presented = false;
    var minTimeout = Number('{% if include.min_timeout %}{{ include.min_timeout }}{% endif %}') || 50;
    var maxTimeout = Number('{% if include.max_timeout %}{{ include.max_timeout }}{% endif %}') || 5000;
    var start = Date.now();

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
    }, minTimeout);

    var interval = setInterval(function() {
        var documentLoadComplete = document.readyState === 'complete';
        var maxTimeoutReached = start + maxTimeout < Date.now();

        if (presented && (documentLoadComplete || maxTimeoutReached)) {
            clearInterval(interval);
            hideLoader();
        }
    }, 10);
})();