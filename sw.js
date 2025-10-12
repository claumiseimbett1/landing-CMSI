importScripts("https://cdn.brevo.com/js/sdk-loader.js");
Brevo.push([
    "init",
    {
        client_key: (location.search.match(/[?&]key=([^&]*)/) || [])[1],
    },
]);

// Manejador de eventos para notificaciones push con imagen
self.addEventListener('push', function(event) {
    if (event.data) {
        try {
            const data = event.data.json();
            const options = {
                body: data.body || data.message || 'Nueva notificación',
                icon: data.icon || '/img/banner-curso-agtech.png',
                image: data.image || '/img/banner-landing.png',
                badge: data.badge || '/img/banner-curso-agtech.png',
                vibrate: [200, 100, 200],
                tag: data.tag || 'brevo-notification',
                requireInteraction: false,
                actions: data.actions || []
            };

            event.waitUntil(
                self.registration.showNotification(data.title || 'Claudia Milena Serpa Imbett', options)
            );
        } catch (e) {
            console.error('Error al procesar la notificación:', e);
        }
    }
});

// Manejador de clics en notificaciones
self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    event.waitUntil(
        clients.openWindow(event.notification.data?.url || '/')
    );
});
