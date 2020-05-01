let projectsDiv = document.querySelector("div.main-view div.projects");
let modalDiv = document.querySelector("div.modal-view");

if (projectsDiv && modalDiv) {
  if (document.body.classList.contains("app") && typeof appProjects !== "undefined") {
    sortProjects(appProjects);
    for (appProject of appProjects) {
      createProjectCard(appProject);
      createProjectModal(appProject);
    }
  } else if (document.body.classList.contains("web") && typeof webProjects !== "undefined") {
    sortProjects(webProjects);
    for (webProject of webProjects) {
      createProjectCard(webProject);
      createProjectModal(webProject);
    }
  } else if (document.body.classList.contains("script") && typeof scriptProjects !== "undefined") {
    sortProjects(scriptProjects);
    for (scriptProject of scriptProjects) {
      createProjectCard(scriptProject);
      createProjectModal(scriptProject);
    }
  }

  if (window.location.search && window.location.search === "?wild") {
    let projectCards = document.querySelectorAll(`div.main-view div.projects .project-card`);
    setTimeout(() => {
      showModal(projectCards[Math.floor(Math.random() * Math.floor(projectCards.length))].id);
    }, 400);
  }
}

function sortProjects(projects) {
  projects.sort((a, b) => {
    if (a.priority && b.priority) {
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      } else {
        if (a.year !== b.year) {
          return parseInt(b.year) - parseInt(a.year);
        } else {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    } else if (a.priority && !b.priority) {
      return -1;
    } else if (!a.priority && b.priority) {
      return 1;
    } else {
      if (a.year !== b.year) {
        return parseInt(b.year) - parseInt(a.year);
      } else {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  });
}

function createProjectCard(project) {

  let projectCardDiv = document.createElement("div");
  projectCardDiv.classList.add("project-card");
  projectCardDiv.classList.add("hide");
  projectCardDiv.id = project.identifier;

  projectCardDiv.innerHTML += `<div class="project-img-wrapper"><div class="project-img" style="background-image: url('${project.bgImg}');"></div></div>`;
  projectCardDiv.innerHTML += `<h5>${project.title}<span>(${project.year})</span></h5>`

  let pDiv = document.createElement("p");
  for (tag of project.tags) {
    pDiv.innerHTML += `<span>${tag}</span>`;
  }

  projectCardDiv.appendChild(pDiv);
  projectsDiv.appendChild(projectCardDiv);

  setTimeout(function () {
    projectCardDiv.classList.remove("hide");
  }, 150);
}

function createProjectModal(project) {
  let modalAreaDiv = document.createElement("div");
  modalAreaDiv.classList.add("modal-area");
  modalAreaDiv.classList.add(project.identifier);
  modalAreaDiv.classList.add("hide");
  modalDiv.appendChild(modalAreaDiv);

  let scrollableDiv = document.createElement("div");
  scrollableDiv.classList.add("scrollable");
  modalAreaDiv.appendChild(scrollableDiv);

  let modalContainerDiv = document.createElement("div");
  modalContainerDiv.classList.add("modal-container");
  scrollableDiv.appendChild(modalContainerDiv);

  let actualModalDiv = document.createElement("div");
  actualModalDiv.classList.add("actual-modal");
  modalContainerDiv.appendChild(actualModalDiv);

  switch (project.detailViewType) {
    case "video":
      actualModalDiv.innerHTML += `<div class="image-video-container unselectable"><video playsinline src="${project.videoUrl}" muted loop poster="${project.bgImg}"><img src="${project.bgImg}"></video></div>`;
      break;
    case "image":
      actualModalDiv.innerHTML += `<div class="image-video-container unselectable"><img src="${project.bgImg}"></div>`;
      break;
    case "iframe":
      actualModalDiv.innerHTML += `<div class="image-video-container unselectable"><iframe frameborder="0" src="${project.iframeUrl}"></iframe></div>`;
      break;
  }

  actualModalDiv.innerHTML += `<h4>${project.title}<span>(${project.year})</span></h4>`;

  let pDiv = document.createElement("p");
  pDiv.classList.add("tags");
  for (tag of project.tags) {
    pDiv.innerHTML += `<span>${tag}</span>`;
  }

  actualModalDiv.appendChild(pDiv);

  for (line of project.descriptions) {
    actualModalDiv.innerHTML += `<p>${line}</p>`
  }

  actualModalDiv.innerHTML += `<div class="cancel-btn" class="unselectable hide">&#x2715;</div>`;
}
