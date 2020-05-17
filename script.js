window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  //skill cards flipping and shaking first card
  const SKILL_CARDS = [...document.querySelectorAll(".skills-list>.skill")];

  SKILL_CARDS.forEach((skillCard) => {
    skillCard.addEventListener("click", () => {
      skillCard.classList.toggle("flip");
      SKILL_CARDS[0].style.animation = "none";
    });
  });

  //menu
  const MENU_BURGER = document.querySelector(".burger");
  const NAV = document.querySelector(".nav-links");

  MENU_BURGER.addEventListener("click", () => {
    NAV.classList.toggle("nav-active");
    MENU_BURGER.classList.toggle("toggle");
  });

  //dealing with scroll - hight of every single section - introduction, projects etc.
  const INTRODUCTION_HEIGHT = document.querySelector("main>.introduction")
    .offsetHeight;
  const SKILLS_HEIGHT = document.querySelector("main>.skills").offsetHeight;
  const ABOUT_HEIGHT = document.querySelector("main>.about").offsetHeight;
  const PROJECTS_HEIGHT = document.querySelector("main>.projects").offsetHeight;
  const CONTACT_HEIGHT = document.querySelector("main>.contact").offsetHeight;

  const SKILLS_WELCOME_TEXT_HEIGHT = document.querySelector(".skills>.welcome")
    .offsetHeight;
  const SKILLS_FAVOURITE_TEXT_HEIGHT = document.querySelector(
    ".skills>.favourite"
  ).offsetHeight;
  const ABOUT_ME_HOBBY_HEIGHT = document.querySelector(".hobby").offsetHeight;

  const INTRODUCTION_STARTING_POINT_Y = 0;
  const SKILLS_STARTING_POINT_Y = INTRODUCTION_HEIGHT;
  const ABOUT_STARTING_POINT_Y = INTRODUCTION_HEIGHT + SKILLS_HEIGHT;
  const PROJECTS_STARTING_POINT_Y =
    INTRODUCTION_HEIGHT + SKILLS_HEIGHT + ABOUT_HEIGHT;
  const CONTACT_STARTING_POINT_Y =
    INTRODUCTION_HEIGHT + SKILLS_HEIGHT + ABOUT_HEIGHT + PROJECTS_HEIGHT;

  console.log(INTRODUCTION_STARTING_POINT_Y);
  console.log(SKILLS_STARTING_POINT_Y);
  console.log(ABOUT_STARTING_POINT_Y);
  console.log(PROJECTS_STARTING_POINT_Y);
  console.log(CONTACT_STARTING_POINT_Y);

  const SKILLS_HELLO_FIRST = document.querySelector(".welcome>.first-sentence");
  const SKILLS_HELLO_SECOND = document.querySelector(
    ".welcome>.second-sentence"
  );
  const SKILLS_HELLO_THIRD = document.querySelector(".welcome>.third-sentence");
  const SKILLS_HELLO_FORTH = document.querySelector(".welcome>.forth-sentence");

  const SKILLS_LIST = document.querySelector(".skills-list");
  const SKILLS_BANNER = document.querySelector(".skills-banner");

  const SKILLS_FAVOURITE_TEXT_FIRST = document.querySelector(
    ".skills>.favourite .first"
  );
  const SKILLS_FAVOURITE_TEXT_SECOND = document.querySelector(
    ".skills>.favourite .second"
  );

  const ABOUT_ME_BANNER = document.querySelector(".about-banner");
  const ABOUT_ME_INTRO = document.querySelector(".intro");
  const ABOUT_ME_HOBBY = document.querySelector(".hobby");

  const PROJECTS_BANNER = document.querySelector(".projects-banner");

  const CONTACT_BANNER = document.querySelector(".contact-banner");

  window.addEventListener("scroll", () => {
    const SCROLL_Y_VALUE = window.scrollY;

    setHelloAnimation(SCROLL_Y_VALUE);
    onAndOffAnimationsOnScroll(SCROLL_Y_VALUE);
  });

  function setHelloAnimation(SCROLL_Y_VALUE) {
    if (
      SCROLL_Y_VALUE >= SKILLS_STARTING_POINT_Y / 2 &&
      !SKILLS_HELLO_FIRST.classList.contains("visible") &&
      !SKILLS_HELLO_SECOND.classList.contains("visible") &&
      !SKILLS_HELLO_THIRD.classList.contains("visible") &&
      !SKILLS_HELLO_FORTH.classList.contains("visible")
    ) {
      SKILLS_HELLO_FIRST.classList.add("visible");
      SKILLS_HELLO_SECOND.classList.add("visible");
      SKILLS_HELLO_THIRD.classList.add("visible");
      SKILLS_HELLO_FORTH.classList.add("visible");
    }
  }

  function onAndOffAnimationsOnScroll(SCROLL_Y_VALUE) {
    if (SCROLL_Y_VALUE >= 0 && SCROLL_Y_VALUE < SKILLS_STARTING_POINT_Y) {
    } else if (
      SCROLL_Y_VALUE >= SKILLS_STARTING_POINT_Y &&
      SCROLL_Y_VALUE < ABOUT_STARTING_POINT_Y
    ) {
      if (
        SCROLL_Y_VALUE >=
          SKILLS_STARTING_POINT_Y + SKILLS_WELCOME_TEXT_HEIGHT &&
        !SKILLS_LIST.classList.contains("blinking")
      ) {
        SKILLS_BANNER.classList.add("blinking");
      }

      if (
        SCROLL_Y_VALUE >=
        ABOUT_STARTING_POINT_Y - SKILLS_FAVOURITE_TEXT_HEIGHT * 1.75
      ) {
        SKILLS_FAVOURITE_TEXT_FIRST.classList.add("visible");
        SKILLS_FAVOURITE_TEXT_SECOND.classList.add("visible");
      }
    } else if (
      SCROLL_Y_VALUE >= ABOUT_STARTING_POINT_Y &&
      SCROLL_Y_VALUE < PROJECTS_STARTING_POINT_Y
    ) {
      ABOUT_ME_BANNER.classList.add("blinking");
      ABOUT_ME_INTRO.classList.add("visible");

      if (
        SCROLL_Y_VALUE >=
        PROJECTS_STARTING_POINT_Y - ABOUT_ME_HOBBY_HEIGHT * 1.75
      ) {
        ABOUT_ME_HOBBY.classList.add("visible");
      }
    } else if (
      SCROLL_Y_VALUE >= PROJECTS_STARTING_POINT_Y &&
      SCROLL_Y_VALUE < CONTACT_STARTING_POINT_Y
    ) {
      PROJECTS_BANNER.classList.add("blinking");
    } else if (SCROLL_Y_VALUE >= CONTACT_STARTING_POINT_Y) {
      CONTACT_BANNER.classList.add("blinking");
    }
  }
});
