let dropDownTimeoutIds = [];
let modalTimeoutIds = [];

randomizeDropDown();

function randomizeDropDown() {
  if (document.body.classList.contains("app")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../web/index.html")
          break;
        case 1:
          element.setAttribute("href", "../script/index.html")
          break;
        default:
          element.setAttribute("href", "../me/index.html")
      }
    });
  } else if (document.body.classList.contains("web")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../app/index.html")
          break;
        case 1:
          element.setAttribute("href", "../script/index.html")
          break;
        default:
          element.setAttribute("href", "../me/index.html")
      }
    });
  } else if (document.body.classList.contains("script")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../app/index.html")
          break;
        case 1:
          element.setAttribute("href", "../web/index.html")
          break;
        default:
          element.setAttribute("href", "../me/index.html")
      }
    });
  } else if (document.body.classList.contains("wild")) {
    document.querySelectorAll("h2 div.drop-down div.menu > div.scrollable > div.wild > a.wild").forEach(element => {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          element.setAttribute("href", "../app/index.html")
          break;
        case 1:
          element.setAttribute("href", "../web/index.html")
          break;
        default:
          element.setAttribute("href", "../script/index.html")
      }
    });
  }
}

function resetDropDown() {
  for (id of dropDownTimeoutIds) {
    clearTimeout(id);
  }

  randomizeDropDown();

  document.querySelector("h2 div.drop-down").classList.remove("displayNone");
  // document.querySelector("h2 div.drop-down").classList.remove("hide");
  // document.querySelector("h2 strong strong").classList.add("turned");

  setTimeout(() => {
    document.querySelector("h2 div.drop-down").classList.remove("hide");
    document.querySelector("h2 strong strong").classList.add("turned");
  }, 10);
}

function resetModals() {
  document.querySelector("div.modal-view").classList.add("hide");
  document.querySelectorAll("div.modal-view div.modal-area").forEach(e => {
    e.classList.add("hide");
  });

  document.querySelectorAll(`div.modal-view video`).forEach(e => {
    e.pause();
  });

  document.querySelectorAll("div.modal-view div.modal-area .scrollable").forEach(e => {
    modalTimeoutIds.push(setTimeout(() => {
      e.scrollTop = 0;
    }, 600));
  });

  document.querySelectorAll("div.modal-view div.modal-area .scrollable .image-video-container iframe").forEach(e => {
    modalTimeoutIds.push(setTimeout(() => {
      e.setAttribute("src", e.getAttribute("src") + "?");
    }, 600));
  });
}

document.querySelector("h2").addEventListener("mouseenter", () => {
  if (window.getComputedStyle(document.querySelector("h2 div.drop-down")).getPropertyValue("opacity") > 0) {
    resetDropDown();
  }
});

document.querySelector("h2 > p").addEventListener("mouseenter", () => {
  resetDropDown();
});

document.querySelector("h2").addEventListener("mouseleave", () => {
  document.querySelector("h2 div.drop-down").classList.add("hide");
  document.querySelector("h2 strong strong").classList.remove("turned");
  dropDownTimeoutIds.push(setTimeout(function () {
    document.querySelector("h2 div.drop-down").classList.add("displayNone");
  }, 600));
});

document.querySelector("h2 > p").addEventListener("click", () => {
  if (window.getComputedStyle(document.querySelector("h2 div.drop-down")).getPropertyValue("opacity") > 0) {
    document.querySelector("h2 div.drop-down").classList.add("hide");
    document.querySelector("h2 strong strong").classList.remove("turned");
    dropDownTimeoutIds.push(setTimeout(function () {
      document.querySelector("h2 div.drop-down").classList.add("displayNone");
    }, 600));
  } else {
    resetDropDown();
  }
});

document.querySelectorAll("div.main-view div.projects .project-card").forEach(element => {
  element.addEventListener("click", () => {
    document.querySelector(`div.modal-view div.modal-area.${element.id}`).classList.remove("hide");
    document.querySelector("div.modal-view").classList.remove("hide");
    document.querySelectorAll(`div.modal-view div.modal-area.${element.id} video`).forEach(e => {
      e.play();
      e.currentTime = 0;
    });

    for (id of modalTimeoutIds) {
      clearTimeout(id);
    }

    modalTimeoutIds = [];
  });
});

document.querySelectorAll("div.modal-view div.modal-area .cancel-btn").forEach(element => {
  element.addEventListener("click", () => {
    resetModals();
  });
});

document.addEventListener("click", click => {
  let clicked = click.target;

  if (document.querySelector("div.modal-view") && !document.querySelector("div.modal-view").classList.contains("hide")) {
    if (clicked.classList.contains("scrollable") || clicked.classList.contains("modal-container")) {
      resetModals();
    }
  }
});

document.addEventListener('keydown', key => {
  if (key.keyCode === 27) {
    if (document.querySelector("div.modal-view") && !document.querySelector("div.modal-view").classList.contains("hide")) {
      resetModals();
    }
  }
});
