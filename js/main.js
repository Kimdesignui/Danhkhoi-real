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
});
