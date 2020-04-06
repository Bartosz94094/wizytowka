//skill cards flipping
const SKILL_CARDS = [
  ...document.querySelectorAll("main>.skills>.skills-list>.skill"),
];

SKILL_CARDS.forEach((skillCard) => {
  skillCard.addEventListener("click", () => {
    skillCard.classList.toggle("flip");
  });
});

//dealing with scroll
const INTRODUCTION_HEIGHT = document.querySelector(".introduction")
  .offsetHeight;
const SKILLS_HEIGHT = document.querySelector(".skills").offsetHeight;
const ABOUT_HEIGHT = document.querySelector(".about").offsetHeight;
const PROJECTS_HEIGHT = document.querySelector(".projects").offsetHeight;
const CONTACT_HEIGHT = document.querySelector(".contact").offsetHeight;

const INTRODUCTION_STARTING_POINT_Y = 0;
const SKILLS_STARTING_POINT_Y = INTRODUCTION_HEIGHT;
const ABOUT_STARTING_POINT_Y = INTRODUCTION_HEIGHT + SKILLS_HEIGHT;
const PROJECTS_STARTING_POINT_Y =
  INTRODUCTION_HEIGHT + SKILLS_HEIGHT + ABOUT_HEIGHT;
const CONTACT_STARTING_POINT_Y =
  INTRODUCTION_HEIGHT + SKILLS_HEIGHT + ABOUT_HEIGHT + PROJECTS_HEIGHT;

//elements to animate in scroll
const NAV = document.querySelector("nav");
const NAV_INTRODUCTION_BTN = document.querySelector("nav .introduction-btn");
const NAV_SKILLS_BTN = document.querySelector("nav .skills-btn");
const NAV_ABOUTME_BTN = document.querySelector("nav .aboutme-btn");
const NAV_PROJECTS_BTN = document.querySelector("nav .projects-btn");
const NAV_CONTACT_BTN = document.querySelector("nav .contact-btn");

const SKILLS_HELLO_FIRST = document.querySelector(".welcome>.first-sentence");
const SKILLS_HELLO_SECOND = document.querySelector(".welcome>.second-sentence");
const SKILLS_HELLO_THIRD = document.querySelector(".welcome>.third-sentence");
const SKILLS_HELLO_FORTH = document.querySelector(".welcome>.forth-sentence");
const SKILLS_LIST = document.querySelector(".skills-list");
const SKILLS_MESSAGE = document.querySelector(".skills > .message");
const SKILLS_BANNER = document.querySelector(".skills-banner");

const ABOUT_ME_BANNER = document.querySelector(".about-banner-slash-text");
const ABOUT_ME_DESCRIPTION = document.querySelector(".profile>.description");
const ABOUT_ME_PHOTO = document.querySelector(".profile>img");

const PROJECTS_BANNER = document.querySelector(".projects-banner > h1");
const CONTACT_BANNER = document.querySelector(".contact-banner");

window.addEventListener("scroll", () => {
  const SCROLL_Y_VALUE = window.scrollY;

  setNavigationBar(SCROLL_Y_VALUE);
  setHelloAnimation(SCROLL_Y_VALUE);
  onAndOffAnimationsOnScroll(SCROLL_Y_VALUE);
});

function setNavigationBar(SCROLL_Y_VALUE) {
  if (SCROLL_Y_VALUE > 0 && !NAV.classList.contains("visible")) {
    NAV.classList.add("visible");
  } else if (SCROLL_Y_VALUE == 0 && NAV.classList.contains("visible")) {
    NAV.classList.remove("visible");
  }
}

function setHelloAnimation(SCROLL_Y_VALUE) {
  if (
    SCROLL_Y_VALUE >= SKILLS_STARTING_POINT_Y / 2 &&
    SCROLL_Y_VALUE < SKILLS_STARTING_POINT_Y
  ) {
    SKILLS_HELLO_FIRST.classList.add("visible");
    SKILLS_HELLO_SECOND.classList.add("visible");
    SKILLS_HELLO_THIRD.classList.add("visible");
    SKILLS_HELLO_FORTH.classList.add("visible");
  }
}



function onAndOffAnimationsOnScroll(SCROLL_Y_VALUE) {
  if (SCROLL_Y_VALUE >= 0 && SCROLL_Y_VALUE < SKILLS_STARTING_POINT_Y) {
    SKILLS_LIST.classList.remove("visible");
    SKILLS_MESSAGE.classList.remove("visible");
    SKILLS_BANNER.classList.remove("blinking");
    ABOUT_ME_BANNER.classList.remove("blinking");
    ABOUT_ME_DESCRIPTION.classList.remove("visible");
    ABOUT_ME_PHOTO.classList.remove("visible");
    PROJECTS_BANNER.classList.remove("blinking");
    CONTACT_BANNER.classList.remove("blinking");

    NAV_INTRODUCTION_BTN.classList.add("highlighted");
    NAV_SKILLS_BTN.classList.remove("highlighted");
    NAV_ABOUTME_BTN.classList.remove("highlighted");
    NAV_PROJECTS_BTN.classList.remove("highlighted");
    NAV_CONTACT_BTN.classList.remove("highlighted");
  } else if (
    SCROLL_Y_VALUE >= SKILLS_STARTING_POINT_Y &&
    SCROLL_Y_VALUE < ABOUT_STARTING_POINT_Y
  ) {
    SKILLS_LIST.classList.add("visible");
    SKILLS_MESSAGE.classList.add("visible");
    SKILLS_BANNER.classList.add("blinking");

    ABOUT_ME_BANNER.classList.remove("blinking");
    ABOUT_ME_DESCRIPTION.classList.remove("visible");
    ABOUT_ME_PHOTO.classList.remove("visible");
    PROJECTS_BANNER.classList.remove("blinking");
    CONTACT_BANNER.classList.remove("blinking");

    NAV_SKILLS_BTN.classList.add("highlighted");
    NAV_INTRODUCTION_BTN.classList.remove("highlighted");
    NAV_ABOUTME_BTN.classList.remove("highlighted");
    NAV_PROJECTS_BTN.classList.remove("highlighted");
    NAV_CONTACT_BTN.classList.remove("highlighted");
  } else if (
    SCROLL_Y_VALUE >= ABOUT_STARTING_POINT_Y &&
    SCROLL_Y_VALUE < PROJECTS_STARTING_POINT_Y
  ) {
    ABOUT_ME_BANNER.classList.add("blinking");
    ABOUT_ME_DESCRIPTION.classList.add("visible");
    ABOUT_ME_PHOTO.classList.add("visible");

    SKILLS_LIST.classList.remove("visible");
    SKILLS_MESSAGE.classList.remove("visible");
    SKILLS_BANNER.classList.remove("blinking");
    PROJECTS_BANNER.classList.remove("blinking");
    CONTACT_BANNER.classList.remove("blinking");

    NAV_ABOUTME_BTN.classList.add("highlighted");
    NAV_INTRODUCTION_BTN.classList.remove("highlighted");
    NAV_SKILLS_BTN.classList.remove("highlighted");
    NAV_PROJECTS_BTN.classList.remove("highlighted");
    NAV_CONTACT_BTN.classList.remove("highlighted");
  } else if (
    SCROLL_Y_VALUE >= PROJECTS_STARTING_POINT_Y &&
    SCROLL_Y_VALUE < CONTACT_STARTING_POINT_Y
  ) {
    PROJECTS_BANNER.classList.add("blinking");

    SKILLS_LIST.classList.remove("visible");
    SKILLS_MESSAGE.classList.remove("visible");
    SKILLS_BANNER.classList.remove("blinking");
    ABOUT_ME_BANNER.classList.remove("blinking");
    ABOUT_ME_DESCRIPTION.classList.remove("visible");
    ABOUT_ME_PHOTO.classList.remove("visible");
    CONTACT_BANNER.classList.remove("blinking");

    NAV_PROJECTS_BTN.classList.add("highlighted");
    NAV_INTRODUCTION_BTN.classList.remove("highlighted");
    NAV_SKILLS_BTN.classList.remove("highlighted");
    NAV_ABOUTME_BTN.classList.remove("highlighted");
    NAV_CONTACT_BTN.classList.remove("highlighted");
  } else if (SCROLL_Y_VALUE >= CONTACT_STARTING_POINT_Y) {
    CONTACT_BANNER.classList.add("blinking");

    SKILLS_LIST.classList.remove("visible");
    SKILLS_MESSAGE.classList.remove("visible");
    SKILLS_BANNER.classList.remove("blinking");
    ABOUT_ME_BANNER.classList.remove("blinking");
    ABOUT_ME_DESCRIPTION.classList.remove("visible");
    ABOUT_ME_PHOTO.classList.remove("visible");
    PROJECTS_BANNER.classList.remove("blinking");

    NAV_CONTACT_BTN.classList.add("highlighted");
    NAV_INTRODUCTION_BTN.classList.remove("highlighted");
    NAV_SKILLS_BTN.classList.remove("highlighted");
    NAV_PROJECTS_BTN.classList.remove("highlighted");
    NAV_PROJECTS_BTN.classList.remove("highlighted");
  }
}

//typing effect in "about me" section

// const FIRST_INTRODUCTION_FIELD = document.querySelector(
//   ".first-introduction>h1"
// );
// const SECOND_INTRODUCTION_FIELD = document.querySelector(
//   ".second-introduction>h1"
// );

// const FIRST_INTRODUCTION_TXT = "Hi! My name is Bartek,";
// const SECOND_INTRODUCTION_TXT = "I'm frond-end deweloper!";

// let i = 0;
// let j = 0;
// const TYPE_SPEED = 100;

// function introduceYourself() {
//   if (i < FIRST_INTRODUCTION_TXT.length) {
//     FIRST_INTRODUCTION_FIELD.innerHTML += FIRST_INTRODUCTION_TXT.charAt(i);
//     i++;
//     setTimeout(introduceYourself, TYPE_SPEED);
//   } else {
//     SECOND_INTRODUCTION_FIELD.innerHTML += SECOND_INTRODUCTION_TXT.charAt(j);
//     j++;
//     setTimeout(introduceYourself, TYPE_SPEED);
//   }
// }

// introduceYourself();