importScripts("https://cdn.brevo.com/js/sdk-loader.js");

// Configuración de Brevo con imágenes por defecto
Brevo.push([
    "init",
    {
        client_key: (location.search.match(/[?&]key=([^&]*)/) || [])[1],
        push_notification: {
            default_icon: '/img/banner-curso-agtech.png',
            default_image: '/img/banner-landing.png',
            default_badge: '/img/banner-curso-agtech.png'
        }
    },
]);
