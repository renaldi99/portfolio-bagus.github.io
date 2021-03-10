// page-scroll
//event page scroll sementara

$(".page-scroll").on("click", function () {
  var link = $(this).attr("href");
  var elementLink = $(link);

  // console.log(elementLink);
  //move
  $("html, body").animate(
    {
      scrollTop: elementLink.offset().top + 10,
    },
    1000
  );
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

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
