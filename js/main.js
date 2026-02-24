// Danh Khôi Đất Bắc - Main Javascript
console.log("Dự án Danh Khôi Đất Bắc đã sẵn sàng!");

// Scroll to top left indicator logic
document.addEventListener('DOMContentLoaded', () => {
    const scrollTopLeft = document.getElementById('scroll-top-left');
    if (scrollTopLeft) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopLeft.classList.add('visible');
            } else {
                scrollTopLeft.classList.remove('visible');
            }
        });

        scrollTopLeft.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== Odometer Counter Animation =====
    function initOdometers() {
        const groups = document.querySelectorAll('.odometer-group');
        if (!groups.length) return;

        groups.forEach(group => {
            const value = group.getAttribute('data-value');
            const digits = value.split('');

            digits.forEach((digit, index) => {
                const digitEl = document.createElement('div');
                digitEl.classList.add('odometer-digit');

                const inner = document.createElement('div');
                inner.classList.add('odometer-digit-inner');

                // Create digit column: 0 through 9
                for (let i = 0; i <= 9; i++) {
                    const span = document.createElement('span');
                    span.textContent = i;
                    inner.appendChild(span);
                }

                digitEl.appendChild(inner);
                group.appendChild(digitEl);

                // Store target digit and delay
                digitEl.dataset.target = digit;
                digitEl.dataset.delay = index * 120; // stagger each digit
            });
        });
    }

    function rollOdometers() {
        const allDigits = document.querySelectorAll('.odometer-digit');
        allDigits.forEach(digitEl => {
            const target = parseInt(digitEl.dataset.target);
            const delay = parseInt(digitEl.dataset.delay) || 0;
            const inner = digitEl.querySelector('.odometer-digit-inner');

            setTimeout(() => {
                inner.style.transform = `translateY(-${target}em)`;
            }, delay);
        });
    }

    function resetOdometers() {
        const allDigits = document.querySelectorAll('.odometer-digit');
        allDigits.forEach(digitEl => {
            const inner = digitEl.querySelector('.odometer-digit-inner');
            inner.style.transition = 'none';
            inner.style.transform = 'translateY(0)';
            // Force reflow
            inner.offsetHeight;
            inner.style.transition = 'transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)';
        });
    }

    // Initialize digit columns
    initOdometers();

    // Use IntersectionObserver to trigger animation when section scrolls into view
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
        let hasAnimated = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reset first, then roll
                    resetOdometers();
                    setTimeout(() => {
                        rollOdometers();
                    }, 100);
                    hasAnimated = true;
                } else if (hasAnimated) {
                    // Reset when scrolled away so it re-animates on next view
                    resetOdometers();
                    hasAnimated = false;
                }
            });
        }, { threshold: 0.3 });

        observer.observe(achievementsSection);
    }
});
