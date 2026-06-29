/**
 * WhiteHaven Luxury Inn - JavaScript
 * Multi-page website interactive functionality
 */

// ============================================
// 1. MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active')
        }
    });
});

document.addEventListener('click', (e) => {
    if (navMenu && hamburger && !
navMenu.contains(e.target) && !
hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active')

    }
});



// ============================================
// 2. NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ============================================
// 3. SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.className.includes('animate-fade-in-up')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            } else if (entry.target.className.includes('animate-fade-in')) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[class*="animate-"]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// 4. BOOKING FORM HANDLING
// ============================================

const bookingForm = 
document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
       const checkIn =
    document.getElementById('checkIn') .value;
        const checkOut =
    document.getElementById('checkOut') .value;
    
    if (checkIn && checkOut $$ new 
    Date(checkIn) >= new Date(checkOut)) {
            e.preventDefault();
            showNotification('Check-out date must be after check-in date', 'error');
            return;
    }
    
        showNotification('processing your booking...','info');
});


    // Update booking summary
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const roomTypeSelect = document.getElementById('roomType');
    const roomCountSelect = document.getElementById('roomCount');

    const roomPrices = {
        standard: 37000,
        deluxe: 45000,
        suite: 73000
    };

    function updateBookingSummary() {
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const roomType = roomTypeSelect.value;
        const roomCount = parseInt(roomCountSelect.value) || 1;

        document.getElementById('summaryCheckIn').textContent = checkIn || '-';
        document.getElementById('summaryCheckOut').textContent = checkOut || '-';
        document.getElementById('summaryRoom').textContent = roomType || '-';
        document.getElementById('summaryRoomCount').textContent = roomCount;

        if (checkIn && checkOut) {
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
            document.getElementById('summaryNights').textContent = nights > 0 ? nights : '-';

            if (roomType && nights > 0) {
                const price = roomPrices[roomType] || 0;
                const total = price * nights * roomCount;
                document.getElementById('summaryTotal').textContent = '₦' + total.toLocaleString();
            }
        }

        // Update room info
        const roomInfoContent = document.getElementById('roomInfoContent');
        if (roomType) {
            const roomInfo = {
                standard: {
                    name: 'Standard Room',
                    features: ['Complimentary breakfast', 'Modern design', 'City view', '32" Smart TV', 'Premium bedding']
                },
                deluxe: {
                    name: 'Deluxe Room',
                    features: ['Spacious luxury room', 'Complimentary breakfast', 'Marble bathroom', 'Work desk', 'Premium toiletries']
                },
                suite: {
                    name: 'Premium Suite',
                    features: ['Elegant interior', 'Luxury experience', 'Separate living area', 'Premium minibar', 'Concierge service']
                }
            };

            const info = roomInfo[roomType];
            roomInfoContent.innerHTML = `
                <h5>${info.name}</h5>
                <ul style="list-style: none; padding: 0;">
                    ${info.features.map(f => `<li style="padding: 0.25rem 0;">✓ ${f}</li>`).join('')}
                </ul>
            `;
        }
    }

    checkInInput.addEventListener('change', updateBookingSummary);
    checkOutInput.addEventListener('change', updateBookingSummary);
    roomTypeSelect.addEventListener('change', updateBookingSummary);
    roomCountSelect.addEventListener('change', updateBookingSummary);
}

// ============================================
// 5. CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };

        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        contactForm.reset();
        console.log('Contact Form Data:', formData);
    });
}

// ============================================
// 6. NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    document.body.appendChild(notification);

    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }

            .notification-success {
                background-color: #10b981;
                color: white;
            }

            .notification-error {
                background-color: #ef4444;
                color: white;
            }

            .notification-info {
                background-color: #3b82f6;
                color: white;
            }

            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }

            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
            }

            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ============================================
// 7. FORM VALIDATION
// ============================================

const formInputs = document.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#D4AF37';
    });
});

function validateInput(input) {
    if (input.hasAttribute('required') && !input.value.trim()) {
        input.style.borderColor = '#ef4444';
        return false;
    }

    if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            input.style.borderColor = '#ef4444';
            return false;
        }
    }

    if (input.type === 'date') {
        const value = new Date(input.value);
        if (isNaN(value.getTime())) {
            input.style.borderColor = '#ef4444';
            return false;
        }
    }

    input.style.borderColor = '#e8e8e8';
    return true;
}

// ============================================
// 8. PARALLAX EFFECT
// ============================================

const heroBackground = document.querySelector('.hero-background');

if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroBackground.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// ============================================
// 9. COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
    const statValues = document.querySelectorAll('.stat-value');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = element.textContent;
                const numberMatch = finalValue.match(/\d+/);

                if (numberMatch) {
                    const number = parseInt(numberMatch[0]);
                    const suffix = finalValue.replace(numberMatch[0], '');

                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            element.textContent = number + suffix;
                            clearInterval(timer);
                        } else {
                            element.textContent = Math.floor(current) + suffix;
                        }
                    }, 30);
                }

                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(value => {
        counterObserver.observe(value);
    });
}

animateCounters();

// ============================================
// 10. GALLERY FILTER
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// 11. KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// 12. UTILITY FUNCTIONS
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// 13. PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    document.querySelectorAll('[class*="animate-"]').forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            setTimeout(() => {
                el.style.opacity = '1';
                if (el.className.includes('animate-fade-in-up')) {
                    el.style.animation = 'fadeInUp 0.8s ease-out forwards';
                } else {
                    el.style.animation = 'fadeIn 0.8s ease-out forwards';
                }
            }, index * 50);
        }
    });
});

// ============================================
// 14. SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// 15. INITIALIZATION
// ============================================

console.log('WhiteHaven Luxury Inn - Website Loaded Successfully');

const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: #D4AF37;
        border-bottom: 2px solid #D4AF37;
    }

    .keyboard-nav *:focus {
        outline: 2px solid #D4AF37;
        outline-offset: 2px;
    }

    .gallery-item {
        transition: opacity 0.3s ease-out;
    }
`;
document.head.appendChild(navStyle);
