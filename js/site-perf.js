(function () {
    'use strict';

    var CONSENT_KEY = 'cmsi_marketing_consent';

    var defaults = {
        googleAds: false,
        googleAdsId: 'AW-417231404',
        linkedin: false,
        linkedinId: '8119242',
        linkedinPixelOnly: true,
        facebook: false,
        facebookPixels: ['1746350276009338', '1688391071856563'],
        mailchimp: false,
        mailchimpUrl: 'https://chimpstatic.com/mcjs-connected/js/users/ecf1677014cf3d8b59783e7b7/6536563fa8592948744d549c1.js',
        brevo: false,
        brevoKey: 'kqq726uscep89abxw9oaqp0n',
        hotmart: false,
        heroVideo: true,
        heroVideoSelector: 'video.hero-background, video.hero-video-desktop, video[data-deferred-video]',
        serviceWorker: false,
        serviceWorkerKey: 'kqq726uscep89abxw9oaqp0n',
        youtubeLazy: true,
        mobileLite: true,
        requireConsent: true,
        deferMs: 2500,
        idleTimeout: 3500,
        mobileDeferMs: 6000,
        mobileIdleTimeout: 8000
    };

    var cfg = window.SitePerf || {};
    Object.keys(defaults).forEach(function (key) {
        if (cfg[key] === undefined) {
            cfg[key] = defaults[key];
        }
    });

    var marketingLoaded = false;
    var consentBannerReady = false;

    function isMobile() {
        return window.matchMedia('(max-width: 768px), (hover: none) and (pointer: coarse)').matches;
    }

    function isReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function hasMarketingConsent() {
        if (!cfg.requireConsent) {
            return true;
        }
        try {
            return localStorage.getItem(CONSENT_KEY) === 'accepted';
        } catch (err) {
            return false;
        }
    }

    function saveMarketingConsent() {
        try {
            localStorage.setItem(CONSENT_KEY, 'accepted');
        } catch (err) {}
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
    };

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.src = src;
            s.async = true;
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

    function loadLinkedInPixel() {
        if (!cfg.linkedin || window.__linkedinPixelLoaded) {
            return;
        }
        window.__linkedinPixelLoaded = true;
        var img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.alt = '';
        img.style.display = 'none';
        img.src = 'https://px.ads.linkedin.com/collect/?pid=' + cfg.linkedinId + '&fmt=gif';
        document.body.appendChild(img);
    }

    function loadLinkedIn() {
        if (!cfg.linkedin || window.__linkedinLoaded) {
            return;
        }
        if (cfg.linkedinPixelOnly) {
            loadLinkedInPixel();
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
        if (cfg.mobileLite && isMobile()) {
            return;
        }
        window.__brevoLoaded = true;
        var brevoMobile = cfg.mobileLite && isMobile();
        window.Brevo = window.Brevo || [];
        Brevo.push(['init', {
            client_key: cfg.brevoKey,
            automation: { popup: !brevoMobile },
            push_notification: {
                enabled: !brevoMobile,
                auto_subscribe: false,
                show_optin: !brevoMobile,
                show_manage_link: !brevoMobile
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

    function marketingEnabled() {
        return cfg.googleAds || cfg.linkedin || cfg.facebook || cfg.mailchimp || cfg.brevo || cfg.hotmart;
    }

    function loadMarketingScripts() {
        if (marketingLoaded || !marketingEnabled()) {
            return;
        }
        if (!hasMarketingConsent()) {
            return;
        }
        marketingLoaded = true;
        loadGoogleAds();
        if (!(cfg.mobileLite && isMobile())) {
            loadMailchimp();
        }
        loadBrevo();
        loadFacebook();
        loadLinkedIn();
        loadHotmart();
    }

    function hideConsentBanner() {
        var banner = document.getElementById('cmsi-cookie-consent');
        if (banner) {
            banner.classList.add('cmsi-cookie-consent--hidden');
            setTimeout(function () {
                banner.remove();
            }, 300);
        }
    }

    function acceptMarketingConsent() {
        saveMarketingConsent();
        hideConsentBanner();
        loadMarketingScripts();
    }

    function rejectMarketingConsent() {
        try {
            localStorage.setItem(CONSENT_KEY, 'rejected');
        } catch (err) {}
        hideConsentBanner();
    }

    function injectConsentStyles() {
        if (document.getElementById('cmsi-cookie-consent-styles')) {
            return;
        }
        var style = document.createElement('style');
        style.id = 'cmsi-cookie-consent-styles';
        style.textContent = [
            '#cmsi-cookie-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:10000;',
            'max-width:560px;margin:0 auto;padding:16px 18px;background:#1a1a1a;color:#fff;',
            'border:2px solid #fffc00;border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,.35);',
            'font:14px/1.5 Arial,sans-serif;transition:opacity .3s ease,transform .3s ease}',
            '#cmsi-cookie-consent.cmsi-cookie-consent--hidden{opacity:0;transform:translateY(12px);pointer-events:none}',
            '#cmsi-cookie-consent p{margin:0 0 12px}',
            '#cmsi-cookie-consent a{color:#fffc00}',
            '#cmsi-cookie-consent-actions{display:flex;flex-wrap:wrap;gap:8px}',
            '#cmsi-cookie-consent-actions button{border:0;border-radius:6px;padding:10px 14px;cursor:pointer;font-weight:600}',
            '#cmsi-cookie-consent-accept{background:#4e7e32;color:#fff}',
            '#cmsi-cookie-consent-reject{background:transparent;color:#fff;border:1px solid #d6ccc2!important}'
        ].join('');
        document.head.appendChild(style);
    }

    function showConsentBanner() {
        if (!cfg.requireConsent || !marketingEnabled() || hasMarketingConsent() || consentBannerReady) {
            return;
        }
        var existing = localStorage.getItem(CONSENT_KEY);
        if (existing === 'rejected') {
            return;
        }
        consentBannerReady = true;
        injectConsentStyles();

        var banner = document.createElement('div');
        banner.id = 'cmsi-cookie-consent';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Consentimiento de cookies');
        banner.innerHTML = [
            '<p>Usamos cookies de terceros (Google, Meta, LinkedIn) para medición y publicidad. ',
            'Puedes aceptar o rechazar. Más información en nuestra ',
            '<a href="politica-privacidad.html">Política de Privacidad</a>.</p>',
            '<div id="cmsi-cookie-consent-actions">',
            '<button type="button" id="cmsi-cookie-consent-accept">Aceptar</button>',
            '<button type="button" id="cmsi-cookie-consent-reject">Rechazar</button>',
            '</div>'
        ].join('');

        document.body.appendChild(banner);
        document.getElementById('cmsi-cookie-consent-accept').addEventListener('click', acceptMarketingConsent);
        document.getElementById('cmsi-cookie-consent-reject').addEventListener('click', rejectMarketingConsent);
    }

    function scheduleHeroVideo() {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadHeroVideo, { timeout: 1200 });
        } else {
            setTimeout(loadHeroVideo, 800);
        }
    }

    function scheduleIdle(fn) {
        var timeout = (cfg.mobileLite && isMobile()) ? cfg.mobileIdleTimeout : cfg.idleTimeout;
        var fallback = (cfg.mobileLite && isMobile()) ? cfg.mobileDeferMs : cfg.deferMs;
        if ('requestIdleCallback' in window) {
            requestIdleCallback(fn, { timeout: timeout });
        } else {
            setTimeout(fn, fallback);
        }
    }

    function loadHeroVideo() {
        if (!cfg.heroVideo || isReducedMotion() || isMobile()) {
            return;
        }
        document.querySelectorAll(cfg.heroVideoSelector).forEach(function (video) {
            if (video.dataset.loaded) {
                return;
            }
            var hero = video.closest('.hero, .course-hero, section');
            var markActive = function () {
                if (hero) {
                    hero.classList.add('hero--video-active');
                }
            };
            video.addEventListener('playing', markActive, { once: true });
            video.addEventListener('loadeddata', markActive, { once: true });

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
            }, { rootMargin: isMobile() ? '120px 0px' : '300px 0px' });

            observer.observe(iframe);
        });
    }

    function initDeferredIframes() {
        document.querySelectorAll('iframe[data-src]').forEach(function (iframe) {
            if (iframe.dataset.deferredReady) {
                return;
            }
            iframe.dataset.deferredReady = '1';
            if (!iframe.hasAttribute('loading')) {
                iframe.setAttribute('loading', 'lazy');
            }

            var observer = new IntersectionObserver(function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        iframe.src = iframe.getAttribute('data-src');
                        obs.unobserve(iframe);
                    }
                });
            }, { rootMargin: isMobile() ? '80px 0px' : '200px 0px' });

            observer.observe(iframe);
        });

        document.querySelectorAll('iframe:not([data-src]):not([src*="youtube"])').forEach(function (iframe) {
            if (iframe.getAttribute('src') && !iframe.hasAttribute('loading')) {
                iframe.setAttribute('loading', 'lazy');
            }
        });
    }

    function registerServiceWorker() {
        if (!cfg.serviceWorker || !('serviceWorker' in navigator)) {
            return;
        }
        if (cfg.mobileLite && isMobile()) {
            return;
        }
        navigator.serviceWorker.register('/sw.js?key=' + cfg.serviceWorkerKey).catch(function () {});
    }

    function onReady() {
        initYoutubeLazy();
        initDeferredIframes();
        showConsentBanner();
        if (hasMarketingConsent()) {
            scheduleIdle(loadMarketingScripts);
        }
        scheduleHeroVideo();
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
        if (hasMarketingConsent()) {
            scheduleIdle(loadMarketingScripts);
        }
        scheduleHeroVideo();
    });

    if (hasMarketingConsent()) {
        if (cfg.mobileLite && isMobile()) {
            ['scroll', 'touchstart'].forEach(function (evt) {
                window.addEventListener(evt, loadMarketingScripts, { once: true, passive: true });
            });
        } else {
            ['scroll', 'click', 'touchstart', 'keydown'].forEach(function (evt) {
                window.addEventListener(evt, loadMarketingScripts, { once: true, passive: true });
            });
        }
    }
})();
