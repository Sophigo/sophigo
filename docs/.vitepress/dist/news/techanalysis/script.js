// script.js - Round 3: Enhanced interactivity

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navbar = document.getElementById('navbar');
  const tabAll = document.getElementById('tab-all');
  const tabLeap = document.getElementById('tab-leap');
  const tabArti = document.getElementById('tab-arti');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.navbar-links');
  const tabButtons = [tabAll, tabLeap, tabArti];

  // ===== View State Toggle =====
  function clearTabs() {
    tabButtons.forEach(btn => btn.classList.remove('active', 'leap', 'arti'));
  }

  tabAll.addEventListener('click', () => {
    clearTabs(); tabAll.classList.add('active');
    body.className = 'view-state-all';
  });
  tabLeap.addEventListener('click', () => {
    clearTabs(); tabLeap.classList.add('active', 'leap');
    body.className = 'view-state-leap';
  });
  tabArti.addEventListener('click', () => {
    clearTabs(); tabArti.classList.add('active', 'arti');
    body.className = 'view-state-arti';
  });

  // ===== Mobile Menu =====
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ===== Navbar Scroll Effect =====
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 30) {
      navbar.style.backgroundColor = 'rgba(0,0,0,0.88)';
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(0,0,0,0.72)';
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }
    lastScroll = scrollY;
  }, { passive: true });

  // ===== Resource Filter =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const resourceGroups = document.querySelectorAll('.resource-group');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      resourceGroups.forEach(group => {
        const cat = group.dataset.category || 'all';
        if (filter === 'all' || cat.includes(filter) || cat === 'all') {
          group.style.display = '';
          group.style.opacity = '0';
          group.style.transform = 'translateY(10px)';
          requestAnimationFrame(() => {
            group.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
          });
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // ===== Scroll Reveal Animation =====
  const revealElements = document.querySelectorAll(
    '.platform-card, .bento-card, .section-title, .section-subtitle, ' +
    '.resource-group, .case-card, .eco-category, .comparison-table-section'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = Math.min(i * 50, 300);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Active nav highlight on scroll =====
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinksList = document.querySelectorAll('.navbar-links a');
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinksList.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` 
            ? 'var(--text-primary)' 
            : '';
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-60px 0px -60% 0px' });

  sections.forEach(section => sectionObserver.observe(section));
});
