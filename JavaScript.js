let move = document.querySelector(".move");
let moveButton = document.querySelector(".palet>p>button");
let palet = document.querySelector(".palet");
moveButton.addEventListener("click", () => {
  move.classList.toggle("hideMove");
});

let filters = document.querySelectorAll(".filters>div>li");
filters.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.innerText);
    /*let actived = document.querySelectorAll(".actived");
    actived[0].className = actived[0].className.replace(" actived", " pasiv");
    actived[0].className = actived[0].className.replace(bojca, "");
    element.classList.add("actived");
    element.classList.add(bojca);
    element.classList.remove("pasiv");*/
    let filterMe = document.querySelectorAll(".space");
    filterMe.forEach((element1) => {
      console.log(element1);
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

let contactMe = document.querySelectorAll(".inputs>div>input");
contactMe.forEach((element) => {
  element.addEventListener("focusin", () => {
    element.style.zIndex = "-2";
  });
});

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let focus1 = document.querySelector(".focus1");
let focus2 = document.querySelector(".focus2");
let focus3 = document.querySelector(".focus3");
let focus4 = document.querySelector(".focus4");
input1.addEventListener("focusin", () => {
  focus1.classList.add("inputsAnimateIn");
  focus1.classList.remove("inputsAnimateOut");
});
input1.addEventListener("focusout", () => {
  focus1.classList.remove("inputsAnimateIn");
  focus1.classList.add("inputsAnimateOut");
  setTimeout(() => {
    input1.style.zIndex = "1";
  }, 500);
});
input2.addEventListener("focus", () => {
  focus2.classList.remove("inputsAnimateOut");
  focus2.classList.add("inputsAnimateIn");
});
input2.addEventListener("focusout", () => {
  focus2.classList.remove("inputsAnimateIn");
  focus2.classList.add("inputsAnimateOut");
  setTimeout(() => {
    input2.style.zIndex = "1";
  }, 500);
});
input3.addEventListener("focus", () => {
  focus3.classList.remove("inputsAnimateOut");
  focus3.classList.add("inputsAnimateIn");
});
input3.addEventListener("focusout", () => {
  focus3.classList.remove("inputsAnimateIn");
  focus3.classList.add("inputsAnimateOut");
  setTimeout(() => {
    input3.style.zIndex = "1";
  }, 500);
});
input4.addEventListener("focus", () => {
  focus4.classList.remove("inputsAnimateOut");
  focus4.classList.add("inputsAnimateIn");
  input4.style.zIndex = "-2";
});
input4.addEventListener("focusout", () => {
  focus4.classList.remove("inputsAnimateIn");
  focus4.classList.add("inputsAnimateOut");
  setTimeout(() => {
    input4.style.zIndex = "1";
  }, 500);
});

let myRange = document.getElementById("myRange");
let slideMe = document.querySelector(".slider");
slideMe.style.transform = `translateX(${myRange.value}%)`;
myRange.oninput = function () {
  slideMe.style.transform = `translateX(-${this.value}%)`;
  console.log(this.value);
  if (slideMe.classList.contains("transitionSlider")) {
    slideMe.classList.remove("transitionSlider");
  }
};
let myRange1 = document.getElementById("myRange1");
let slideMe1 = document.querySelector(".slider3");
slideMe1.style.transform = `translateX(${myRange1.value}%)`;
myRange1.oninput = function () {
  slideMe1.style.transform = `translateX(-${this.value}%)`;
  console.log(this.value);
  if (slideMe1.classList.contains("transitionSlider")) {
    slideMe1.classList.remove("transitionSlider");
  }
};
let butuns = document.querySelector(".butuns");
butuns.addEventListener("click", (e) => {
  if (e.target.classList.contains("butunsLeft")) {
    myRange.value = "0";
    slideMe.style.transform = `translateX(${myRange.value}%)`;
    console.log(e.target);
  }
  if (e.target.classList.contains("butunsRight")) {
    myRange.value = "50";
    slideMe.style.transform = `translateX(-${myRange.value}%)`;
    console.log(e.target);
  }
  slideMe.classList.add("transitionSlider");
  console.log(myRange.value);
});
let butuns1 = document.querySelector(".butuns1");
butuns1.addEventListener("click", (e) => {
  if (e.target.classList.contains("butunsLeft1")) {
    myRange1.value = "0";
    slideMe1.style.transform = `translateX(${myRange1.value}%)`;
    console.log(e.target);
  }
  if (e.target.classList.contains("butunsRight1")) {
    myRange1.value = "50";
    slideMe1.style.transform = `translateX(-${myRange1.value}%)`;
    console.log(e.target);
  }
  slideMe1.classList.add("transitionSlider");
  console.log(myRange1.value);
});

let mainCol = document.querySelector(".mainCol");
let boja = "tomatoColor";
let bojca = "tomatoColor";

mainCol.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.classList.contains("blue")) {
    boja = "blueColor";
    bojca = "blueColor";
  }
  if (e.target.classList.contains("tomato")) {
    boja = "tomatoColor";
    bojca = "tomatoColor";
  }
  if (e.target.classList.contains("orange")) {
    boja = "orangeColor";
    bojca = "orangeColor";
  }
  if (e.target.classList.contains("green")) {
    boja = "greenColor";
    bojca = "greenColor";
  }
  if (e.target.classList.contains("violet")) {
    boja = "violetColor";
    bojca = "violetColor";
  }
  if (e.target.classList.contains("yelow")) {
    boja = "yellowColor";
    bojca = "yellowColor";
  }
  console.log(boja);
  let active = document.querySelector(".active");
  let classes = active.classList[3];
  active.classList.replace(classes, boja);
  console.log(active);
});
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
  /* setTimeout(() => {
    document.querySelector(".all").classList.remove("blackWhite");
  }, 2000);*/
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

let blue = document.querySelector(".blue");
let tomato = document.querySelector(".tomato");
let orange = document.querySelector(".orange");
let green = document.querySelector(".green");
let violet = document.querySelector(".violet");
let yelow = document.querySelector(".yelow");
let active = document.querySelector(".active");
let button = document.querySelectorAll(".button");
let underline = document.querySelectorAll(".underline");
let links = document.querySelectorAll(".links");
let stat = document.querySelectorAll(".stat");
let animate = document.querySelectorAll(".animate");
let circle = document.querySelectorAll(".cirkle");

blue.addEventListener("click", () => {
  button.forEach((element) => {
    element.style.border = "3px solid blue";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "blue";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "transparent";
    });
  });
  underline.forEach((element) => {
    element.style.textDecoration = "underline blue";
  });
  links.forEach((element) => {
    if (element.classList.contains("hover1")) {
      element.classList.remove("hover1");
    }
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "blue";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "rgb(225, 225, 230)";
    });
  });
  stat.forEach((element) => {
    element.style.border = "blue 1px solid";
  });
  animate.forEach((element) => {
    element.style.backgroundColor = "blue";
  });
  circle.forEach((element) => {
    element.style.border = "blue 2px solid";
  });
  return active;
});
tomato.addEventListener("click", () => {
  button.forEach((element) => {
    element.style.border = "3px solid tomato";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "tomato";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "transparent";
    });
  });
  underline.forEach((element) => {
    element.style.textDecoration = "underline tomato";
  });
  links.forEach((element) => {
    if (element.classList.contains("hover1")) {
      element.classList.remove("hover1");
    }
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "tomato";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "rgb(225, 225, 230)";
    });
  });
  stat.forEach((element) => {
    element.style.border = "tomato 1px solid";
  });
  animate.forEach((element) => {
    element.style.backgroundColor = "tomato";
  });
  circle.forEach((element) => {
    element.style.border = "tomato 2px solid";
  });
  return active;
});
orange.addEventListener("click", () => {
  button.forEach((element) => {
    element.style.border = "3px solid orange";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "orange";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "transparent";
    });
  });
  underline.forEach((element) => {
    element.style.textDecoration = "underline orange";
  });
  links.forEach((element) => {
    if (element.classList.contains("hover1")) {
      element.classList.remove("hover1");
    }
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "orange";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "rgb(225, 225, 230)";
    });
  });
  stat.forEach((element) => {
    element.style.border = "orange 1px solid";
  });
  animate.forEach((element) => {
    element.style.backgroundColor = "orange";
  });
  circle.forEach((element) => {
    element.style.border = "orange 2px solid";
  });
  return active;
});
green.addEventListener("click", () => {
  button.forEach((element) => {
    element.style.border = "3px solid green";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "green";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "transparent";
    });
  });
  underline.forEach((element) => {
    element.style.textDecoration = "underline green";
  });
  links.forEach((element) => {
    if (element.classList.contains("hover1")) {
      element.classList.remove("hover1");
    }
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "green";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "rgb(225, 225, 230)";
    });
  });
  stat.forEach((element) => {
    element.style.border = "green 1px solid";
  });
  animate.forEach((element) => {
    element.style.backgroundColor = "green";
  });
  circle.forEach((element) => {
    element.style.border = "green 2px solid";
  });
  return active;
});
violet.addEventListener("click", () => {
  button.forEach((element) => {
    element.style.border = "3px solid violet";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "violet";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "transparent";
    });
  });
  underline.forEach((element) => {
    element.style.textDecoration = "underline violet";
  });
  links.forEach((element) => {
    if (element.classList.contains("hover1")) {
      element.classList.remove("hover1");
    }
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "violet";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "rgb(225, 225, 230)";
    });
  });
  stat.forEach((element) => {
    element.style.border = "violet 1px solid";
  });
  animate.forEach((element) => {
    element.style.backgroundColor = "violet";
  });
  circle.forEach((element) => {
    element.style.border = "violet 2px solid";
  });
  return active;
});
yelow.addEventListener("click", () => {
  button.forEach((element) => {
    element.style.border = "3px solid goldenrod";
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "goldenrod";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "transparent";
    });
  });
  underline.forEach((element) => {
    element.style.textDecoration = "underline goldenrod";
  });
  links.forEach((element) => {
    if (element.classList.contains("hover1")) {
      element.classList.remove("hover1");
    }
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "goldenrod";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "rgb(225, 225, 230)";
    });
  });
  stat.forEach((element) => {
    element.style.border = "goldenrod 1px solid";
  });
  animate.forEach((element) => {
    element.style.backgroundColor = "goldenrod";
  });
  circle.forEach((element) => {
    element.style.border = "goldenrod 2px solid";
  });
  return active;
});

//Animiranje na stranite

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let rotate = document.querySelectorAll(".rotate");
let rotateBtn = document.querySelectorAll(".rotateBtn");
const main = document.querySelector(".main");
const mainResume = document.querySelector(".mainResume");
const portfolio = document.querySelector(".portfolio");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact");

btn1.addEventListener("click", () => {
  let bio = document.querySelector(".bio");
  setTimeout(() => {
    bio.classList.add("animate__animated", "animate__backInDown");
  }, 500);
  setTimeout(() => {
    bio.classList.remove("animate__animated", "animate__backInDown");
  }, 1500);

  rotate.forEach((element) => {
    if (element.classList.contains("onScreen")) {
      element.style.animationName = "anime11";
      //element.style.display = "none";
      element.classList.remove("onScreen");
    }
  });
  main.classList.add("onScreen");
  //main.style.display = "block";
  main.style.animationName = "anime4";
});

btn2.addEventListener("click", () => {
  let edu = document.querySelector(".edu");
  let exp = document.querySelector(".exp");
  let animStatistics = document.querySelectorAll(".animate");
  animStatistics.forEach((element) => {
    element.style.animationName = "fillSpace";
    setTimeout(() => {
      element.style.animationName = "";
      element.style.transform = "translateX(0%)";
    }, 3000);
  });
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
  let output = 0;
  const timer = setInterval(() => {
    let counting = document.querySelector(".count");
    let score = counting.title;
    let scoreNumber = Number(score);
    counting.textContent = `${output}%`;
    if (output === scoreNumber) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 25);
  let output2 = 0;
  const timer2 = setInterval(() => {
    let counting2 = document.querySelector(".count2");
    let score2 = counting2.title;
    let scoreNumber2 = Number(score2);
    counting2.textContent = `${output2}%`;
    if (output2 === scoreNumber2) {
      clearInterval(timer2);
    } else {
      output2++;
    }
  }, 25);
  let output3 = 0;
  const timer3 = setInterval(() => {
    let counting3 = document.querySelector(".count3");
    let score3 = counting3.title;
    let scoreNumber3 = Number(score3);
    counting3.textContent = `${output3}%`;
    if (output3 === scoreNumber3) {
      clearInterval(timer3);
    } else {
      output3++;
    }
  }, 25);
  let output4 = 0;
  const timer4 = setInterval(() => {
    let counting4 = document.querySelector(".count4");
    let score4 = counting4.title;
    let scoreNumber4 = Number(score4);
    counting4.textContent = `${output4}%`;
    if (output4 === scoreNumber4) {
      clearInterval(timer4);
    } else {
      output4++;
    }
  }, 25);
  let output5 = 0;
  const timer5 = setInterval(() => {
    let counting5 = document.querySelector(".count5");
    let score5 = counting5.title;
    let scoreNumber5 = Number(score5);
    counting5.textContent = `${output5}%`;
    if (output5 === scoreNumber5) {
      clearInterval(timer5);
    } else {
      output5++;
    }
  }, 25);
  let output6 = 0;
  const timer6 = setInterval(() => {
    let counting6 = document.querySelector(".count6");
    let score6 = counting6.title;
    let scoreNumber6 = Number(score6);
    counting6.textContent = `${output6}%`;
    if (output6 === scoreNumber6) {
      clearInterval(timer6);
    } else {
      output6++;
    }
  }, 25);
  let output7 = 0;
  const timer7 = setInterval(() => {
    let counting7 = document.querySelector(".count7");
    let score7 = counting7.title;
    let scoreNumber7 = Number(score7);
    counting7.textContent = `${output7}%`;
    if (output7 === scoreNumber7) {
      clearInterval(timer7);
    } else {
      output7++;
    }
  }, 25);
  let output8 = 0;
  const timer8 = setInterval(() => {
    let counting8 = document.querySelector(".count8");
    let score8 = counting8.title;
    let scoreNumber8 = Number(score8);
    counting8.textContent = `${output8}%`;
    if (output8 === scoreNumber8) {
      clearInterval(timer8);
    } else {
      output8++;
    }
  }, 25);
  let output9 = 0;
  const timer9 = setInterval(() => {
    let counting9 = document.querySelector(".count9");
    let score9 = counting9.title;
    let scoreNumber9 = Number(score9);
    counting9.textContent = `${output9}%`;
    if (output9 === scoreNumber9) {
      clearInterval(timer9);
    } else {
      output9++;
    }
  }, 25);
  let output10 = 0;
  const timer10 = setInterval(() => {
    let counting10 = document.querySelector(".count10");
    let score10 = counting10.title;
    let scoreNumber10 = Number(score10);
    counting10.textContent = `${output10}%`;
    if (output10 === scoreNumber10) {
      clearInterval(timer10);
    } else {
      output10++;
    }
  }, 25);
  rotate.forEach((element) => {
    if (element.classList.contains("onScreen")) {
      element.style.animationName = "anime11";
      element.classList.remove("onScreen");
      // element.style.display = "none";
    }
  });
  mainResume.classList.add("onScreen");
  //mainResume.style.display = "block";
  mainResume.style.animationName = "anime4";
});

btn3.addEventListener("click", () => {
  rotate.forEach((element) => {
    if (element.classList.contains("onScreen")) {
      element.style.animationName = "anime11";
      element.classList.remove("onScreen");
      //element.style.display = "none";
    }
  });
  portfolio.classList.add("onScreen");
  //portfolio.style.display = "block";
  portfolio.style.animationName = "anime4";
});

btn4.addEventListener("click", () => {
  rotate.forEach((element) => {
    if (element.classList.contains("onScreen")) {
      element.style.animationName = "anime11";
      element.classList.remove("onScreen");
      //element.style.display = "none";
    }
  });
  blog.classList.add("onScreen");
  //blog.style.display = "block";
  blog.style.animationName = "anime4";
});

btn5.addEventListener("click", () => {
  rotate.forEach((element) => {
    if (element.classList.contains("onScreen")) {
      element.style.animationName = "anime11";
      element.classList.remove("onScreen");
      // element.style.display = "none";
    }
  });
  contact.classList.add("onScreen");
  //contact.style.display = "block";
  contact.style.animationName = "anime4";
});

/*const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd);
  });*/
