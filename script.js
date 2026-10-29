document.addEventListener('DOMContentLoaded', function() {
    // 1. HAMBURGER MENU
    var toggleButton = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('.main-nav');
    
    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('is-open');
            toggleButton.classList.toggle('is-active');
        });
    }

    // 2. SLIDER FOTO VERTICALI
    const slider = document.getElementById('slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (slider) {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        // Genera i pallini dinamicamente in base al numero di foto
        if (dotsContainer) {
            dotsContainer.innerHTML = ''; 
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active'); 
                dot.setAttribute('data-index', i);
                dotsContainer.appendChild(dot);
            }
        }

        const dots = document.querySelectorAll('.dot');

        function updateSlider() {
            // Sposta le immagini
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            // Aggiorna il colore del pallino
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        }

        // Click sulla freccia destra
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlider();
            });
        }

        // Click sulla freccia sinistra
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }

        // Click diretto sui pallini
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentIndex = parseInt(e.target.getAttribute('data-index'));
                updateSlider();
            });
        });
    }

    // =========================================
    // 3. LIGHTBOX PER LE FOTO DELLO SLIDER
    // =========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const sliderImages = document.querySelectorAll('.slide img');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');

    if (lightbox && lightboxImg && sliderImages.length > 0) {
        let currentLbIndex = 0;

        // Apri il lightbox cliccando sulla foto e salva l'indice
        sliderImages.forEach((img, index) => {
            img.addEventListener('click', function() {
                currentLbIndex = index;
                lightbox.style.display = "block";
                lightboxImg.src = this.src;
            });
        });

        // Funzione per aggiornare l'immagine nel lightbox
        function updateLightboxImage() {
            lightboxImg.src = sliderImages[currentLbIndex].src;
        }

        // Scorri avanti nel lightbox
        if (lbNext) {
            lbNext.addEventListener('click', function(e) {
                e.stopPropagation(); // Evita di chiudere il lightbox cliccando sul bottone
                currentLbIndex = (currentLbIndex + 1) % sliderImages.length;
                updateLightboxImage();
            });
        }

        // Scorri indietro nel lightbox
        if (lbPrev) {
            lbPrev.addEventListener('click', function(e) {
                e.stopPropagation();
                currentLbIndex = (currentLbIndex - 1 + sliderImages.length) % sliderImages.length;
                updateLightboxImage();
            });
        }

        // Chiudi cliccando la X
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = "none";
        });

        // Chiudi cliccando sullo sfondo scuro (ma non sull'immagine o sui bottoni)
        lightbox.addEventListener('click', function(e) {
            if (e.target !== lightboxImg && e.target !== lbPrev && e.target !== lbNext && !lbPrev.contains(e.target) && !lbNext.contains(e.target)) {
                lightbox.style.display = "none";
            }
        });

        // Controlli da tastiera (Accessibilità e usabilità migliorate)
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === "block") {
                if (e.key === "Escape") {
                    lightbox.style.display = "none";
                } else if (e.key === "ArrowRight") {
                    currentLbIndex = (currentLbIndex + 1) % sliderImages.length;
                    updateLightboxImage();
                } else if (e.key === "ArrowLeft") {
                    currentLbIndex = (currentLbIndex - 1 + sliderImages.length) % sliderImages.length;
                    updateLightboxImage();
                }
            }
        });
    }

    // =========================================
    // 4. MINI-CAROSELLO RECENSIONI (MOBILE)
    // =========================================
    const revSlider = document.getElementById('reviews-slider');
    const revPrev = document.querySelector('.rev-prev');
    const revNext = document.querySelector('.rev-next');
    const revDotsContainer = document.getElementById('reviews-dots');

    if (revSlider && revDotsContainer) {
        let revIndex = 0;
        const revCards = revSlider.querySelectorAll('.review-card');
        const totalRevs = revCards.length;

        // Genera i pallini dinamicamente
        revDotsContainer.innerHTML = '';
        for (let i = 0; i < totalRevs; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            revDotsContainer.appendChild(dot);
        }

        const revDots = revDotsContainer.querySelectorAll('.dot');

        function updateRevSlider() {
            // Se siamo su Desktop (> 768px), rimuovi ogni traslazione per mostrare le 3 colonne
            if (window.innerWidth > 768) {
                revSlider.style.transform = 'none';
                return;
            }
            revSlider.style.transform = `translateX(-${revIndex * 100}%)`;
            revDots.forEach(dot => dot.classList.remove('active'));
            if (revDots[revIndex]) {
                revDots[revIndex].classList.add('active');
            }
        }

        if (revNext) {
            revNext.addEventListener('click', () => {
                revIndex = (revIndex + 1) % totalRevs;
                updateRevSlider();
            });
        }

        if (revPrev) {
            revPrev.addEventListener('click', () => {
                revIndex = (revIndex - 1 + totalRevs) % totalRevs;
                updateRevSlider();
            });
        }

        revDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                revIndex = parseInt(e.target.getAttribute('data-index'));
                updateRevSlider();
            });
        });

        // Supporto Swipe Touch col dito su smartphone
        let startX = 0;
        revSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        revSlider.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 40) { // Soglia minima di 40px per riconoscere lo swipe
                if (diff > 0) {
                    revIndex = (revIndex + 1) % totalRevs; // Swipe verso sinistra -> Avanti
                } else {
                    revIndex = (revIndex - 1 + totalRevs) % totalRevs; // Swipe verso destra -> Indietro
                }
                updateRevSlider();
            }
        }, { passive: true });

        // Reset automatico se si ridimensiona la finestra da mobile a desktop
        window.addEventListener('resize', updateRevSlider);
    }
});