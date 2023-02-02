//Data Banner
var data = [
  {
    id: 1,
    images: "./images/carousel1.jpg",
  },
  {
    id: 2,
    images: "./images/carousel2.jpg",
  },
  {
    id: 3,
    images: "./images/carousel3.jpg",
  },
  {
    id: 4,
    images: "./images/carousel4.jpg",
  },
  {
    id: 5,
    images: "./images/carousel5.jpg",
  },
  {
    id: 6,
    images: "./images/carousel6.jpg",
  },
];

//Render Data Banner
var renderData = data.map(function (item) {
  return `<div class="item">
    <img src="${item.images}" alt="">
    </div>`;
});
var newData = renderData.join(" ");
var wrapperData = document.querySelector(".carousel .owl-carousel");
wrapperData.innerHTML = newData;




// --------------------------------------------------------------------------------------------

// Call Owl Carousel on Jquery
$(document).ready(function () {
  $(".carousel .owl-carousel").owlCarousel();
});

autoplay: false;
autoplayTimeout: 5000;
autoplayHoverPause: false;

// Design Carousel Banner
var owl = $(".carousel .owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000, //5 Second
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    486: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

//Touch Carousel Move
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

//Auto Play
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});




//Design Carousel Collection
var owlCollection = $(".carousel-collection .owl-carousel");
owlCollection.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000, //5 Second
  autoplayHoverPause: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});
