const projectsDiv = document.querySelector(".main-view .projects");
const modalDiv = document.querySelector(".modal-view");
const domParser = new DOMParser();

if (projectsDiv && modalDiv) {
    let projects;

    if (document.body.classList.contains("app") && typeof appProjects !== "undefined") {
        projects = appProjects;
    } else if (document.body.classList.contains("web") && typeof webProjects !== "undefined") {
        projects = webProjects;
    } else if (document.body.classList.contains("script") && typeof scriptProjects !== "undefined") {
        projects = scriptProjects;
    }

    if (projects) {
        sortProjects(projects);
        for (const project of projects) {
            if (!project.bgImg) {
                project.bgImg = project.identifier + "/image.png";
            }
            createProjectCard(project);
            createProjectModal(project);
        }
    }

    if (window.location.search) {
        let chosenId;
        if (window.location.search.includes("?wild")) {
            let projectCards = document.querySelectorAll(`.main-view .projects .project-card`);
            if (projectCards) {
                chosenId = projectCards[Math.floor(Math.random() * Math.floor(projectCards.length))].id;
            }
        } else {
            let chosenCard = document.querySelector(`#${ window.location.search.replace("?", "") }`);
            if (chosenCard) {
                chosenId = chosenCard.id;
            }
        }

        if (chosenId) {
            setTimeout(() => {showModal(chosenId);}, 450);
        }
    }
}

function sortProjects(projects) {
    projects.sort((a, b) => {
        if ((a.priority || 0) !== (b.priority || 0)) {
            return (b.priority || 0) - (a.priority || 0);
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

    projectCardDiv.innerHTML += `<div class="project-img-wrapper"><div class="project-img" style="background-image: url('${ project.bgImg }');"></div></div>`;
    projectCardDiv.innerHTML += `<h5>${ project.title }<span>(${ project.year })</span></h5>`;

    let pDiv = document.createElement("p");
    for (const tag of project.tags) {
        pDiv.innerHTML += `<span>${ tag }</span>`;
    }

    projectCardDiv.appendChild(pDiv);
    projectsDiv.appendChild(projectCardDiv);

    setTimeout(() => {projectCardDiv.classList.remove("hide");}, 150);
}

function createProjectModal(project) {
    let modalHTML = `<div class="modal-area ${ project.identifier } hide"><div class="scrollable"><div class="modal-container"><div class="actual-modal">`;

    switch (project.detailViewType) {
        case "video":
            if (!project.videoUrl) {
                project.videoUrl = project.identifier + "/video.mp4";
            }
            modalHTML += `<div class="image-video-container unselectable"><video playsinline preload="metadata" src="${ project.videoUrl }" muted loop><img alt="${ project.title }" src="${ project.bgImg }"></video></div>`;
            break;
        case "iframe":
            modalHTML += `<div class="image-video-container unselectable"><iframe frameborder="0" src="${ project.iframeUrl }"></iframe></div>`;
            break;
        default:
            modalHTML += `<div class="image-video-container unselectable"><img alt="${ project.title }" src="${ project.imageUrl ? project.imageUrl : project.bgImg }"></div>`;
    }

    modalHTML += `<section><h4>${ project.title }<span>(${ project.year })</span></h4>`;

    if (project.iframeUrl && !project.deployUrl) {
        project.deployUrl = project.iframeUrl;
    }

    if (project.sourceUrl || project.deployUrl) {
        modalHTML += `<nav>`
    }

    if (project.sourceUrl) {
        modalHTML += `<a target="_blank" rel="noreferrer" href="${project.sourceUrl}">Source Code</a>`;
    }

    if (project.deployUrl) {
        modalHTML += `<a target="_blank" rel="noreferrer" href="${project.deployUrl}">Deployment</a>`;
    }

    if (project.sourceUrl || project.deployUrl) {
        modalHTML += `</nav>`
    }

    modalHTML += `</section><section><p class="tags">`;
    for (const tag of project.tags) {
        modalHTML += `<span>${ tag }</span>`;
    }
    modalHTML += `</p></section>`;

    let closed = true;

    for (const line of project.descriptions) {
        if (!domParser.parseFromString(line, "text/xml").documentElement.querySelector("parsererror")) {
            if (!closed) {
                modalHTML += "</section>";
                closed = true;
            }
            modalHTML += line;
        } else {
            if (closed) {
                modalHTML += "<section>";
                closed = false;
            }
            modalHTML += `<p>${ line }</p>`;
        }
    }

    if (!closed) {
        modalHTML += "</section>";
    }

    modalHTML += `<div class="cancel-btn unselectable"><span>&#x2715;</span></div>`;

    modalHTML += `</div></div></div></div>`;

    modalDiv.innerHTML += modalHTML;
}
