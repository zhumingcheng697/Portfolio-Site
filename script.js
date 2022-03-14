let isInDarkMode;
isInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (!document.body.classList.contains("app") && !document.body.classList.contains("web") && !document.body.classList.contains("script") && !document.body.classList.contains("wild")) {
  Promise.all(
      ["app", "web", "script"].map((e) => fetch(`./${ e }/projects.json`).then((res) => res.json()))
  ).then(([appProjects, webProjects, scriptProjects]) => {
    document.querySelector("#card-container a.card.app p:last-of-type").innerHTML = typeof appProjects !== "undefined" ? `${ appProjects.length } Projects` : "???";
    document.querySelector("#card-container a.card.web p:last-of-type").innerHTML = typeof webProjects !== "undefined" ? `${ webProjects.length } Projects` : "???";
    document.querySelector("#card-container a.card.script p:last-of-type").innerHTML = typeof scriptProjects !== "undefined" ? `${ scriptProjects.length } Projects` : "???";

    setTimeout(() => {
      document.querySelector("#card-container").classList.remove("hide");
      document.querySelector("#greeting").classList.remove("hide");
    }, 150);
  });
}

if (document.body.classList.contains("wild") && document.querySelector("div.about-me")) {
  setTimeout(() => {document.querySelector(".about-me").classList.remove("hide")}, 150);
}

storeWidthHeight();
switchFavicons();
randomizeCard();

function storeWidthHeight() {
  document.body.style.setProperty('--full-height', `${window.innerHeight}px`);
  if (document.querySelector(`.modal-container iframe[src^="https://www.openprocessing.org/sketch/"]`)) {
    document.body.style.setProperty('--modal-width', `${document.querySelector(".actual-modal").clientWidth}`);
  }
}

function switchFavicons() {
  document.querySelectorAll("link[rel=\"icon\"], link[rel=\"apple-touch-icon\"]").forEach(element => {element.setAttribute("href", element.getAttribute("href").replace(/(dark|light)/gi, isInDarkMode ? "dark" : "light"))});
}

function randomizeCard() {
  if (!document.body.classList.contains("app") && !document.body.classList.contains("web") && !document.body.classList.contains("script") && !document.body.classList.contains("wild")) {
    document.querySelectorAll("#card-container a.card.wild, #greeting a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "app/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "web/index.html?wild");
          break;
        case 2:
          element.setAttribute("href", "script/index.html?wild");
      }
    });
  }
}

document.querySelectorAll("#card-container a.card.wild, #greeting a").forEach(element => {
  element.addEventListener("mouseenter", randomizeCard);
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", match => {
  isInDarkMode = match.matches;
  switchFavicons();
});

window.addEventListener("resize", storeWidthHeight);
