// --- CONSOLIDATED JAVASCRIPT ---
// Encoding: UTF-8 with BOM
document.addEventListener('DOMContentLoaded', function () {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const spans = mobileBtn.querySelectorAll('span');
            if (spans.length >= 3) {
                if (!mobileMenu.classList.contains('hidden')) {
                    if (spans[0].classList.contains('transition-all')) {
                        spans[0].style.transform = 'rotate(45deg) translateY(6px)';
                        spans[1].style.opacity = '0';
                        spans[2].style.transform = 'rotate(-45deg) translateY(-6px)';
                    } else {
                        spans[0].classList.add('rotate-45', 'translate-y-2');
                        spans[1].classList.add('opacity-0');
                        spans[2].classList.add('-rotate-45', '-translate-y-2');
                    }
                } else {
                    if (spans[0].classList.contains('transition-all')) {
                        spans[0].style.transform = '';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = '';
                    } else {
                        spans[0].classList.remove('rotate-45', 'translate-y-2');
                        spans[1].classList.remove('opacity-0');
                        spans[2].classList.remove('-rotate-45', '-translate-y-2');
                    }
                }
            }
        });
    }

    const header = document.getElementById('main-header');
    const HEADER_GRADIENT = 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)';
    var _cp = window.location.pathname.split('/').pop() || 'index.html';
    if (_cp === 'career-details.html') _cp = 'careers.html';
    if (_cp === 'news-detail.html' || _cp === 'emagazine.html') _cp = 'news.html';
    if (header) {
        header.querySelectorAll('nav a').forEach(a => {
            var hp = (a.getAttribute('href') || '').split('/').pop();
            if (hp === _cp) {
                a.classList.remove('font-normal', 'text-white', 'text-darkText', 'text-[#FEDA00]');
                a.classList.add('text-[#FFB800]', 'font-semibold');
                a.dataset.active = 'true';
            }
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.style.background = 'rgba(255,255,255,0.97)';
                header.style.backdropFilter = 'blur(12px)';
                header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
                header.classList.add('scrolled');
                header.querySelectorAll('nav a').forEach(a => {
                    var hp = (a.getAttribute('href') || '').split('/').pop();
                    if (hp === _cp) {
                        a.classList.remove('text-[#FFB800]', 'text-[#FEDA00]', 'text-white');
                        a.classList.add('text-primary');
                    } else {
                        a.classList.remove('text-white');
                        a.classList.add('text-darkText');
                    }
                });
                header.querySelectorAll('nav span').forEach(s => {
                    s.classList.remove('text-white/40');
                    s.classList.add('text-gray-300');
                });
                const logo = header.querySelector('img');
                if (logo) logo.style.filter = '';
                header.querySelectorAll('#mobile-menu-btn span').forEach(s => {
                    s.classList.remove('bg-white');
                    s.classList.add('bg-darkText');
                });
            } else {
                header.style.background = HEADER_GRADIENT;
                header.style.backdropFilter = '';
                header.style.boxShadow = 'none';
                header.classList.remove('scrolled');
                header.querySelectorAll('nav a').forEach(a => {
                    var hp = (a.getAttribute('href') || '').split('/').pop();
                    if (hp === _cp) {
                        a.classList.remove('text-primary', 'text-darkText');
                        a.classList.add('text-[#FFB800]');
                    } else {
                        a.classList.add('text-white');
                        a.classList.remove('text-darkText');
                    }
                });
                header.querySelectorAll('nav span').forEach(s => {
                    s.classList.remove('text-gray-300');
                    s.classList.add('text-white/40');
                });
                header.querySelectorAll('#mobile-menu-btn span').forEach(s => {
                    s.classList.remove('bg-darkText');
                    s.classList.add('bg-white');
                });
            }
        });
    }

    if (typeof jQuery !== 'undefined' && typeof $ !== 'undefined' && $.fn.select2) {
        function formatLang(lang) {
            if (!lang.id) return lang.text;
            var flag = $(lang.element).data('flag');
            return $(`<span><img class="lang-flag inline-block w-5 h-3.5 object-cover mr-1.5" src="${flag}" alt=""><span>${lang.text}</span></span>`);
        }
        $(function () {
            $('#lang-switcher').select2({
                minimumResultsForSearch: Infinity,
                dropdownAutoWidth: true,
                width: 'auto',
                templateResult: formatLang,
                templateSelection: formatLang
            });
            var $s2 = $('#lang-switcher').next('.select2-container');
            if ($s2.length) {
                var lockedW = $s2.outerWidth();
                if (lockedW > 0) $s2.css('min-width', lockedW + 'px');
            }
        });
    }

    var indicator = document.getElementById('scrollTopIndicator');
    var circle = document.getElementById('scrollTopCircle');
    var threshold = 300;
    function onScroll() {
        var show = window.pageYOffset > threshold;
        if (indicator) indicator.classList.toggle('visible', show);
        if (circle) circle.classList.toggle('visible', show);
    }
    function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    window.addEventListener('scroll', onScroll, { passive: true });
    if (indicator) indicator.addEventListener('click', scrollTop);
    if (circle) circle.addEventListener('click', scrollTop);
    onScroll();

    if (document.querySelector('.hero-swiper') && typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: { delay: 6000, disableOnInteraction: false },
            speed: 1000,
            allowTouchMove: false,
            on: {
                slideChange: function () {
                    const currentIdx = this.realIndex;
                    document.querySelectorAll('.hero-tab').forEach((tab, index) => {
                        if (index === currentIdx) {
                            tab.classList.add('active', 'border-primary');
                            tab.classList.remove('border-white/20');
                        } else {
                            tab.classList.remove('active', 'border-primary');
                            tab.classList.add('border-white/20');
                        }
                    });
                }
            }
        });
        document.querySelectorAll('.hero-tab').forEach((tab, index) => {
            tab.addEventListener('click', () => { heroSwiper.slideToLoop(index); });
        });
    }

    const swiperWrapper = document.querySelector('.project-swiper .swiper-wrapper');
    if (swiperWrapper) {
        const originalSlides = Array.from(swiperWrapper.children);
        if (originalSlides.length > 0 && originalSlides.length <= 4) {
            originalSlides.forEach(slide => { swiperWrapper.appendChild(slide.cloneNode(true)); });
        }
    }

    if (document.querySelector('.project-swiper') && typeof Swiper !== 'undefined') {
        const projectSwiper = new Swiper('.project-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: '.project-pagination', clickable: true },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
            },
            on: {
                init: function () { updateCustomPagination(this); },
                slideChange: function () { updateCustomPagination(this); }
            }
        });
        function updateCustomPagination(swiper) {
            setTimeout(() => {
                const bullets = document.querySelectorAll('.project-pagination .swiper-pagination-bullet');
                if (bullets.length === 0) return;
                bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));
                const realIndex = swiper.realIndex % 4;
                if (bullets[realIndex]) bullets[realIndex].classList.add('swiper-pagination-bullet-active');
            }, 10);
        }
    }

    const partnerWrapper = document.querySelector('.partner-swiper .swiper-wrapper');
    if (partnerWrapper) {
        const partnerSlides = Array.from(partnerWrapper.children);
        if (partnerSlides.length > 0 && partnerSlides.length <= 5) {
            partnerSlides.forEach(slide => { partnerWrapper.appendChild(slide.cloneNode(true)); });
        }
    }

    if (document.querySelector('.partner-swiper') && typeof Swiper !== 'undefined') {
        const partnerSwiper = new Swiper('.partner-swiper', {
            slidesPerView: 2, spaceBetween: 16, loop: true,
            autoplay: { delay: 2500, disableOnInteraction: false },
            navigation: { nextEl: '.partner-button-next', prevEl: '.partner-button-prev' },
            breakpoints: {
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 24 },
            }
        });
    }

    var groups = document.querySelectorAll('.odometer-group');
    if (groups.length) {
        groups.forEach(function (group) {
            var value = group.getAttribute('data-value');
            var digits = value.split('');
            digits.forEach(function (digit, index) {
                var digitEl = document.createElement('div');
                digitEl.className = 'odometer-digit';
                var inner = document.createElement('div');
                inner.className = 'odometer-digit-inner';
                for (var i = 0; i <= 9; i++) {
                    var span = document.createElement('span');
                    span.textContent = i;
                    inner.appendChild(span);
                }
                digitEl.appendChild(inner);
                group.appendChild(digitEl);
                digitEl.setAttribute('data-target', digit);
                digitEl.setAttribute('data-delay', index * 120);
            });
        });
        function rollOdometers() {
            document.querySelectorAll('.odometer-digit').forEach(function (digitEl) {
                var target = parseInt(digitEl.getAttribute('data-target'));
                var delay = parseInt(digitEl.getAttribute('data-delay')) || 0;
                var inner = digitEl.querySelector('.odometer-digit-inner');
                setTimeout(function () {
                    inner.style.transform = 'translateY(-' + target + 'em)';
                }, delay);
            });
        }
        function resetOdometers() {
            document.querySelectorAll('.odometer-digit').forEach(function (digitEl) {
                var inner = digitEl.querySelector('.odometer-digit-inner');
                inner.style.transition = 'none';
                inner.style.transform = 'translateY(0)';
                inner.offsetHeight; // force reflow
                inner.style.transition = 'transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)';
            });
        }
        var section = document.getElementById('achievements');
        if (section) {
            var hasAnimated = false;
            var observer = new window.IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        resetOdometers();
                        setTimeout(rollOdometers, 100);
                        hasAnimated = true;
                    } else if (hasAnimated) {
                        resetOdometers();
                        hasAnimated = false;
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(section);
        }
    }

    const carousel = document.querySelector('.custom-media-carousel');
    if (carousel) {
        const slides = document.querySelectorAll('.custom-media-slide');
        const btnNext = document.querySelector('.media-button-next');
        const btnPrev = document.querySelector('.media-button-prev');
        let activeIndex = 2; // Default center slide index for 5 items
        const total = slides.length;
        function updateCarousel() {
            slides.forEach((slide, i) => {
                let diff = i - activeIndex;
                if (diff > 2) diff -= total;
                if (diff < -2) diff += total;
                let opacity = 1;
                let transform = "translate(-50%, -50%) ";
                let zIndex = 0;
                if (diff === 0) {
                    transform += "translateX(0%) scale(1)";
                    zIndex = 10;
                    slide.classList.add('media-slide-active');
                } else if (diff === -1) {
                    transform += "translateX(-28%) scale(0.85)";
                    zIndex = 9;
                    slide.classList.remove('media-slide-active');
                } else if (diff === 1) {
                    transform += "translateX(28%) scale(0.85)";
                    zIndex = 9;
                    slide.classList.remove('media-slide-active');
                } else if (diff === -2) {
                    transform += "translateX(-46%) scale(0.7)";
                    zIndex = 8;
                    slide.classList.remove('media-slide-active');
                } else if (diff === 2) {
                    transform += "translateX(46%) scale(0.7)";
                    zIndex = 8;
                    slide.classList.remove('media-slide-active');
                }
                slide.style.top = "50%";
                slide.style.left = "50%";
                slide.style.transform = transform;
                slide.style.zIndex = zIndex;
                slide.style.opacity = opacity;
            });
        }
        if (btnNext) btnNext.addEventListener('click', () => { activeIndex = (activeIndex + 1) % total; updateCarousel(); });
        if (btnPrev) btnPrev.addEventListener('click', () => { activeIndex = (activeIndex - 1 + total) % total; updateCarousel(); });
        slides.forEach((slide, i) => {
            slide.addEventListener('click', (e) => {
                let diff = i - activeIndex;
                if (diff > 2) diff -= total;
                if (diff < -2) diff += total;
                if (diff !== 0) {
                    activeIndex = i;
                    updateCarousel();
                } else {
                    if (slide.dataset.video) openVideoModal(slide.dataset.video);
                }
            });
            slide.addEventListener('mouseenter', () => {
                if (activeIndex !== i) { activeIndex = i; updateCarousel(); }
            });
        });
        setTimeout(() => { updateCarousel(); }, 100);
    }

    const searchBtn = document.getElementById('projectSearchBtn');
    const searchInput = document.getElementById('projectSearchInput');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (searchInput.classList.contains('w-0')) {
                searchInput.classList.remove('w-0', 'opacity-0', 'px-0');
                searchInput.classList.add('w-[200px]', 'opacity-100', 'pl-2', 'pr-8');
                searchInput.focus();
            } else {
                if (searchInput.value.trim() === '') {
                    searchInput.classList.remove('w-[200px]', 'opacity-100', 'pl-2', 'pr-8');
                    searchInput.classList.add('w-0', 'opacity-0', 'px-0');
                } else {
                    console.log('Searching for: ' + searchInput.value);
                }
            }
        });
    }

    const tabs = document.querySelectorAll('.project-tab');
    if (tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function (e) {
                e.preventDefault();
                tabs.forEach(t => { t.className = "project-tab text-[#555555] hover:text-primary font-bold text-[20px] md:text-[24px] transition-colors py-3 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all"; });
                this.className = "project-tab text-primary font-bold text-[20px] md:text-[24px] relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-primary transition-colors py-3";
            });
        });
    }

    const btnUploadCv = document.getElementById('btn-upload-cv');
    const applyRed = document.getElementById('apply-red');
    const applyFormWrapper = document.getElementById('apply-form-wrapper');
    const closeFormBtn = document.getElementById('close-form');
    function syncApplyHeights() {
        if (!applyRed || !applyFormWrapper) return;
        const redInner = applyRed.querySelector(':scope > div');
        const formInner = applyFormWrapper.querySelector(':scope > div');
        if (!redInner || !formInner) return;
        redInner.style.minHeight = '';
        formInner.style.minHeight = '';
        applyFormWrapper.style.position = 'absolute';
        applyFormWrapper.style.visibility = 'hidden';
        applyFormWrapper.classList.remove('hidden');
        const redH = redInner.offsetHeight;
        const formH = formInner.offsetHeight;
        const maxH = Math.max(redH, formH);
        applyFormWrapper.classList.add('hidden');
        applyFormWrapper.style.position = '';
        applyFormWrapper.style.visibility = '';
        redInner.style.minHeight = maxH + 'px';
        formInner.style.minHeight = maxH + 'px';
    }
    if (applyRed && applyFormWrapper) {
        syncApplyHeights();
        window.addEventListener('resize', syncApplyHeights);
        if (btnUploadCv) {
            btnUploadCv.addEventListener('click', () => {
                applyRed.classList.add('hidden');
                applyFormWrapper.classList.remove('hidden');
            });
        }
        if (closeFormBtn) {
            closeFormBtn.addEventListener('click', () => {
                applyFormWrapper.classList.add('hidden');
                applyRed.classList.remove('hidden');
            });
        }
    }
});

window.openVideoModal = function (videoUrl) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    if (!modal || !iframe) return;
    iframe.src = videoUrl;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 50);
}
window.closeVideoModal = function () {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    if (!modal || !iframe) return;
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        iframe.pause();
        iframe.currentTime = 0;
        iframe.src = '';
    }, 300);
}