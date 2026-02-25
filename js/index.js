// Close navbar dropdown when clicking on a link
function closeDropdowNavbar() {
    let dropdown = document.getElementById('navbarSupportedContent');
    if (dropdown.classList.contains('show')) {
        dropdown.classList.toggle('show');
    }
}

// Smooth scroll animations
document.addEventListener('DOMContentLoaded', function () {
    // Navbar background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.background = 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
            header.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and service items
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add parallax effect to home section
    const homeSection = document.querySelector('.div_img_home');
    if (homeSection) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            homeSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });
    }

    // Add parallax effect to servicos section
    const servicosSection = document.querySelector('#servicos');
    if (servicosSection) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            const servicosOffset = servicosSection.offsetTop;
            if (window.scrollY > servicosOffset - window.innerHeight) {
                const parallaxAmount = (scrollPosition - servicosOffset + window.innerHeight) * 0.3;
                servicosSection.style.backgroundPosition = `center ${parallaxAmount}px`;
            }
        });
    }
});