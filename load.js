let projectsDiv = document.querySelector("div.main-view div.projects");
let modalDiv = document.querySelector("div.modal-view");

if (projectsDiv && modalDiv) {
  if (document.body.classList.contains("app") && appProjects) {
    sortProjects(appProjects);
    for (appProject of appProjects) {
      createProjectCard(appProject);
      createProjectModal(appProject);
    }
  } else if (document.body.classList.contains("web") && webProjects) {
    sortProjects(webProjects);
    for (webProject of webProjects) {
      createProjectCard(webProject);
      createProjectModal(webProject);
    }
  } else if (document.body.classList.contains("script") && scriptProjects) {
    sortProjects(scriptProjects);
    for (scriptProject of scriptProjects) {
      createProjectCard(scriptProject);
      createProjectModal(scriptProject);
    }
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

  let projectImgWrapperDiv = document.createElement("div");
  projectImgWrapperDiv.classList.add("project-img-wrapper");

  let projectImgDiv = document.createElement("div");
  projectImgDiv.classList.add("project-img");
  projectImgDiv.style.backgroundImage = `url("${project.bgImg}")`;
  projectImgWrapperDiv.appendChild(projectImgDiv);
  projectCardDiv.appendChild(projectImgWrapperDiv);

  projectCardDiv.innerHTML += `<h5>${project.title}<span>(${project.year})</span></h5>`

  let pDiv = document.createElement("p");
  for (tag of project.tags) {
    pDiv.innerHTML += `<span>${tag}</span>`;
  }

  projectCardDiv.appendChild(pDiv);
  projectsDiv.appendChild(projectCardDiv);

  setTimeout(function () {
    projectCardDiv.classList.remove("hide");
  }, 40);
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

  let imageVideoContainerDiv = document.createElement("div");
  imageVideoContainerDiv.classList.add("image-video-container");
  imageVideoContainerDiv.classList.add("unselectable");
  actualModalDiv.appendChild(imageVideoContainerDiv);

  switch (project.detailViewType) {
    case "video":
      imageVideoContainerDiv.innerHTML += `<video playsinline src="${project.videoUrl}" muted loop poster="${project.bgImg}"><img src="${project.bgImg}"></video>`;
      break;
    case "image":
      imageVideoContainerDiv.innerHTML += `<img src="${project.bgImg}">`;
      break;
    case "iframe":
      imageVideoContainerDiv.innerHTML += `<iframe frameborder="0" src="${project.iframeUrl}"><img src="${project.bgImg}"></iframe>`;
      break;
    default:
      break;
  }

  let h4Div = document.createElement("h4");
  h4Div.innerHTML = `${project.title}<span>(${project.year})</span>`;
  actualModalDiv.appendChild(h4Div);

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
