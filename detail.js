let dropDownTimeoutIds = [];
let modalTimeoutIds = [];

randomizeDropDown();

function changeProject(direction) {
  if (currentProjects) {
    let i = currentProjects.findIndex(e => e.identifier === window.location.search.replace("?", ""));
    if (i !== -1) {
      let id;
      if (direction === -1) {
        id = currentProjects[i === 0 ? (currentProjects.length - 1) : (i - 1)].identifier;
      } else if (direction === 1) {
        id = currentProjects[(i === currentProjects.length - 1) ? 0 : (i + 1)].identifier;
      }

      if (id) {
        hideModals(id);
        showModal(id, true);
      }
    }
  }
}

function randomizeDropDown() {
  if (document.body.classList.contains("app")) {
    document.querySelectorAll("header .drop-down .menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          element.setAttribute("href", "../web/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "../script/index.html?wild");
      }
    });
  } else if (document.body.classList.contains("web")) {
    document.querySelectorAll("header .drop-down .menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          element.setAttribute("href", "../app/index.html?wild")
          break;
        case 1:
          element.setAttribute("href", "../script/index.html?wild");
      }
    });
  } else if (document.body.classList.contains("script")) {
    document.querySelectorAll("header .drop-down .menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          element.setAttribute("href", "../app/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "../web/index.html?wild");
      }
    });
  } else if (document.body.classList.contains("wild")) {
    document.querySelectorAll("header .drop-down .menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../app/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "../web/index.html?wild");
          break;
        default:
          element.setAttribute("href", "../script/index.html?wild");
      }
    });
  }
}

function showDropDown() {
  for (const id of dropDownTimeoutIds) {
    clearTimeout(id);
  }

  randomizeDropDown();

  document.querySelector("header .drop-down").classList.remove("displayNone");

  setTimeout(() => {
    document.querySelector("header .drop-down").classList.remove("hide");
    document.querySelector("header strong strong").classList.add("turned");
  }, 10);
}

function hideDropDown() {
  document.querySelector("header .drop-down").classList.add("hide");
  document.querySelector("header strong strong").classList.remove("turned");
  dropDownTimeoutIds.push(setTimeout(() => {document.querySelector("header .drop-down").classList.add("displayNone")}, 600));
}

function showModal(cardId, switching = false) {
  if (!switching) {
    document.querySelector(".modal-view").classList.remove("hide");
  }

  document.querySelector(`.modal-view .modal-area.${cardId}`).classList.remove("hide");
  document.querySelectorAll(`.modal-view .modal-area.${cardId} video`).forEach(e => {
    e.play();
    e.currentTime = 0;
  });

  if (!window.location.search) {
    history.pushState(null, null, `${window.location.pathname}?${cardId}`);
  } else if (window.location.search !== `?${cardId}`) {
    history.replaceState(null, null, `${window.location.pathname}?${cardId}`);
  }

  for (const id of modalTimeoutIds) {
    clearTimeout(id);
  }

  modalTimeoutIds = [];
}

function hideModals(nextId = "") {
  function resetModals() {
    document.querySelectorAll(`.modal-view .modal-area${nextId === "" ? `` : `:not(.${nextId})`} .scrollable`).forEach(e => {
      modalTimeoutIds.push(setTimeout(() => {e.scrollTop = 0}, 600));
    });

    document.querySelectorAll(`.modal-view .modal-area${nextId === "" ? `` : `:not(.${nextId})`} .scrollable .image-video-container iframe:not([src^="https://www.openprocessing.org/sketch/"])`).forEach(e => {
      modalTimeoutIds.push(setTimeout(() => {e.setAttribute("src", e.getAttribute("src") + "?")}, 600));
    });
  }

  if (nextId === "") {
    document.querySelector(".modal-view").classList.add("hide");
    resetModals()
  } else {
    setTimeout(resetModals, 10);
  }

  document.querySelectorAll(".modal-view .modal-area").forEach(e => {e.classList.add("hide")});
  document.querySelectorAll(`.modal-view video`).forEach(e => {e.pause()});

  if (window.location.search && nextId === "") {
    history.pushState(null, null, window.location.href.replace(window.location.search, ""));
  }
}

if (window.matchMedia("(hover: hover)").matches) {
  document.querySelector("header").addEventListener("mouseenter", () => {
    if (window.getComputedStyle(document.querySelector("header .drop-down")).getPropertyValue("opacity") > 0) {
      showDropDown();
    }
  });
  document.querySelector("header > p").addEventListener("mouseenter", showDropDown);
}

document.querySelector("header").addEventListener("mouseleave", hideDropDown);

document.querySelector("header > p").addEventListener("click", () => {
  if (!document.querySelector("header .drop-down").classList.contains("hide")) {
    hideDropDown();
  } else {
    showDropDown();
  }
});

document.addEventListener("click", click => {
  let clicked = click.target;

  if (document.querySelector(".modal-view") && !document.querySelector(".modal-view").classList.contains("hide")) {
    if (clicked.classList.contains("scrollable") || clicked.classList.contains("modal-container") || clicked.classList.contains("mask")) {
      hideModals();
    } else if (clicked.classList.contains("left")) {
      changeProject(-1);
    } else if (clicked.classList.contains("right")) {
      changeProject(1);
    }
  }
});

document.addEventListener('keydown', key => {
  if (key.keyCode === 27) {
    if (document.querySelector(".modal-view") && !document.querySelector(".modal-view").classList.contains("hide")) {
      hideModals();
      document.querySelectorAll(".cancel-btn").forEach(e => {
        e.classList.add("tapped");
        setTimeout(() => {e.classList.remove("tapped")}, 180);
      });
    }
  } else if (document.querySelector(".modal-view") && !document.querySelector(".modal-view").classList.contains("hide") && document.querySelector(".arrows > span.left") && document.querySelector(".arrows > span.right") && window.location.search && document.querySelector(`#${window.location.search.replace("?", "")}`)) {
    if (key.keyCode === 37) {
      changeProject(-1);
      document.querySelector(".arrows > span.left").classList.add("tapped");
      setTimeout(() => {document.querySelector(".arrows > span.left").classList.remove("tapped")}, 180);
    } else if (key.keyCode === 39) {
      changeProject(1);
      document.querySelector(".arrows > span.right").classList.add("tapped");
      setTimeout(() => {document.querySelector(".arrows > span.right").classList.remove("tapped")}, 180);
    }
  }
});

window.onpopstate = () => {
  if (!window.location.search) {
    hideModals();
  } else {
    let pCard = document.querySelector(`#${window.location.search.replace("?", "")}`);
    if (pCard) {
      showModal(pCard.id);
    } else {
      history.replaceState(null, null, window.location.pathname);
    }
  }
};
