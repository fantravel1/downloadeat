/* ============================================================
   DownloadEat.com — Main JavaScript
   Search, navigation, animations, interactions
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Country Data for Search ---------- */
  const countries = [
    { name: 'Japan', flag: '🇯🇵', url: '/countries/japan.html', region: 'Asia' },
    { name: 'Thailand', flag: '🇹🇭', url: '/countries/thailand.html', region: 'Asia' },
    { name: 'South Korea', flag: '🇰🇷', url: '/countries/south-korea.html', region: 'Asia' },
    { name: 'Vietnam', flag: '🇻🇳', url: '/countries/vietnam.html', region: 'Asia' },
    { name: 'Indonesia', flag: '🇮🇩', url: '/countries/indonesia.html', region: 'Asia' },
    { name: 'Philippines', flag: '🇵🇭', url: '/countries/philippines.html', region: 'Asia' },
    { name: 'Malaysia', flag: '🇲🇾', url: '/countries/malaysia.html', region: 'Asia' },
    { name: 'Singapore', flag: '🇸🇬', url: '/countries/singapore.html', region: 'Asia' },
    { name: 'Taiwan', flag: '🇹🇼', url: '/countries/taiwan.html', region: 'Asia' },
    { name: 'India', flag: '🇮🇳', url: '/countries/india.html', region: 'Asia' },
    { name: 'China', flag: '🇨🇳', url: '/countries/china.html', region: 'Asia' },
    { name: 'Hong Kong', flag: '🇭🇰', url: '/countries/hong-kong.html', region: 'Asia' },
    { name: 'France', flag: '🇫🇷', url: '/countries/france.html', region: 'Europe' },
    { name: 'Spain', flag: '🇪🇸', url: '/countries/spain.html', region: 'Europe' },
    { name: 'Italy', flag: '🇮🇹', url: '/countries/italy.html', region: 'Europe' },
    { name: 'Germany', flag: '🇩🇪', url: '/countries/germany.html', region: 'Europe' },
    { name: 'United Kingdom', flag: '🇬🇧', url: '/countries/uk.html', region: 'Europe' },
    { name: 'Portugal', flag: '🇵🇹', url: '/countries/portugal.html', region: 'Europe' },
    { name: 'Netherlands', flag: '🇳🇱', url: '/countries/netherlands.html', region: 'Europe' },
    { name: 'Czech Republic', flag: '🇨🇿', url: '/countries/czech-republic.html', region: 'Europe' },
    { name: 'Poland', flag: '🇵🇱', url: '/countries/poland.html', region: 'Europe' },
    { name: 'Hungary', flag: '🇭🇺', url: '/countries/hungary.html', region: 'Europe' },
    { name: 'Croatia', flag: '🇭🇷', url: '/countries/croatia.html', region: 'Europe' },
    { name: 'Greece', flag: '🇬🇷', url: '/countries/greece.html', region: 'Europe' },
    { name: 'Sweden', flag: '🇸🇪', url: '/countries/sweden.html', region: 'Europe' },
    { name: 'Turkey', flag: '🇹🇷', url: '/countries/turkey.html', region: 'Europe' },
    { name: 'Mexico', flag: '🇲🇽', url: '/countries/mexico.html', region: 'Americas' },
    { name: 'Brazil', flag: '🇧🇷', url: '/countries/brazil.html', region: 'Americas' },
    { name: 'Colombia', flag: '🇨🇴', url: '/countries/colombia.html', region: 'Americas' },
    { name: 'Argentina', flag: '🇦🇷', url: '/countries/argentina.html', region: 'Americas' },
    { name: 'Peru', flag: '🇵🇪', url: '/countries/peru.html', region: 'Americas' },
    { name: 'Canada', flag: '🇨🇦', url: '/countries/canada.html', region: 'Americas' },
    { name: 'Australia', flag: '🇦🇺', url: '/countries/australia.html', region: 'Oceania' },
    { name: 'New Zealand', flag: '🇳🇿', url: '/countries/new-zealand.html', region: 'Oceania' },
    { name: 'UAE', flag: '🇦🇪', url: '/countries/uae.html', region: 'Middle East' },
    { name: 'Egypt', flag: '🇪🇬', url: '/countries/egypt.html', region: 'Africa' },
    { name: 'Morocco', flag: '🇲🇦', url: '/countries/morocco.html', region: 'Africa' },
    { name: 'South Africa', flag: '🇿🇦', url: '/countries/south-africa.html', region: 'Africa' },
    { name: 'Kenya', flag: '🇰🇪', url: '/countries/kenya.html', region: 'Africa' },
    { name: 'Nigeria', flag: '🇳🇬', url: '/countries/nigeria.html', region: 'Africa' },
  ];

  const cities = [
    { name: 'Tokyo', flag: '🇯🇵', url: '/cities/tokyo.html', country: 'Japan' },
    { name: 'Bangkok', flag: '🇹🇭', url: '/cities/bangkok.html', country: 'Thailand' },
    { name: 'Seoul', flag: '🇰🇷', url: '/cities/seoul.html', country: 'South Korea' },
    { name: 'Mexico City', flag: '🇲🇽', url: '/cities/mexico-city.html', country: 'Mexico' },
    { name: 'Paris', flag: '🇫🇷', url: '/cities/paris.html', country: 'France' },
    { name: 'Barcelona', flag: '🇪🇸', url: '/cities/barcelona.html', country: 'Spain' },
    { name: 'Rome', flag: '🇮🇹', url: '/cities/rome.html', country: 'Italy' },
    { name: 'Istanbul', flag: '🇹🇷', url: '/cities/istanbul.html', country: 'Turkey' },
    { name: 'Mumbai', flag: '🇮🇳', url: '/cities/mumbai.html', country: 'India' },
    { name: 'Bogota', flag: '🇨🇴', url: '/cities/bogota.html', country: 'Colombia' },
  ];

  /* ---------- Mobile Menu Toggle ---------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Search Functionality ---------- */
  function initSearch() {
    const searchInput = document.querySelector('.hero__search input');
    const searchResults = document.querySelector('.hero__search-results');
    if (!searchInput || !searchResults) return;

    const allItems = [
      ...countries.map(function (c) { return { name: c.name, flag: c.flag, url: c.url, type: 'Country' }; }),
      ...cities.map(function (c) { return { name: c.name, flag: c.flag, url: c.url, type: 'City' }; })
    ];

    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
      }

      var matches = allItems.filter(function (item) {
        return item.name.toLowerCase().includes(query);
      }).slice(0, 8);

      if (matches.length === 0) {
        searchResults.classList.remove('active');
        return;
      }

      searchResults.innerHTML = matches.map(function (m) {
        return '<a href="' + m.url + '"><span class="flag">' + m.flag + '</span><span>' + m.name + '</span><span class="text-sm text-gray" style="margin-left:auto">' + m.type + '</span></a>';
      }).join('');
      searchResults.classList.add('active');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.hero__search')) {
        searchResults.classList.remove('active');
      }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function (e) {
      var items = searchResults.querySelectorAll('a');
      var active = searchResults.querySelector('a.active');
      var index = Array.from(items).indexOf(active);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (active) active.classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
        items[index].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (active) active.classList.remove('active');
        index = index <= 0 ? items.length - 1 : index - 1;
        items[index].classList.add('active');
        items[index].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && active) {
        e.preventDefault();
        window.location.href = active.getAttribute('href');
      }
    });
  }

  /* ---------- FAQ Accordion ---------- */
  function initFAQ() {
    document.querySelectorAll('.faq-item__question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        var wasActive = item.classList.contains('active');

        // Close all in same list
        item.closest('.faq-list').querySelectorAll('.faq-item').forEach(function (fi) {
          fi.classList.remove('active');
        });

        if (!wasActive) {
          item.classList.add('active');
        }
      });
    });
  }

  /* ---------- Scroll Animations ---------- */
  function initScrollAnimations() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Counter Animation ---------- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  /* ---------- Back to Top Button ---------- */
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Header Scroll Effect ---------- */
  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 22, 40, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
      } else {
        header.style.background = 'rgba(10, 22, 40, 0.95)';
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ---------- Continent Filter ---------- */
  function initContinentFilter() {
    var buttons = document.querySelectorAll('.continent-btn');
    var cards = document.querySelectorAll('.country-card[data-region]');
    if (buttons.length === 0 || cards.length === 0) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        var region = this.getAttribute('data-region');

        cards.forEach(function (card) {
          if (region === 'all' || card.getAttribute('data-region') === region) {
            card.style.display = '';
            card.style.animation = 'fadeInUp 0.4s ease-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Payability Meter Animation ---------- */
  function initPayabilityMeters() {
    var meters = document.querySelectorAll('.payability-meter__fill');
    if (meters.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    meters.forEach(function (meter) {
      meter.style.width = '0%';
      observer.observe(meter);
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- Lazy Load Images ---------- */
  function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) return; // Native support

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(function (img) {
      observer.observe(img);
    });
  }

  /* ---------- Init Everything ---------- */
  function init() {
    initMobileMenu();
    initSearch();
    initFAQ();
    initScrollAnimations();
    initCounters();
    initBackToTop();
    initHeaderScroll();
    initContinentFilter();
    initPayabilityMeters();
    initSmoothScroll();
    initLazyLoad();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
