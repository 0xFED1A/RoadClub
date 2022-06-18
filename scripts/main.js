"use strict";


const page = document.querySelector(".page");
const switchbox = page.querySelector("#switchbox");
const elementsForThemeSwitch = {
  page: {
    class: "page",
    domObject: [page]
  },
  text: {
    class: "text",
    domObject: page.querySelectorAll(".text")
  },
  heading: {
    class: "heading",
    domObject: page.querySelectorAll(".heading")
  },
  headerNavLink: {
    class: "header__nav-link",
    domObject: page.querySelectorAll(".header__nav-link")
  },
  ctaBikePictureCaption: {
    class: "cta-promotion__bike-picture-caption",
    domObject: page.querySelectorAll(".cta-promotion__bike-picture-caption")
  },
  quoteSlogan: {
    class: "quote__slogan",
    domObject: page.querySelectorAll(".quote__slogan")
  },
  quoteName: {
    class: "quote__name",
    domObject: page.querySelectorAll(".quote__name")
  },
  quoteOccupation: {
    class: "quote__occupation",
    domObject: page.querySelectorAll(".quote__occupation")
  },
  bikeLink: {
    class: "bike-type-info__type-switch",
    domObject: page.querySelectorAll(".bike-type-info__type-switch")
  },
  bikeLinkActive: {
    class: "bike-type-info__type-switch_type_active-light",
    domObject: page.querySelectorAll(".bike-type-info__type-switch_type_active-light")
  },
  bikeName: {
    class: "card__name",
    domObject: page.querySelectorAll(".card__name")
  },
  caroselButton: {
    class: "carousel__control",
    domObject: page.querySelectorAll(".carousel__control")
  },
  trainRouteLink: {
    class: "train-route-info__link",
    domObject: page.querySelectorAll(".train-route-info__link")
  },
  footerLabel: {
    class: "footer__mailing-list-label",
    domObject: page.querySelectorAll(".footer__mailing-list-label")
  },
  footerInputBorder: {
    class: "footer__mailing-form-elements",
    domObject: page.querySelectorAll(".footer__mailing-form-elements")
  },
  footterInput: {
    class: "footer__mailing-list-input",
    domObject: page.querySelectorAll(".footer__mailing-list-input")
  },
  footerSubmit: {
    class: "footer__mailing-list-submit",
    domObject: page.querySelectorAll(".footer__mailing-list-submit")
  },
  footerCopy: {
    class: "footer__copy",
    domObject: page.querySelectorAll(".footer__copy")
  },
  footer: {
    class: "footer",
    domObject: page.querySelectorAll(".footer")
  },
  switchBase: {
    class: "theme-switch-box__pseudo-switch",
    domObject: page.querySelectorAll(".theme-switch-box__pseudo-switch")
  },
  switchSunIcon: {
    class: "theme-switch-box__sun-icon",
    domObject: page.querySelectorAll(".theme-switch-box__sun-icon")
  },
  switchMoonIcon: {
    class: "theme-switch-box__moon-icon",
    domObject: page.querySelectorAll(".theme-switch-box__moon-icon")
  }
};

switchbox.addEventListener("click", (evt) => {
  if (evt.target.checked) {
    for(let element in elementsForThemeSwitch) {
      const currentElement = elementsForThemeSwitch[element];
      currentElement.domObject.forEach(obj => {
        if (currentElement.class == elementsForThemeSwitch.bikeLinkActive.class) {
          obj.classList.add("bike-type-info__type-switch_type_active-dark");
        } else {
          obj.classList.add(currentElement.class + "_darkened");
        }
      });
    }
  } else {
    for(let element in elementsForThemeSwitch) {
      const currentElement = elementsForThemeSwitch[element];
      currentElement.domObject.forEach(obj => {
        if (currentElement.class == elementsForThemeSwitch.bikeLinkActive.class) {
          obj.classList.remove("bike-type-info__type-switch_type_active-dark");
        } else {
          obj.classList.remove(currentElement.class + "_darkened");
        }
      });
    }
  }
});
