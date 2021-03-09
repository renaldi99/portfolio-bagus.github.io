// slider-testimonial
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
    1500: {
      items: 1,
    },
  },
});

// typed text banner
var typed = new Typed(".animate", {
  strings: ["Banner?", "Stiker?", "Kartu Nama?", "Sampul Buku?"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  startDelay: 1000,
});

// lottie - Animations
var animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie-animate"), // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./frontend/images/lottie/designer.json", // the path to the animation json
});
