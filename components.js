// components.js

document.addEventListener('DOMContentLoaded', function() {

    // 1. HEADER DINAMICO
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const currentPath = window.location.pathname;
        const isStory = currentPath.includes('our-story');
        const isMenu = currentPath.includes('menu-services');
        const isHome = !isStory && !isMenu; 

        // CAMBIO CRITICO: usiamo outerHTML
        headerPlaceholder.outerHTML = `
        <header class="site-header">
            <!-- Tutto il tuo codice interno rimane identico -->
            <div class="header-inner">
                <div class="site-logo">
                    <a href="./"><img src="media/new_logos/png/logo_pizza_veg.png" alt="Pizza di Casa Logo"></a>
                </div>
                <button class="menu-toggle" aria-expanded="false" aria-label="Menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
                <nav class="main-nav">
                    <ul class="nav-list">
                        <li>${isHome ? '<span class="active-link">Home</span>' : '<a href="./">Home</a>'}</li>
                        <li>${isStory ? '<span class="active-link">Our Story</span>' : '<a href="our-story">Our Story</a>'}</li>
                        <li>${isMenu ? '<span class="active-link">Menu & Services</span>' : '<a href="menu-services">Menu & Services</a>'}</li>
                    </ul>
                    <div class="header-socials">
                        <a href="https://www.instagram.com/pizza.di.casa.1/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@pizza.di.casa.1" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </nav>
            </div>
        </header>
        `;
    }

    // 2. TRUST BAR
    const trustBarPlaceholder = document.getElementById('trust-bar-placeholder');
    if (trustBarPlaceholder) {
        // CAMBIO CRITICO: usiamo outerHTML
        trustBarPlaceholder.outerHTML = `
        <aside class="trust-bar" aria-label="Client Reviews Summary">
            <div class="trust-bar-inner">
                <div class="trust-bar-rating">
                    <span class="stars" aria-hidden="true">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span>Rated <strong>5.0 / 5.0</strong> on Add to Event</span>
                </div>
                
                <span class="trust-bar-divider" aria-hidden="true">•</span>
                
                <span class="trust-bar-verified">
                    <i class="fa-solid fa-circle-check"></i> 100% Verified Reviews
                </span>
                
                <a href="https://www.addtoevent.co.uk/suppliers/pizza-di-casa" target="_blank" rel="noopener" class="trust-bar-btn">
                    Read Our Reviews <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </aside>
        `;
    }

    // 3. FOOTER E WHATSAPP FLOAT
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        // CAMBIO CRITICO: usiamo outerHTML
        footerPlaceholder.outerHTML = `
        <footer class="site-footer">
            <div class="footer-main">
            
                <!-- Colonna 1: Info e Social -->
                <div class="footer-col">
                    <h3>Pizza di Casa</h3>
                    <p>Bringing the real taste of Italian pizza to your table <i class="fa-solid fa-heart red"></i></p>
                    <p>Operated by Ajmain | Oxford/London, UK</p>
                    <div class="footer-socials">
                        <a href="https://www.instagram.com/pizza.di.casa.1/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@pizza.di.casa.1" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>

                <!-- Colonna 2: Contatti -->
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <p class="footer-contact-text">Want to book us for an event?</p>
                    <a href="mailto:tuaemail@esempio.com" class="btn-outline btn-small">Email Us</a>
                </div>

                <!-- Colonna 3: Links Legali -->
                <div class="footer-col">
                    <h3>Legal</h3>
                    <ul class="footer-legal-list">
                        <li><a href="privacy-policy" class="footer-legal-link">Privacy Policy</a></li>
                        <li><a href="cookie-policy" class="footer-legal-link">Cookie Policy</a></li>
                    </ul>
                </div>

            </div>

            <!-- Barra inferiore con i diritti -->
            <div class="footer-bottom">
                <p class="copyright-string">
                    <span class="copy-block">&copy; 2026 Pizza di Casa.</span>
                    <span class="copy-block">All rights reserved.</span>
                    <span class="footer-divider">|</span>
                    <span class="copy-block">Web Development: <a href="https://romeo0212.github.io/landing-page/en" target="_blank" rel="noopener nofollow" class="developer-link">Romeo Calearo</a></span>
                    <span class="footer-divider">|</span>
                    <span class="copy-block">Logo design: <a href="https://github.com/sebamarana" target="_blank" rel="noopener nofollow" class="developer-link">Sebastiano Marana</a></span>
                </p>
            </div>
        </footer>
        <a href="https://wa.me/447550865059" class="whatsapp-float" target="_blank" aria-label="Chat with us on WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
        `;
    }
});