(function () {
    'use strict';

    var STORAGE_KEY = 'coursePromoModalShownJul2026';

    function showCoursePromoModal() {
        var modal = document.getElementById('coursePromoModal');
        if (!modal || modal.dataset.visible === '1') return;
        if (sessionStorage.getItem(STORAGE_KEY) === '1') return;

        modal.dataset.visible = '1';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        sessionStorage.setItem(STORAGE_KEY, '1');
    }

    function closeCoursePromoModal() {
        var modal = document.getElementById('coursePromoModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    window.closeCoursePromoModal = closeCoursePromoModal;

    document.addEventListener('DOMContentLoaded', function () {
        /* Al entrar: popup tras breve pausa (consentimiento / LCP) */
        setTimeout(showCoursePromoModal, 1800);

        /* Respaldo si el usuario cierra rápido el banner de cookies */
        setTimeout(showCoursePromoModal, 4500);

        var scrollTriggered = false;
        window.addEventListener('scroll', function () {
            if (scrollTriggered || sessionStorage.getItem(STORAGE_KEY) === '1') return;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;
            if ((window.scrollY / docHeight) * 100 > 25) {
                scrollTriggered = true;
                showCoursePromoModal();
            }
        }, { passive: true });

        var overlay = document.querySelector('.course-promo-overlay');
        if (overlay) {
            overlay.addEventListener('click', closeCoursePromoModal);
        }

        var closeBtn = document.querySelector('.course-promo-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeCoursePromoModal);
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeCoursePromoModal();
            }
        });
    });
})();
