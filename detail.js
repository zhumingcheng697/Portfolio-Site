let dropDownTimeoutIds = [];
let modalTimeoutIds = [];

randomizeDropDown();

function randomizeDropDown() {
  if (document.body.classList.contains("app")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../web/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "../script/index.html?wild");
          break;
        default:
          element.setAttribute("href", "../me/index.html");
      }
    });
  } else if (document.body.classList.contains("web")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../app/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "../script/index.html?wild");
          break;
        default:
          element.setAttribute("href", "../me/index.html");
      }
    });
  } else if (document.body.classList.contains("script")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../app/index.html?wild");
          break;
        case 1:
          element.setAttribute("href", "../web/index.html?wild");
          break;
        default:
          element.setAttribute("href", "../me/index.html");
      }
    });
  } else if (document.body.classList.contains("wild")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
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
  for (id of dropDownTimeoutIds) {
    clearTimeout(id);
  }

  randomizeDropDown();

  document.querySelector("h2 div.drop-down").classList.remove("displayNone");

  setTimeout(() => {
    document.querySelector("h2 div.drop-down").classList.remove("hide");
    document.querySelector("h2 strong strong").classList.add("turned");
  }, 10);
}

function hideDropDown() {
  document.querySelector("h2 div.drop-down").classList.add("hide");
  document.querySelector("h2 strong strong").classList.remove("turned");
  dropDownTimeoutIds.push(setTimeout(() => {document.querySelector("h2 div.drop-down").classList.add("displayNone")}, 600));
}

function showModal(cardId) {
  document.querySelector("div.modal-view").classList.remove("hide");
  document.querySelector(`div.modal-view div.modal-area.${cardId}`).classList.remove("hide");
  document.querySelectorAll(`div.modal-view div.modal-area.${cardId} video`).forEach(e => {
    e.play();
    e.currentTime = 0;
  });

  if (!window.location.search) {
    history.pushState(null, null, `${window.location.href}?${cardId}`);
  } else if (window.location.search !== `?${cardId}`) {
    history.pushState(null, null, window.location.href.replace(window.location.search, `?${cardId}`));
  }

  for (id of modalTimeoutIds) {
    clearTimeout(id);
  }

  modalTimeoutIds = [];
}

function hideModals() {
  document.querySelector("div.modal-view").classList.add("hide");
  document.querySelectorAll("div.modal-view div.modal-area").forEach(e => {e.classList.add("hide")});
  document.querySelectorAll(`div.modal-view video`).forEach(e => {e.pause()});

  document.querySelectorAll("div.modal-view div.modal-area .scrollable").forEach(e => {
    modalTimeoutIds.push(setTimeout(() => {e.scrollTop = 0}, 600));
  });

  document.querySelectorAll("div.modal-view div.modal-area .scrollable .image-video-container iframe").forEach(e => {
    modalTimeoutIds.push(setTimeout(() => {e.setAttribute("src", e.getAttribute("src") + "?")}, 600));
  });

  if (window.location.search) {
    history.pushState(null, null, window.location.href.replace(window.location.search, ""));
  }
}

document.querySelector("h2").addEventListener("mouseenter", () => {
  if (window.getComputedStyle(document.querySelector("h2 div.drop-down")).getPropertyValue("opacity") > 0) {
    showDropDown();
  }
});

document.querySelector("h2 > p").addEventListener("mouseenter", showDropDown);

document.querySelector("h2").addEventListener("mouseleave", hideDropDown);

document.querySelector("h2 > p").addEventListener("click", () => {
  if (!document.querySelector("h2 div.drop-down").classList.contains("hide")) {
    hideDropDown();
  } else {
    showDropDown();
  }
});

document.querySelectorAll("div.main-view div.projects .project-card").forEach(element => {
  element.addEventListener("click", () => {showModal(element.id)});
});

document.querySelectorAll("div.modal-view div.modal-area .cancel-btn").forEach(element => {
  element.addEventListener("click", hideModals);
});

document.addEventListener("click", click => {
  let clicked = click.target;

  if (document.querySelector("div.modal-view") && !document.querySelector("div.modal-view").classList.contains("hide")) {
    if (clicked.classList.contains("scrollable") || clicked.classList.contains("modal-container") || clicked.classList.contains("mask")) {
      hideModals();
    }
  }
});

document.addEventListener('keydown', key => {
  if (key.keyCode === 27) {
    if (document.querySelector("div.modal-view") && !document.querySelector("div.modal-view").classList.contains("hide")) {
      hideModals();
    }
  }
});
