// save color to local storage
let mainColor = localStorage.getItem("color_option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-text-color", mainColor);

  // select all element that have active class
  document.querySelectorAll(".color_list li").forEach((element) => {
    // remove active class from all li
    element.classList.remove("active");

    // add active class on element with data color === local storge
    if (element.dataset.color === mainColor) {
      // add active class on this element
      element.classList.add("active");
    }
  });
}

// save background image inside local storage
let backgroundOption = true; // random background option
let backgroundInterval; // to control the interval

let backgroundLocal = localStorage.getItem("background_option"); // check if there is local storage random background
if (backgroundLocal !== null) {
  if (backgroundLocal === "true") {
    backgroundOption = true;
    // randomizeImgs();
  } else {
    backgroundOption = false;
  }

  // remove active class from all elements.
  document.querySelectorAll(".button span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocal === "true") {
    document.querySelector(".button .yes").classList.add("active");
  } else {
    document.querySelector(".button .no").classList.add("active");
  }
}

// Start sitting box
document.querySelector(".icon-setting .fa-gear").onclick = function () {
  // Toggle-Class Fa-spin For Rotation on-Self
  this.classList.toggle("fa-spin");
  //add class open to .setting box when click on icon
  document.querySelector(".setting-box").classList.toggle("open");
};

/*start switching color */
// put list item inside array
const colorList = document.querySelectorAll(".option-box ul li");
// loop on all list item
colorList.forEach((li) => {
  // click on every list item
  li.addEventListener("click", (e) => {
    // set color on root
    document.documentElement.style.setProperty(
      "--main-text-color",
      e.target.dataset.color
    );

    //set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // remove active class from all elements
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class
    e.target.classList.add("active");
  });
});
/*End switching color */

/*start switch Background option */
// put list item inside array
const switchBackEl = document.querySelectorAll(".button span");

// loop on all span
switchBackEl.forEach((span) => {
  // click on every span
  span.addEventListener("click", (e) => {
    // remove active class from all span elements
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });

    // add active class
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      localStorage.setItem("background_option", true);

      randomizeImgs();

      document
        .querySelector(".landing .content h1 span")
        .classList.remove("fill");
    } else {
      backgroundOption = false;

      localStorage.setItem("background_option", false);

      clearInterval(backgroundInterval);

      document.querySelector(".landing .content h1 span").classList.add("fill");
    }
  });
});
/*End switching color */

// Start change background
// 1-select landing page
let backgroundImge = document.querySelector(".landing");

// 2-make array to put my pics in
let imageArr = [
  "01.png",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.png",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];

// // 3-change background image manully
// background.style.backgroundImage = 'url("image/04.jpg")';

// // 4-create random number to move inside arry
// let randomNum = Math.floor(Math.random() * imageArr.length)

// 5-set time to change background automaticlly

function randomizeImgs() {
  //to control background
  if (backgroundOption === true) {
    // to make interval start or work
    backgroundInterval = setInterval(() => {
      // 6-create random number to move inside arry
      let randomNumIndex = Math.floor(Math.random() * imageArr.length);
      // 7-change background image automaticly
      backgroundImge.style.backgroundImage =
        'url("image/' + imageArr[randomNumIndex] + '")';
    }, 10000);
  }
}
randomizeImgs();
// End change background

// animate our skills section
let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {
  let skillTopPostion = ourSkills.offsetTop;
  let skillHeight = ourSkills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScroll = this.pageYOffset;

  if (windowScroll > skillTopPostion + skillHeight - windowHeight) {
    let skillsSpan = document.querySelectorAll(
      ".our-skills .skill-box .skill-progress span"
    );
    skillsSpan.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

// start scroll to top button
let span = document.querySelector(".up");

span.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 600) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
