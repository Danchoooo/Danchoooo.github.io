"use strict";

var active = document.querySelector(".active");
var button = document.querySelectorAll(".button");
var underline = document.querySelectorAll(".underline");
var links = document.querySelectorAll(".links");
var stat = document.querySelectorAll(".stat");
var animate = document.querySelectorAll(".animate");
var circle = document.querySelectorAll(".cirkle");
var rotate = document.querySelectorAll(".rotate");
var rotateBtn = document.querySelectorAll(".rotateBtn");
var main = document.querySelector(".main");
var mainResume = document.querySelector(".mainResume");
var portfolio = document.querySelector(".portfolio");
var blog = document.querySelector(".blog");
var contact = document.querySelector(".contact");
var scrollUp = document.querySelector(".window");
var googleMap = document.querySelector(".map");
var countMe = document.querySelectorAll(".count"); //**Toggle Color Pallet**

var move = document.querySelector(".move");
var moveButton = document.querySelector(".palet>p>button");
var palet = document.querySelector(".palet");
moveButton.addEventListener("click", function () {
  move.classList.toggle("hideMove");
}); // **Portfolio Filter**

var filters = document.querySelectorAll(".filters>div>li");
filters.forEach(function (element) {
  element.addEventListener("click", function () {
    var filterMe = document.querySelectorAll(".space");
    filterMe.forEach(function (element1) {
      if (element1.classList.contains(element.innerText)) {
        setTimeout(function () {
          element1.classList.remove("noShow");
        }, 500);
        element1.classList.add("scaleMeIn");
        element1.classList.remove("scaleMeOut");
      } else {
        setTimeout(function () {
          element1.classList.add("noShow");
        }, 500);
        element1.classList.add("scaleMeOut");
        element1.classList.remove("scaleMein");
      }
    });
  });
}); //** Contact form animate the inputs on focus **

var focusEffect = document.querySelectorAll(".focusEffect");
focusEffect.forEach(function (element) {
  element.addEventListener("focus", function () {
    element.nextElementSibling.classList.remove("inputsAnimateOut");
    element.nextElementSibling.classList.add("inputsAnimateIn");
    element.style.zIndex = "-2";
  });
  element.addEventListener("focusout", function () {
    element.nextElementSibling.classList.remove("inputsAnimateIn");
    element.nextElementSibling.classList.add("inputsAnimateOut");
    setTimeout(function () {
      element.style.zIndex = "1";
    }, 500);
  });
}); // **Making Img Slider Using Range Input **

var myRange = document.getElementById("myRange");
var slideMe = document.querySelector(".slider");
slideMe.style.transform = "translateX(".concat(myRange.value, "%)");

myRange.oninput = function () {
  slideMe.style.transform = "translateX(-".concat(this.value, "%)");

  if (slideMe.classList.contains("transitionSlider")) {
    slideMe.classList.remove("transitionSlider");
  }
};

var myRange1 = document.getElementById("myRange1");
var slideMe1 = document.querySelector(".slider3");
slideMe1.style.transform = "translateX(".concat(myRange1.value, "%)");

myRange1.oninput = function () {
  slideMe1.style.transform = "translateX(-".concat(this.value, "%)");

  if (slideMe1.classList.contains("transitionSlider")) {
    slideMe1.classList.remove("transitionSlider");
  }
}; // ** Adding Functionality To The Slider Buttons **


var butuns = document.querySelector(".butuns");
var myCalc = 0;
butuns.addEventListener("click", function (e) {
  if (e.target.classList.contains("butunsLeft")) {
    myRange.value = "0";
    myCalc = 0;
    slideMe.style.transform = "translateX(".concat(myRange.value, "%)");
  }

  if (e.target.classList.contains("butunsRight") && window.innerWidth > 650) {
    myRange.value = "50";
    slideMe.style.transform = "translateX(-".concat(myRange.value, "%)");
  }

  if (e.target.classList.contains("butunsRight") && window.innerWidth <= 650 && myCalc < 200) {
    myRange.value += "100";
    myCalc += 100;
    slideMe.style.transform = "translateX(-".concat(myRange.value, "%)");
  }

  slideMe.classList.add("transitionSlider");
});
var butuns1 = document.querySelector(".butuns1");
butuns1.addEventListener("click", function (e) {
  if (e.target.classList.contains("butunsLeft1")) {
    myRange1.value = "0";
    slideMe1.style.transform = "translateX(".concat(myRange1.value, "%)");
  }

  if (e.target.classList.contains("butunsRight1")) {
    myRange1.value = "50";
    slideMe1.style.transform = "translateX(-".concat(myRange1.value, "%)");
  }

  slideMe1.classList.add("transitionSlider");
}); // ** Changing The Color From The Pallet On the Main Menu**

var mainCol = document.querySelector(".mainCol");
var boja = "tomatoColor";
var bojca = "tomatoColor";
mainCol.addEventListener("click", function (e) {
  for (var index = 0; index < mainCol.children.length; index++) {
    var element = mainCol.children[index];
    element.childNodes[0].classList.add("noShow");
  }

  if (e.target.classList.contains("size")) {
    bojca = e.target.classList[0];
    boja = "".concat(bojca, "Color");
    button.forEach(function (element) {
      element.style.border = "3px solid ".concat(bojca);
      element.addEventListener("mouseover", function () {
        element.style.backgroundColor = bojca;
      });
      element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "transparent";
      });
    });
    underline.forEach(function (element) {
      element.style.textDecoration = "underline ".concat(bojca);
    });
    links.forEach(function (element) {
      if (element.classList.contains("hover1")) {
        element.classList.remove("hover1");
      }

      element.addEventListener("mouseover", function () {
        element.style.backgroundColor = bojca;
      });
      element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "rgb(225, 225, 230)";
      });
    });
    stat.forEach(function (element) {
      element.style.border = "".concat(bojca, " 1px solid");
    });
    animate.forEach(function (element) {
      element.style.backgroundColor = bojca;
    });
    circle.forEach(function (element) {
      element.style.border = "".concat(bojca, " 2px solid");
    });
  }

  e.target.childNodes[0].classList.remove("noShow");
  var active = document.querySelector(".active");
  var classes = active.classList[3];
  active.classList.replace(classes, boja);
}); // ** Adding Some Classes And Animations On Window Load **

window.onload = function () {
  if (window.innerWidth > 650) {
    myRange.setAttribute("max", "50");
  }

  if (window.innerWidth <= 650) {
    myRange.setAttribute("max", "200");
  }

  var bio = document.querySelector(".bio");
  setTimeout(function () {
    bio.classList.add("animate__animated", "animate__backInDown");
  }, 1000);
  setTimeout(function () {
    bio.classList.remove("animate__animated", "animate__backInDown");
  }, 2000);
  main.style.animationName = "anime4";
  setTimeout(function () {
    document.querySelector(".gif").classList.add("noShow");
  }, 20);
  setTimeout(function () {
    document.querySelector(".all").classList.remove("noShow");
  }, 20);
  document.querySelectorAll(".rotateBtn")[0].classList.add("active");
  document.querySelectorAll(".rotateBtn")[0].classList.add(boja);
  rotateBtn.forEach(function (element) {
    element.addEventListener("click", function () {
      var active = document.querySelectorAll(".active");
      active[0].className = active[0].className.replace(" active", " pasiv");
      active[0].className = active[0].className.replace(boja, "");
      element.classList.add("active");
      element.classList.add(boja);
      element.classList.remove("pasiv");
    });
  });
}; // ** Changing The Color From The Pallet On The Elements **


rotateBtn.forEach(function (element) {
  element.addEventListener("click", function () {
    window.scrollTo(0, 0);
    scrollUp.scrollTo(0, 0);
    rotate.forEach(function (element1) {
      if (element1.classList.contains("onScreen")) {
        element1.style.animationName = "anime11";
        element1.classList.remove("onScreen");
      }

      if (element.id === element1.classList[0]) {
        element1.classList.add("onScreen");
        element1.style.animationName = "anime4";
      }
    });

    if (element.id === "main") {
      var bio = document.querySelector(".bio");
      setTimeout(function () {
        bio.classList.add("animate__animated", "animate__backInDown");
      }, 500);
      setTimeout(function () {
        bio.classList.remove("animate__animated", "animate__backInDown");
      }, 1500);
    }

    if (element.id === "mainResume") {
      // Animate Statistics Bars on Call
      var animStatistics = document.querySelectorAll(".animate");
      animStatistics.forEach(function (element) {
        element.style.animationName = "fillSpace";
        setTimeout(function () {
          element.style.animationName = "";
          element.style.transform = "translateX(0%)";
        }, 3000);
      }); //Animate Page Elements On Call

      var edu = document.querySelector(".edu");
      var exp = document.querySelector(".exp");
      setTimeout(function () {
        edu.classList.add("animate__animated", "animate__backInDown");
      }, 500);
      setTimeout(function () {
        edu.classList.remove("animate__animated", "animate__backInDown");
      }, 1500);
      setTimeout(function () {
        exp.classList.add("animate__animated", "animate__backInDown");
      }, 1000);
      setTimeout(function () {
        exp.classList.remove("animate__animated", "animate__backInDown");
      }, 2000); // Animate The Percentage Output Count

      setTimeout(function () {
        countMe.forEach(function (element) {
          element.textContent = 0;
          setInterval(function () {
            if (Number(element.textContent) === Number(element.title)) {
              clearInterval;
            } else {
              element.textContent++;
            }
          }, 30);
        });
      }, 1000);
    }

    if (element.id === "contact") {
      googleMap.classList.remove("noShow");
    } else {
      setTimeout(function () {
        googleMap.classList.add("noShow");
      }, 1000);
    }
  });
}); // ** Responsive Menu For Small Screen **

var sidebar = document.querySelector(".sidebar");
var smMenu = document.querySelector(".leftNav");
smMenu.addEventListener("click", function (e) {
  e.preventDefault;

  if (sidebar.style.transform === "translateX(-120%)") {
    sidebar.style.transform = "translateX(0%)";
  } else {
    sidebar.style.transform = "translateX(-120%)";
  }
});

window.onresize = function () {
  var myRange = document.getElementById("myRange");

  if (window.innerWidth > 1150) {
    sidebar.style.transform = "translateX(0%)";
  }

  if (window.innerWidth > 650) {
    myRange.setAttribute("max", "50");
    slideMe.style.transform = "translateX(0%)";
  }

  if (window.innerWidth <= 650) {
    myRange.setAttribute("max", "200");
  }
};

var mainMenue = document.querySelector(".ul1");
mainMenue.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && window.innerWidth <= 1150) {
    sidebar.style.transform = "translateX(-120%)";
  }
});
