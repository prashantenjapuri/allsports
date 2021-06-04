const tabs = document.querySelectorAll(".blogs__tab");
const tabsContainer = document.querySelector(".blogs__tab-container");
const tabsContent = document.querySelectorAll(".blogs__content");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");

// for scrolling
// buttons & links
const btnScrollTo = document.querySelector(".btn--scroll-to");
const linkHome = document.querySelector(".link-home");
const linkNews = document.querySelector(".link-news");
const linkBlog = document.querySelector(".link-blog");
const linkCont = document.querySelector(".link-cont");
const linkGallery = document.querySelector(".link-gallery");

// sections or divs
const divNews = document.querySelector("#div-news");
const divBlog = document.querySelector("#div-blog");
const divCont = document.querySelector("#div-cont");
const divHome = document.querySelector("#div-home");
const divGallery = document.querySelector("#div-home");

///////////////////////////////////////

///////////////////////////////////////

///////////////////////////////////////
// Form Validation

//$("#register-button").on("click", function () {});
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
    },
    // Specify validation error messages
    // messages: {
    //   firstname: "Please enter your firstname",
    //   lastname: "Please enter your lastname",
    //   email: "Please enter a valid email address",
    // },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      bootbox.alert("Registered successfully!");
      $("#modalLoginForm").modal("hide");
      $(".nav-register-btn").hide();
    },
  });
});

///////////////////////////////////////
// contact us form validation
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contact-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
      subject: "required",
      message: "required",
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      subject: "Please enter your subject",
      message: "Please enter your subject",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      bootbox.alert("Form submitted successfully!");
      // $("#modalLoginForm").modal("hide");
      // $(".registerbtn").hide();
    },
  });
});

///////////////////////////////////////
// scrolling
// $(function () {
//   $("a[href*=\\#]:not([href=\\#])").on("click", function () {
//     if ($(this).hasClass("sports-tab")) {
//       return;
//     }
//     if ($(window).width() < 700) {
//       $(".navbar-toggler").click();
//     }
//     var target = $(this.hash);
//     target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
//     if (target.length) {
//       $("html,body").animate(
//         {
//           scrollTop: target.offset().top,
//         },
//         1000
//       );
//       return false;
//     }
//   });
// });

// page navigation smooth scrolling

document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//for scroll to home
const scrollToHome = function (e) {
  e.preventDefault();
  divHome.scrollIntoView({ behavior: "smooth" });
};

//for scroll to news by learnmore btn
const scrollToNews = function (e) {
  // e.preventDefault();
  divNews.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".links-news").addEventListener("click", scrollToNews);
document.querySelector(".navbar-brand").addEventListener("click", scrollToHome);

// if (document.documentElement.clientWidth < 700) {
//   document.querySelector(".navbar-toggler").click();
// }

// hamburgger menu disappear
if (document.documentElement.clientWidth < 700) {
  const navLinks = document.querySelector(".navbar-nav");
  const navTogglerBtn = document.querySelector(".navbar-toggler");

  navLinks.onclick = function () {
    // console.log("jhdyjh");
    navTogglerBtn.click();
    // console.log("gfjef");
  };
}

// news from api
/////////////////////////////////////////
// NEWS1

// const news1Title = document.querySelector(".news-section-header-1");
// const news1Content = document.querySelector(".newsContent-1");
// const news1Img = document.querySelector(".img-news-1");
// const news1Date = document.querySelector(".publishedDate-1");
// const news1Btn = document.querySelector(".news1-btn");

// /////////////////////////////////////////
// // NEWS2
// const news2Title = document.querySelector(".news-section-header-2");
// const news2Content = document.querySelector(".newsContent-2");
// const news2Img = document.querySelector(".img-news-2");
// const news2Date = document.querySelector(".publishedDate-2");
// const news2Btn = document.querySelector(".news2-btn");

// /////////////////////////////////////////
// // NEWS2

// const news3Title = document.querySelector(".news-section-header-3");
// const news3Content = document.querySelector(".newsContent-3");
// const news3Img = document.querySelector(".img-news-3");
// const news3Date = document.querySelector(".publishedDate-3");
// const news3Btn = document.querySelector(".news3-btn");

// const sport = "cricket";
// const apiKey = "91bdf0692ddc4dc1a73abdd79ed51ff2";
// const xhr = new XMLHttpRequest();
// const locale = "en-IN";

// xhr.open(
//   "GET",
//   `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=91bdf0692ddc4dc1a73abdd79ed51ff2`,
//   true
// );

// https: xhr.onload = function () {
//   if (this.status === 200) {
//     let json = JSON.parse(this.responseText);
//     console.log(json);

//     /////////////////////////////////////////
//     // NEWS1
//     news1Title.innerHTML = json.articles[0].title;
//     news1Content.innerHTML = json.articles[0].description;
//     news1Img.setAttribute("src", json.articles[0].urlToImage);
//     const datea = json.articles[0].publishedAt;
//     const date1 = new Date(datea);
//     news1Date.innerHTML = new Intl.DateTimeFormat(locale).format(date1);
//     news1Btn.setAttribute("href", json.articles[0].url);

//     /////////////////////////////////////////
//     // NEWS2
//     news2Title.innerHTML = json.articles[1].title;
//     news2Content.innerHTML = json.articles[1].description;
//     news2Img.setAttribute("src", json.articles[1].urlToImage);
//     const dateb = json.articles[1].publishedAt;
//     const date2 = new Date(dateb);
//     news2Date.innerHTML = new Intl.DateTimeFormat(locale).format(date2);
//     // news2Date.innerHTML = new Date(json.articles[1].publishedAt);
//     news2Btn.setAttribute("href", json.articles[1].url);

//     /////////////////////////////////////////
//     // NEWS2
//     news3Title.innerHTML = json.articles[2].title;
//     news3Content.innerHTML = json.articles[2].description;
//     news3Img.setAttribute("src", json.articles[2].urlToImage);
//     const datec = json.articles[2].publishedAt;
//     const date3 = new Date(datec);
//     news3Date.innerHTML = new Intl.DateTimeFormat(locale).format(date3);
//     // news3Date.innerHTML = new Date(json.articles[2].publishedAt);
//     news3Btn.setAttribute("href", json.articles[2].url);
//   } else {
//     console.log("error");
//   }
// };

// xhr.send();

////////////////////////////////////////////////////
// by codepen
//changing bg color of active navlink

// Get all sections that have an ID defined
// const sections = document.querySelectorAll("section[id]");
const sections = document.querySelectorAll(".forActiveNav");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    // console.log(sectionTop);
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight &&
      document.documentElement.clientWidth > 700
    ) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active-custom");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active-custom");
    }
  });
}
