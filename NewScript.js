//**Toggle Color Pallet**

let move = document.querySelector(".move");
let moveButton = document.querySelector(".palet>p>button");
let palet = document.querySelector(".palet");
moveButton.addEventListener("click", () => {
  move.classList.toggle("hideMove");
});

// **Portfolio Filter**

let filters = document.querySelectorAll(".filters>div>li");
filters.forEach((element) => {
  element.addEventListener("click", () => {
    let filterMe = document.querySelectorAll(".space");
    filterMe.forEach((element1) => {
      if (element1.classList.contains(element.innerText)) {
        setTimeout(() => {
          element1.classList.remove("noShow");
        }, 500);
        element1.classList.add("scaleMeIn");
        element1.classList.remove("scaleMeOut");
      } else {
        setTimeout(() => {
          element1.classList.add("noShow");
        }, 500);
        element1.classList.add("scaleMeOut");
        element1.classList.remove("scaleMein");
      }
    });
  });
});

//** Contact form animate the inputs on focus **

focusEffect = document.querySelectorAll(".focusEffect");
focusEffect.forEach((element) => {
  element.addEventListener("focus", () => {
    element.nextElementSibling.classList.remove("inputsAnimateOut");
    element.nextElementSibling.classList.add("inputsAnimateIn");
    element.style.zIndex = "-2";
  });
  element.addEventListener("focusout", () => {
    element.nextElementSibling.classList.remove("inputsAnimateIn");
    element.nextElementSibling.classList.add("inputsAnimateOut");
    setTimeout(() => {
      element.style.zIndex = "1";
    }, 500);
  });
});

// **Making Img Slider Using Range Input **

let myRange = document.getElementById("myRange");
let slideMe = document.querySelector(".slider");
slideMe.style.transform = `translateX(${myRange.value}%)`;
myRange.oninput = function () {
  slideMe.style.transform = `translateX(-${this.value}%)`;
  if (slideMe.classList.contains("transitionSlider")) {
    slideMe.classList.remove("transitionSlider");
  }
};
let myRange1 = document.getElementById("myRange1");
let slideMe1 = document.querySelector(".slider3");
slideMe1.style.transform = `translateX(${myRange1.value}%)`;
myRange1.oninput = function () {
  slideMe1.style.transform = `translateX(-${this.value}%)`;
  if (slideMe1.classList.contains("transitionSlider")) {
    slideMe1.classList.remove("transitionSlider");
  }
};

// ** Adding Functionality To The Slider Buttons **

let butuns = document.querySelector(".butuns");
let myCalc = 0;
butuns.addEventListener("click", (e) => {
  if (e.target.classList.contains("butunsLeft")) {
    myRange.value = "0";
    myCalc = 0;
    slideMe.style.transform = `translateX(${myRange.value}%)`;
  }
  if (e.target.classList.contains("butunsRight") && window.innerWidth > 650) {
    myRange.value = "50";
    myRange.setAttribute("max", "50");
    slideMe.style.transform = `translateX(-${myRange.value}%)`;
  }
  if (
    e.target.classList.contains("butunsRight") &&
    window.innerWidth <= 650 &&
    myCalc < 200
  ) {
    myRange.value += "100";
    myRange.setAttribute("max", "200");
    myCalc += 100;
    slideMe.style.transform = `translateX(-${myRange.value}%)`;
  }
  slideMe.classList.add("transitionSlider");
});
let butuns1 = document.querySelector(".butuns1");
butuns1.addEventListener("click", (e) => {
  if (e.target.classList.contains("butunsLeft1")) {
    myRange1.value = "0";
    slideMe1.style.transform = `translateX(${myRange1.value}%)`;
  }
  if (e.target.classList.contains("butunsRight1")) {
    myRange1.value = "50";
    slideMe1.style.transform = `translateX(-${myRange1.value}%)`;
  }
  slideMe1.classList.add("transitionSlider");
});

// ** Changing The Color From The Pallet On the Main Menu**

let mainCol = document.querySelector(".mainCol");
let boja = "tomatoColor";
let bojca = "tomatoColor";
mainCol.addEventListener("click", (e) => {
  for (let index = 0; index < mainCol.children.length; index++) {
    const element = mainCol.children[index];
    element.childNodes[0].classList.add("noShow");
  }
  if (e.target.classList.contains("size")) {
    bojca = e.target.classList[0];
    boja = `${bojca}Color`;

    button.forEach((element) => {
      element.style.border = `3px solid ${bojca}`;
      element.addEventListener("mouseover", () => {
        element.style.backgroundColor = bojca;
      });
      element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "transparent";
      });
    });
    underline.forEach((element) => {
      element.style.textDecoration = `underline ${bojca}`;
    });
    links.forEach((element) => {
      if (element.classList.contains("hover1")) {
        element.classList.remove("hover1");
      }
      element.addEventListener("mouseover", () => {
        element.style.backgroundColor = bojca;
      });
      element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "rgb(225, 225, 230)";
      });
    });
    stat.forEach((element) => {
      element.style.border = `${bojca} 1px solid`;
    });
    animate.forEach((element) => {
      element.style.backgroundColor = bojca;
    });
    circle.forEach((element) => {
      element.style.border = `${bojca} 2px solid`;
    });
  }
  e.target.childNodes[0].classList.remove("noShow");
  let active = document.querySelector(".active");
  let classes = active.classList[3];
  active.classList.replace(classes, boja);
});

// ** Adding Some Classes And Animations On Window Load **

window.onload = () => {
  let bio = document.querySelector(".bio");
  setTimeout(() => {
    bio.classList.add("animate__animated", "animate__backInDown");
  }, 1000);
  setTimeout(() => {
    bio.classList.remove("animate__animated", "animate__backInDown");
  }, 2000);
  main.style.animationName = "anime4";
  setTimeout(() => {
    document.querySelector(".gif").classList.add("noShow");
  }, 20);
  setTimeout(() => {
    document.querySelector(".all").classList.remove("noShow");
  }, 20);
  document.querySelectorAll(".rotateBtn")[0].classList.add("active");
  document.querySelectorAll(".rotateBtn")[0].classList.add(boja);
  rotateBtn.forEach((element) => {
    element.addEventListener("click", () => {
      let active = document.querySelectorAll(".active");
      active[0].className = active[0].className.replace(" active", " pasiv");
      active[0].className = active[0].className.replace(boja, "");
      element.classList.add("active");
      element.classList.add(boja);
      element.classList.remove("pasiv");
    });
  });
};

// ** Changing The Color From The Pallet On The Elements **

let active = document.querySelector(".active");
let button = document.querySelectorAll(".button");
let underline = document.querySelectorAll(".underline");
let links = document.querySelectorAll(".links");
let stat = document.querySelectorAll(".stat");
let animate = document.querySelectorAll(".animate");
let circle = document.querySelectorAll(".cirkle");
let rotate = document.querySelectorAll(".rotate");
let rotateBtn = document.querySelectorAll(".rotateBtn");
const main = document.querySelector(".main");
const mainResume = document.querySelector(".mainResume");
const portfolio = document.querySelector(".portfolio");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact");
const scrollUp = document.querySelector(".window");
let googleMap = document.querySelector(".map");
let countMe = document.querySelectorAll(".count");

rotateBtn.forEach((element) => {
  element.addEventListener("click", () => {
    scrollUp.scrollTo(0, 0);
    rotate.forEach((element1) => {
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
      let bio = document.querySelector(".bio");
      setTimeout(() => {
        bio.classList.add("animate__animated", "animate__backInDown");
      }, 500);
      setTimeout(() => {
        bio.classList.remove("animate__animated", "animate__backInDown");
      }, 1500);
    }
    if (element.id === "mainResume") {
      // Animate Statistics Bars on Call
      let animStatistics = document.querySelectorAll(".animate");
      animStatistics.forEach((element) => {
        element.style.animationName = "fillSpace";
        setTimeout(() => {
          element.style.animationName = "";
          element.style.transform = "translateX(0%)";
        }, 3000);
      });
      //Animate Page Elements On Call
      let edu = document.querySelector(".edu");
      let exp = document.querySelector(".exp");
      setTimeout(() => {
        edu.classList.add("animate__animated", "animate__backInDown");
      }, 500);
      setTimeout(() => {
        edu.classList.remove("animate__animated", "animate__backInDown");
      }, 1500);
      setTimeout(() => {
        exp.classList.add("animate__animated", "animate__backInDown");
      }, 1000);
      setTimeout(() => {
        exp.classList.remove("animate__animated", "animate__backInDown");
      }, 2000);

      // Animate The Percentage Output Count

      setTimeout(() => {
        countMe.forEach((element) => {
          element.textContent = 0;
          setInterval(() => {
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
      setTimeout(() => {
        googleMap.classList.add("noShow");
      }, 1000);
    }
  });
});

// ** Responsive Menu For Small Screen **

let sidebar = document.querySelector(".sidebar");
let smMenu = document.querySelector(".leftNav");
smMenu.addEventListener("click", (e) => {
  e.preventDefault;
  if (sidebar.style.transform === "translateX(-120%)") {
    sidebar.style.transform = "translateX(0%)";
  } else {
    sidebar.style.transform = "translateX(-120%)";
  }
});

window.onresize = () => {
  if (window.innerWidth > 1150) {
    sidebar.style.transform = "translateX(0%)";
  }
  if (window.innerWidth > 650) {
    slideMe.style.transform = "translateX(0%)";
  }
};
let mainMenue = document.querySelector(".ul1");
mainMenue.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && window.innerWidth <= 1150) {
    sidebar.style.transform = "translateX(-120%)";
  }
});
