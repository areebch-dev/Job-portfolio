'use strict';
// ============================== ELEMENT TOGGLE FUNCTION ======================================
const elemToggleFunc = (elem) => elem.classList.toggle("active");

// ============================== THEME TOGGLE FUNCTION ======================================

const themeToggleBtn = document.querySelector('.theme-toggle');

themeToggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark_theme');
  document.body.classList.toggle('light_theme');

  if (document.body.classList.contains('light_theme')) {
    localStorage.setItem('theme', 'light_theme');
  } else {
    localStorage.setItem('theme', 'dark_theme');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light_theme') {
    document.body.classList.add('light_theme');
    document.body.classList.remove('dark_theme');
    themeToggleBtn?.classList.add('active');
  } else {
    document.body.classList.add('dark_theme');
    document.body.classList.remove('light_theme');
    themeToggleBtn?.classList.remove('active');
  }
});

// ============================== Download CV FUNCTION ======================================

document.getElementById("downloadCV").addEventListener("click", function () {
  window.location.href =
    "https://drive.google.com/uc?export=download&id=13Eql9DYFof26ej7aeo6ylBWZddPXmNOq";
});

// ============================== Live Date and Time FUNCTION ======================================

function updateLiveTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
  const timeElement = document.getElementById('current-time');
  const dateElement = document.getElementById('current-date');

  if (timeElement) timeElement.textContent = timeString;
  if (dateElement) dateElement.textContent = dateString;
}
document.addEventListener('DOMContentLoaded', () => {
  updateLiveTime();
  setInterval(updateLiveTime, 1000);
});

// ============================== Sticky Header FUNCTION ======================================

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header?.classList.add("active");
    goTopBtn?.classList.add("active");
  } else {
    header?.classList.remove("active");
    goTopBtn?.classList.remove("active");
  }
});

// ============================== NAVBAR TOGGLE FUNCTION ======================================

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn?.addEventListener("click", () => {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

document.querySelectorAll("[data-navbar] a").forEach(link => {
  link.addEventListener("click", () => {
    navToggleBtn?.classList.remove("active");
    navbar?.classList.remove("active");
    document.body.classList.remove("active");
  });
});


// ============================== EMAIL CONTACT FORM ======================================

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("xq5yzY2yn9gWw35sg");

  const form = document.querySelector(".contact-form");
  if (!form) return console.error("Contact form not found!");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs.sendForm("service_9akwn84", "template_fnjviaj", form)
      .then(() => {
        Toastify({
          text: "Message sent successfully!",
          duration: 4000,
          gravity: "top",
          position: "right",
          backgroundColor: "#1F1F1F",
          style: { color: "#fff", borderRadius: "8px", fontWeight: "500", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }
        }).showToast();
        form.reset();
      })
      .catch(() => {
        Toastify({
          text: "Failed to send message. Try again later.",
          duration: 4000,
          gravity: "top",
          position: "right",
          backgroundColor: "#FF4C4C",
          style: { color: "#fff", borderRadius: "8px", fontWeight: "500", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }
        }).showToast();
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "Send Message";
      });
  });
});

// ============================== HIRE ME FUNCTION ======================================
function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}

// ============================== SCROLL REVEAL FUNCTION ======================================


const sr = ScrollReveal({
  distance: '40px',
  duration: 900,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  opacity: 0,
  reset: false,
  mobile: true
});

/* ================= HERO SECTION ================= */

sr.reveal('.coding-icons .coding-icon', {
  origin: 'bottom',
  interval: 120,
  delay: 200
});

sr.reveal('.hero-content', {
  origin: 'right',
  delay: 300
});

sr.reveal('.hero-social-list li', {
  origin: 'left',
  interval: 120,
  delay: 400
});

sr.reveal('.scroll-down', {
  origin: 'bottom',
  delay: 600,
  distance: '20px'
});

/* ================= ABOUT SECTION ================= */

sr.reveal('.about-banner', {
  origin: 'left',
  delay: 300,
  distance: '70px',
  rotate: { x: 0, y: 18, z: -1 },
  scale: 0.94,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
});

sr.reveal('.about-content', {
  origin: 'right',
  delay: 400
});

/* ================= SKILLS SECTION ================= */

sr.reveal('.skills-content', {
  origin: 'bottom',
  delay: 300
});

sr.reveal('.skills-toggle', {
  origin: 'bottom',
  delay: 400
});

sr.reveal('.skill-card', {
  origin: 'bottom',
  interval: 80,
  delay: 500,
  distance: '20px'
});

/* ================= SERVICES SECTION ================= */

sr.reveal('.services .section-content', {
  origin: 'bottom',
  delay: 300
});

sr.reveal('.service-card', {
  origin: 'bottom',
  interval: 120,
  delay: 400
});

/* ================= PROJECTS SECTION ================= */

sr.reveal('.project-content', {
  origin: 'bottom',
  delay: 300
});

sr.reveal('.project-card', {
  origin: 'bottom',
  interval: 150,
  delay: 400,
  distance: '25px'
});

/* ================= CONTACT SECTION ================= */

sr.reveal('.contact-content', {
  origin: 'left',
  delay: 300
});

sr.reveal('.contact-form', {
  origin: 'right',
  delay: 400
});

sr.reveal('.contact-list-item', {
  origin: 'bottom',
  interval: 100,
  delay: 500
});
