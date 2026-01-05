// Navbar scroll effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("scrolled", window.scrollY > 50)
);


// Smooth scroll + offcanvas close
const offcanvasEl = document.getElementById("offcanvasNavbar");
const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
let targetSection = null;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    targetSection = link.getAttribute("href");
    if(targetSection && targetSection !== "#"){
      e.preventDefault();
      offcanvasEl.classList.contains("show")
        ? offcanvas.hide()
        : document.querySelector(targetSection).scrollIntoView({behavior:"smooth"});
    }
  });
});

offcanvasEl.addEventListener("hidden.bs.offcanvas", () =>
  targetSection && document.querySelector(targetSection).scrollIntoView({behavior:"smooth"})
);


// Reveal on scroll
const observer = new IntersectionObserver(entries =>
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add("show");
      observer.unobserve(e.target);
    }
  }),
  {threshold:0.2}
);

document.querySelectorAll(".reveal-card").forEach(c => observer.observe(c));


// Deal cards — hover focus
document.querySelectorAll(".deal-card").forEach(card =>
  card.addEventListener("mouseenter", () => {
    document.querySelectorAll(".deal-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  })
);
