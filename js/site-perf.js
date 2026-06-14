(function () {
    'use strict';

    var defaults = {
        googleAds: false,
        googleAdsId: 'AW-417231404',
        linkedin: false,
        linkedinId: '8119242',
        facebook: false,
        facebookPixels: ['1746350276009338', '1688391071856563'],
        mailchimp: false,
        mailchimpUrl: 'https://chimpstatic.com/mcjs-connected/js/users/ecf1677014cf3d8b59783e7b7/6536563fa8592948744d549c1.js',
        brevo: false,
        brevoKey: 'kqq726uscep89abxw9oaqp0n',
        hotmart: false,
        heroVideo: false,
        heroVideoSelector: 'video.hero-background, video[data-deferred-video]',
        serviceWorker: false,
        serviceWorkerKey: 'kqq726uscep89abxw9oaqp0n',
        youtubeLazy: true,
        deferMs: 2500,
        idleTimeout: 3500
    };

    var cfg = window.SitePerf || {};
    Object.keys(defaults).forEach(function (key) {
        if (cfg[key] === undefined) {
            cfg[key] = defaults[key];
        }
    });

    var marketingLoaded = false;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
    };

    function loadScript(src, async) {
        return new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.src = src;
            s.async = async !== false;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    function loadStylesheet(href) {
        if (document.querySelector('link[href="' + href + '"]')) {
            return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    function loadGoogleAds() {
        if (!cfg.googleAds || window.__googleAdsLoaded) {
            return;
        }
        window.__googleAdsLoaded = true;
        loadScript('https://www.googletagmanager.com/gtag/js?id=' + cfg.googleAdsId).then(function () {
            gtag('js', new Date());
            gtag('config', cfg.googleAdsId);
        }).catch(function () {});
    }

    function loadFacebook() {
        if (!cfg.facebook || window.fbq) {
            return;
        }
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        cfg.facebookPixels.forEach(function (id) {
            fbq('init', id);
        });
        fbq('track', 'PageView');
    }

    function loadLinkedIn() {
        if (!cfg.linkedin || window.__linkedinLoaded) {
            return;
        }
        window.__linkedinLoaded = true;
        window._linkedin_partner_id = cfg.linkedinId;
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(cfg.linkedinId);
        loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js').catch(function () {});
    }

    function loadMailchimp() {
        if (!cfg.mailchimp || window.__mailchimpLoaded) {
            return;
        }
        window.__mailchimpLoaded = true;
        loadScript(cfg.mailchimpUrl).catch(function () {});
    }

    function loadBrevo() {
        if (!cfg.brevo || window.__brevoLoaded) {
            return;
        }
        window.__brevoLoaded = true;
        window.Brevo = window.Brevo || [];
        Brevo.push(['init', {
            client_key: cfg.brevoKey,
            automation: { popup: true },
            push_notification: {
                enabled: true,
                auto_subscribe: false,
                show_optin: true,
                show_manage_link: true
            }
        }]);
        loadScript('https://cdn.brevo.com/js/sdk-loader.js').catch(function () {});
    }

    function loadHotmart() {
        if (!cfg.hotmart || window.__hotmartLoaded) {
            return;
        }
        window.__hotmartLoaded = true;
        loadScript('https://static.hotmart.com/checkout/widget.min.js').catch(function () {});
        loadStylesheet('https://static.hotmart.com/css/hotmart-fb.min.css');
    }

    function loadMarketingScripts() {
        if (marketingLoaded) {
            return;
        }
        marketingLoaded = true;
        loadGoogleAds();
        loadMailchimp();
        loadBrevo();
        loadFacebook();
        loadLinkedIn();
        loadHotmart();
    }

    function scheduleIdle(fn) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(fn, { timeout: cfg.idleTimeout });
        } else {
            setTimeout(fn, cfg.deferMs);
        }
    }

    function loadHeroVideo() {
        if (!cfg.heroVideo || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        document.querySelectorAll(cfg.heroVideoSelector).forEach(function (video) {
            if (video.dataset.loaded) {
                return;
            }
            var source = video.querySelector('source[data-src]');
            if (source) {
                video.dataset.loaded = '1';
                source.src = source.getAttribute('data-src');
                video.load();
            } else if (video.querySelector('source[src]')) {
                video.dataset.loaded = '1';
            } else {
                return;
            }
            video.play().catch(function () {});
        });
    }

    function initYoutubeLazy() {
        if (!cfg.youtubeLazy) {
            return;
        }
        document.querySelectorAll('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]').forEach(function (iframe) {
            var src = iframe.getAttribute('src');
            if (!src || iframe.dataset.lazyReady) {
                return;
            }
            iframe.dataset.lazyReady = '1';
            iframe.dataset.src = src;
            iframe.removeAttribute('src');
            iframe.setAttribute('loading', 'lazy');
            iframe.classList.add('youtube-lazy-placeholder');

            var observer = new IntersectionObserver(function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        iframe.src = iframe.dataset.src;
                        iframe.classList.remove('youtube-lazy-placeholder');
                        obs.unobserve(iframe);
                    }
                });
            }, { rootMargin: '300px 0px' });

            observer.observe(iframe);
        });
    }

    function initLazyIframes() {
        document.querySelectorAll('iframe:not([src*="youtube"])').forEach(function (iframe) {
            if (!iframe.hasAttribute('loading')) {
                iframe.setAttribute('loading', 'lazy');
            }
        });
    }

    function registerServiceWorker() {
        if (!cfg.serviceWorker || !('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.register('/sw.js?key=' + cfg.serviceWorkerKey).catch(function () {});
    }

    function onReady() {
        initYoutubeLazy();
        initLazyIframes();
        scheduleIdle(loadMarketingScripts);
        scheduleIdle(loadHeroVideo);
        if (cfg.serviceWorker) {
            registerServiceWorker();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }

    window.addEventListener('load', function () {
        scheduleIdle(loadMarketingScripts);
        scheduleIdle(loadHeroVideo);
    });

    ['scroll', 'click', 'touchstart', 'keydown'].forEach(function (evt) {
        window.addEventListener(evt, loadMarketingScripts, { once: true, passive: true });
    });
})();
