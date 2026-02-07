/**
 * Treehouse Athletic Club - Main JavaScript
 * Tier-S Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initScheduleTabs();
  initSmoothScroll();
});

/**
 * Header scroll behavior
 */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const body = document.body;
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    
    // Animate hamburger
    toggle.classList.toggle('active');
  });
  
  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      body.style.overflow = '';
      toggle.classList.remove('active');
    });
  });
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up, .fade-in');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    elements.forEach(el => el.classList.add('visible'));
  }
}

/**
 * Schedule tab switching
 */
function initScheduleTabs() {
  const tabs = document.querySelectorAll('.schedule-tab');
  const grid = document.querySelector('.schedule-grid');
  
  if (!tabs.length || !grid) return;
  
  // Sample class data
  const classData = {
    monday: [
      { time: '6:00 AM', name: 'Morning HIIT', instructor: 'Sarah M.', spots: 8 },
      { time: '9:00 AM', name: 'Yoga Flow', instructor: 'Lisa K.', spots: 12 },
      { time: '12:00 PM', name: 'Spin Class', instructor: 'Mike R.', spots: 5 },
      { time: '5:30 PM', name: 'CrossFit', instructor: 'Jake T.', spots: 3 }
    ],
    tuesday: [
      { time: '6:00 AM', name: 'Bootcamp', instructor: 'Jake T.', spots: 10 },
      { time: '10:00 AM', name: 'Pilates', instructor: 'Emma S.', spots: 15 },
      { time: '4:00 PM', name: 'Aqua Aerobics', instructor: 'Carol B.', spots: 20 },
      { time: '6:00 PM', name: 'Zumba', instructor: 'Maria G.', spots: 8 }
    ],
    wednesday: [
      { time: '5:30 AM', name: 'Spin Class', instructor: 'Mike R.', spots: 4 },
      { time: '9:00 AM', name: 'Power Yoga', instructor: 'Lisa K.', spots: 10 },
      { time: '12:00 PM', name: 'TRX Training', instructor: 'Sarah M.', spots: 6 },
      { time: '5:30 PM', name: 'Boxing', instructor: 'Tony P.', spots: 8 }
    ],
    thursday: [
      { time: '6:00 AM', name: 'Morning HIIT', instructor: 'Sarah M.', spots: 6 },
      { time: '10:00 AM', name: 'Barre', instructor: 'Emma S.', spots: 14 },
      { time: '4:30 PM', name: 'Swim Lessons', instructor: 'Carol B.', spots: 8 },
      { time: '6:00 PM', name: 'Strength Training', instructor: 'Jake T.', spots: 5 }
    ],
    friday: [
      { time: '6:00 AM', name: 'Bootcamp', instructor: 'Jake T.', spots: 12 },
      { time: '9:00 AM', name: 'Yoga Flow', instructor: 'Lisa K.', spots: 18 },
      { time: '12:00 PM', name: 'Spin Class', instructor: 'Mike R.', spots: 7 },
      { time: '4:00 PM', name: 'Family Fitness', instructor: 'Sarah M.', spots: 15 }
    ],
    saturday: [
      { time: '8:00 AM', name: 'Weekend Warrior', instructor: 'Jake T.', spots: 10 },
      { time: '10:00 AM', name: 'Family Yoga', instructor: 'Lisa K.', spots: 20 },
      { time: '12:00 PM', name: 'Aqua Zumba', instructor: 'Maria G.', spots: 25 },
      { time: '2:00 PM', name: 'Rock Climbing Intro', instructor: 'Tom H.', spots: 8 }
    ],
    sunday: [
      { time: '9:00 AM', name: 'Sunrise Yoga', instructor: 'Lisa K.', spots: 22 },
      { time: '10:30 AM', name: 'Family Swim', instructor: 'Carol B.', spots: 30 },
      { time: '12:00 PM', name: 'Stretch & Recover', instructor: 'Emma S.', spots: 15 },
      { time: '2:00 PM', name: 'Basketball Open Gym', instructor: 'Staff', spots: 20 }
    ]
  };
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Get day data
      const day = tab.dataset.day;
      const classes = classData[day] || classData.monday;
      
      // Render classes
      renderClasses(grid, classes);
    });
  });
  
  function renderClasses(container, classes) {
    container.innerHTML = classes.map(cls => `
      <div class="class-card">
        <div class="class-time">${cls.time}</div>
        <h4 class="class-name">${cls.name}</h4>
        <div class="class-instructor">with ${cls.instructor}</div>
        <span class="class-spots">${cls.spots} spots left</span>
      </div>
    `).join('');
  }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Form validation helper
 */
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

/**
 * Number counter animation
 */
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function update() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start).toLocaleString();
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }
  
  update();
}

/**
 * Lazy load images
 */
function initLazyLoad() {
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback with IntersectionObserver
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Google Reviews integration placeholder
 */
function loadGoogleReviews() {
  // In production, this would fetch from Google Places API
  const reviews = [
    {
      author: 'Jennifer M.',
      rating: 5,
      text: 'Best gym in Utah! The kids club is amazing and the pool is always clean.',
      date: '2 weeks ago'
    },
    {
      author: 'Marcus T.',
      rating: 5,
      text: 'Incredible facility with everything you need. Rock wall is a hit with my teenagers!',
      date: '1 month ago'
    },
    {
      author: 'Sarah K.',
      rating: 5,
      text: 'Love the group fitness classes. Instructors are top notch and so motivating.',
      date: '3 weeks ago'
    }
  ];
  
  return reviews;
}

// Export for use in other scripts
window.TreehouseApp = {
  validateForm,
  animateCounter,
  loadGoogleReviews
};
