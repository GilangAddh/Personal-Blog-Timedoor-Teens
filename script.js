//Mengganti teks saat di click
function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll untuk  melihat";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";
}

//Button like dan disslike

//Mengganti gambar
function changeImage(element) {
  element.setAttribute("src", "images/img-header2.png");
}
function changeImageBack(element) {
  element.setAttribute("src", "images/img-header.png");
}

//Mengganti teks title
function changeTitle(element) {
  element.innerHTML = "Pengembangan Game Dan Website";
}

function changeTitleBack(element) {
  element.innerHTML = "Dapatkan Tips Programming Disini!";
}

//label X
var myList = document.getElementsByTagName("li");
var i;

for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}

//close
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  // Check the inputed value
  if (inputValue === "" || inputValue === " ") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }

  // Clear text on the search bar
  document.getElementById("myInput").value = "";

  // Create button close
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");

  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// slider
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

// Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });
  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});

//repeater
// var repeat = function (activeClass) {
//   let active = document.getElementsByClassName("active");
//   let i = 1;

//   var repeater = function () {
//     setTimeout(function () {
//       [...active].forEach(function (activeSlide) {
//         activeSlide.classList.remove("active");
//       });
//       slides[i].classList.add("active");
//       buttons[i].classList.add("active");
//       i++;
//       if (slides.length == i) {
//         i = 0;
//       }
//       if (i >= slides.length) {
//         return;
//       }
//       repeater();
//     }, 6000);
//   };

//   repeater();
// };

// repeat();

AOS.init({
  once: true,
});
var codingProjects = document.querySelectorAll(".project");
codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = index * 300;
});

var splash = document.querySelector(".splash");
if (splash) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      splash.style.display = "none";
    }, 3000);
  });
}

var animate = document.querySelector(".astronaut-takeoff");
if (animate) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      animate.classList.add("animation");
    }, 400);
  });
}

var splashText = document.querySelector(".splash-text");
if (splashText) {
  setTimeout(function () {
    splashText.innerHTML = "Come in!";
  }, 2000);
}

var btnSubmit = document.querySelector("#submit");
console.log(btnSubmit);
var modal = document.querySelector(".modal-container");
var btnClose = document.querySelector(".close-modal");

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", function () {
    modal.classList.remove("show");
  });
}
