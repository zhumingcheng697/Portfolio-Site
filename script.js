let isInDarkMode;
isInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
          element.setAttribute("href", `app/index.html?n=${Math.floor(Math.random() * 2 + 1)}`);
          break;
        case 1:
          element.setAttribute("href", `web/index.html?n=${Math.floor(Math.random() * 3 + 1)}`);
          break;
        case 2:
          element.setAttribute("href", `script/index.html?n=${Math.floor(Math.random() * 4 + 1)}`);
          break;
        default:
          element.setAttribute("href", "me/index.html");
      }
    });
  }
}

/*
function isInRect(x, y) {
  function pos() {
    let box = document.querySelector("img#metro-card").getBoundingClientRect();
    return {
      left: box.left,
      right: box.right,
      top: box.top,
      bottom: box.bottom,
      centerX: ((box.left + box.right) / 2),
      centerY: ((box.top + box.bottom) / 2),
      width: (box.right - box.left),
      height: (box.bottom - box.top)
    };
  }

  let nW = document.querySelector("img#metro-card").naturalWidth;
  let nH = document.querySelector("img#metro-card").naturalHeight;

  if ((pos().width / pos().height) >= (nW / nH)) {
    if (y >= pos().top && y <= pos().bottom && x >= pos().centerX - (pos().height / nH * nW / 2) && x <= pos().centerX + (pos().height / nH * nW / 2)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (x >= pos().left && x <= pos().right && y >= pos().centerY - (pos().width / nW * nH / 2) && y <= pos().centerY + (pos().width / nW * nH / 2)) {
      return true;
    } else {
      return false;
    }
  }
}
*/

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
