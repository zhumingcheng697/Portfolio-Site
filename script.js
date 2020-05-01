let isInDarkMode;
isInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.body.style.setProperty('--full-height', `${window.innerHeight}px`);

if (!document.body.classList.contains("app") && !document.body.classList.contains("web") && !document.body.classList.contains("wild")) {
  document.querySelector("#card-container a.card.app p:last-of-type").innerHTML = appProjects ? `${appProjects.length} Projects` : "???";
  document.querySelector("#card-container a.card.web p:last-of-type").innerHTML = webProjects ? `${webProjects.length} Projects` : "???";
  document.querySelector("#card-container a.card.script p:last-of-type").innerHTML = scriptProjects ? `${scriptProjects.length} Projects` : "???";

  setTimeout(() => {
    document.querySelector("#card-container").classList.remove("hide");
    document.querySelector("h1").classList.remove("hide");
  }, 150);
}

if (document.body.classList.contains("wild") && document.querySelector("div.about-me")) {
  setTimeout(() => {
    document.querySelector("div.about-me").classList.remove("hide");
  }, 150);
}

switchFavicons();
randomizeCard();

function switchFavicons() {
  document.querySelectorAll("link[rel=\"icon\"], link[rel=\"apple-touch-icon\"]").forEach(element => {
    element.setAttribute("href", element.getAttribute("href").replace(/(dark|light)/gi, isInDarkMode ? "dark" : "light"));
  });
}

function randomizeCard() {
  if (!document.body.classList.contains("app") && !document.body.classList.contains("web") && !document.body.classList.contains("wild")) {
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

document.querySelectorAll("#card-container .card, h2 > p ~ div.drop-down > div.menu > div.scrollable > div, .cancel-btn, div.modal-view div.modal-area .actual-modal p:not(.tags) > a, h3 a, div.projects .project-card").forEach(element => {
  element.addEventListener("touchstart", () => {
    element.classList.add("tapped");
  });
});

document.querySelectorAll("#card-container .card").forEach(element => {
  element.addEventListener("mouseenter", () => {
    randomizeCard();
  });
});

document.addEventListener("touchend", touchend => {
  document.querySelectorAll("#card-container .card, h2 > p ~ div.drop-down > div.menu > div.scrollable > div, .cancel-btn, div.modal-view div.modal-area .actual-modal p:not(.tags) > a, h3 a, div.projects .project-card").forEach(element => {
    element.classList.remove("tapped");
  });
});

window.matchMedia("(prefers-color-scheme: dark)").addListener(match => {
  isInDarkMode = match.matches;
  switchFavicons();
});

window.addEventListener("resize", () => {
  alert("resized");
  document.body.style.setProperty('--full-height', `${window.innerHeight}px`);
});
