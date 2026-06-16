(function () {
    'use strict';

    function showCoursePromoModal() {
        var modal = document.getElementById('coursePromoModal');
        if (!modal) return;
        var lastShown = localStorage.getItem('coursePromoModalLastShown');
        var today = new Date().toDateString();
        if (lastShown !== today) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            localStorage.setItem('coursePromoModalLastShown', today);
        }
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
        var mobileModal = window.matchMedia('(max-width: 768px), (hover: none) and (pointer: coarse)').matches;

        if (!mobileModal) {
            setTimeout(showCoursePromoModal, 5000);
        }

        var scrollTriggered = false;
        window.addEventListener('scroll', function () {
            if (scrollTriggered) return;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;
            var scrollPercent = (window.scrollY / docHeight) * 100;
            var threshold = mobileModal ? 65 : 50;
            if (scrollPercent > threshold) {
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
