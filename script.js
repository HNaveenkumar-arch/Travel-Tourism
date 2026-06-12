document.addEventListener('DOMContentLoaded', () => {
  
  // Lock the scrollbar immediately when page starts loading
  document.body.classList.add('loading-active');

  const loader = document.getElementById('stackly-loader');

  if (loader) {
    // Wait for exactly 2 seconds (2000 milliseconds)
    setTimeout(() => {
      // 1. Fade out the loader
      loader.classList.add('fade-out');
      
      // 2. Unlock the scrollbar so user can scroll the website
      document.body.classList.remove('loading-active');

      // 3. Optional cleanup: Remove the loader from DOM completely after fade finishes (0.6s)
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);

    }, 2000);
  }

});




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