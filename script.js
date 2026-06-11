document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('closeBtn');
    const menuContainer = document.getElementById('menuContainer');

    hamburger.addEventListener('click', () => {
        menuContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        menuContainer.classList.remove('active');
        document.body.style.overflow = '';
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);

    const mountains = document.getElementById('mountains');
    const heroContent = document.querySelector('.hero-content');


    const searchForm = document.getElementById('heroSearchForm');
    const inputLocation = document.getElementById('searchLocation');
    const inputDates = document.getElementById('searchDates');
    const inputGuests = document.getElementById('searchGuests');
    
    const fieldLocation = document.getElementById('fieldLocation');
    const fieldDates = document.getElementById('fieldDates');
    const fieldGuests = document.getElementById('fieldGuests');

    const errLocation = document.getElementById('errorLocation');
    const errDates = document.getElementById('errorDates');
    const errGuests = document.getElementById('errorGuests');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        if(inputLocation.value.trim() === '') {
            fieldLocation.classList.add('error-border');
            errLocation.style.display = 'block';
            isValid = false;
        } else {
            fieldLocation.classList.remove('error-border');
            errLocation.style.display = 'none';
        }

        if(inputDates.value.trim() === '') {
            fieldDates.classList.add('error-border');
            errDates.style.display = 'block';
            isValid = false;
        } else {
            fieldDates.classList.remove('error-border');
            errDates.style.display = 'none';
        }

        if(inputGuests.value.trim() === '' || inputGuests.value < 1) {
            fieldGuests.classList.add('error-border');
            errGuests.style.display = 'block';
            isValid = false;
        } else {
            fieldGuests.classList.remove('error-border');
            errGuests.style.display = 'none';
        }

        if(isValid) {
            window.location.href='404page.html';
        }
    });

    [inputLocation, inputDates, inputGuests].forEach(input => {
        input.addEventListener('input', function() {
            this.parentElement.classList.remove('error-border');
            this.parentElement.nextElementSibling.style.display = 'none';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {

    const scrollElements = document.querySelectorAll('.scroll-anim');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});




document.addEventListener('DOMContentLoaded', () => {

    const counters = document.querySelectorAll('.counter');
    let counted = false;

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const speed = 100; 
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                counted = true; 
                observer.disconnect(); 
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
    
    const scrollElements = document.querySelectorAll('.scroll-anim');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});




document.addEventListener('DOMContentLoaded', () => {

    const catCards = document.querySelectorAll('.cat-card');

    catCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;

            const isActive = this.classList.contains('active');

            catCards.forEach(c => c.classList.remove('active'));

            if (!isActive) {
                this.classList.add('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cat-card')) {
            catCards.forEach(c => c.classList.remove('active'));
        }
    });

    const scrollElements = document.querySelectorAll('.scroll-anim');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});




document.addEventListener('DOMContentLoaded', () => {
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineContainer = document.querySelector('.timeline-container');

    window.addEventListener('scroll', () => {
        if(timelineContainer && timelineProgress) {
            const containerRect = timelineContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let scrollPercentage = (windowHeight / 2 - containerRect.top) / containerRect.height;
            
            if (scrollPercentage < 0) scrollPercentage = 0;
            if (scrollPercentage > 1) scrollPercentage = 1;
            
            timelineProgress.style.height = `${scrollPercentage * 100}%`;
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const cards = Array.from(track.children);
    
    // Duplicate cards for infinite loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let isHovered = false;
    let currentX = 0;
    const speed = 1; // Animation speed (pixel per frame)

    function animateCarousel() {
        if (!isHovered) {
            currentX -= speed;
            track.style.transform = `translateX(${currentX}px)`;

            // Check if first card set is fully out of view, then reset
            const originalWidth = track.scrollWidth / 2;
            if (Math.abs(currentX) >= originalWidth) {
                currentX = 0;
            }
        }
        requestAnimationFrame(animateCarousel);
    }

    animateCarousel();

    track.addEventListener('mouseover', () => isHovered = true);
    track.addEventListener('mouseout', () => isHovered = false);
    
    // Basic mobile swipe support (simplistic)
    let startX;
    let scrollLeft;

    track.addEventListener('touchstart', (e) => {
        isHovered = true; // Pause auto-play
        startX = e.touches[0].pageX - track.offsetLeft;
    });

    track.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX); 
        currentX += walk * 0.2; // Add swipe distance to animation offset
        track.style.transform = `translateX(${currentX}px)`;
    });

    track.addEventListener('touchend', () => {
        isHovered = false; // Resume auto-play
    });
});



document.addEventListener('DOMContentLoaded', () => {
    
    const statCounters = document.querySelectorAll('.stat-counter');
    let statsCounted = false;

    const statObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsCounted) {
                statCounters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const speed = 50; 
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 30);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                statsCounted = true; 
                observer.disconnect(); 
            }
        });
    }, { threshold: 0.5 });

    const statsSectionContainer = document.querySelector('.stats-grid-container');
    if (statsSectionContainer) {
        statObserver.observe(statsSectionContainer);
    }
    
});




document.addEventListener('DOMContentLoaded', () => {
    
    // Newsletter Form Validation
    const newsletterForm = document.getElementById('newsletterForm');
    const nlEmailInput = document.getElementById('nlEmailInput');
    const nlInputGroup = document.getElementById('nlInputGroup');
    const nlMessage = document.getElementById('nlMessage');

    // Email Regex Pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValue = nlEmailInput.value.trim();

        // Reset classes
        nlInputGroup.classList.remove('error-border', 'success-border');
        nlMessage.classList.remove('error-text', 'success-text');

        if (emailValue === '') {
            showError('Email address is required!');
        } else if (!emailRegex.test(emailValue)) {
            showError('Please enter a valid email format.');
        } else {
            showSuccess('Thank you for subscribing!');
            nlEmailInput.value = ''; // Clear input on success
        }
    });

    function showError(message) {
        nlInputGroup.classList.add('error-border');
        nlMessage.textContent = message;
        nlMessage.classList.add('error-text');
    }

    function showSuccess(message) {
        window.location.href='404page.html'
    }

    // Remove error border on input typing
    nlEmailInput.addEventListener('input', function() {
        nlInputGroup.classList.remove('error-border', 'success-border');
        nlMessage.classList.remove('error-text', 'success-text');
        nlMessage.textContent = '';
    });

});