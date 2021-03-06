let isInDarkMode;
let resizeIndex = 45;
let resizeIntervalId;
let tappableElements = document.querySelectorAll("#card-container .card, h2 > p ~ .drop-down > .menu > div.scrollable > div, .cancel-btn, .modal-view .modal-area .actual-modal p:not(.tags) > a, h3 a, .projects .project-card, .arrows > span");
isInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (!document.body.classList.contains("app") && !document.body.classList.contains("web") && !document.body.classList.contains("script") && !document.body.classList.contains("wild")) {
  document.querySelector("#card-container a.card.app p:last-of-type").innerHTML = typeof appProjects !== "undefined" ? `${appProjects.length} Projects` : "???";
  document.querySelector("#card-container a.card.web p:last-of-type").innerHTML = typeof webProjects !== "undefined" ? `${webProjects.length} Projects` : "???";
  document.querySelector("#card-container a.card.script p:last-of-type").innerHTML = typeof scriptProjects !== "undefined" ? `${scriptProjects.length} Projects` : "???";

  setTimeout(() => {
    document.querySelector("#card-container").classList.remove("hide");
    document.querySelector("h1").classList.remove("hide");
  }, 150);
}

if (document.body.classList.contains("wild") && document.querySelector("div.about-me")) {
  setTimeout(() => {document.querySelector(".about-me").classList.remove("hide")}, 150);
}

storeWidthHeight();
switchFavicons();
randomizeCard();

function resizeLoop() {
  clearInterval(resizeIntervalId);
  storeWidthHeight();
  resizeIndex = 45;
  resizeIntervalId = setInterval(() => {
    if (resizeIndex >= 0) {
      storeWidthHeight();
      resizeIndex--;
    } else {
      clearInterval(resizeIntervalId);
    }
  }, 15);
}

function storeWidthHeight() {
  document.body.style.setProperty('--full-height', `${window.innerHeight}px`);
  if (document.querySelector(`.modal-container iframe[src^="https://www.openprocessing.org/sketch/"]`)) {
    document.body.style.setProperty('--modal-width', `${document.querySelector(".modal-container").clientWidth}`);
  }
}

function switchFavicons() {
  document.querySelectorAll("link[rel=\"icon\"], link[rel=\"apple-touch-icon\"]").forEach(element => {element.setAttribute("href", element.getAttribute("href").replace(/(dark|light)/gi, isInDarkMode ? "dark" : "light"))});
}

function randomizeCard() {
  if (!document.body.classList.contains("app") && !document.body.classList.contains("web") && !document.body.classList.contains("script") && !document.body.classList.contains("wild")) {
    document.querySelectorAll("#card-container a.card.wild").forEach(element => {
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          element.setAttribute("href", "app/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "web/index.html?wild");
          break;
        case 2:
          element.setAttribute("href", "script/index.html?wild");
          break;
        default:
          element.setAttribute("href", "me/index.html");
      }
    });
  }
}

tappableElements.forEach(element => {
  element.addEventListener("touchstart", () => {
    tappableElements.forEach(e => {e.classList.remove("tapped")});
    element.classList.add("tapped");
  });
});

document.querySelectorAll("#card-container .card").forEach(element => {
  element.addEventListener("mouseenter", randomizeCard);
});

document.addEventListener("touchend", () => {
  tappableElements.forEach(element => {element.classList.remove("tapped")});
});

window.matchMedia("(prefers-color-scheme: dark)").addListener(match => {
  isInDarkMode = match.matches;
  switchFavicons();
});

window.addEventListener("resize", resizeLoop);
