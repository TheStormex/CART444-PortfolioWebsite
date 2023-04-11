"use strict";

class ProjectPage {
  constructor(camelName, id, name, gameType, gameGenre, gameEngine, oneLine, description, responsibilities, documentation, additionalInfo, video, images, imagesDesc) {
    this.camelName = camelName;
    this.id = id;
    this.name = name;
    this.gameType = gameType;
    this.gameGenre = gameGenre;
    this.gameEngine = gameEngine;
    this.oneLine = oneLine;
    this.description = description;
    this.responsibilities = responsibilities;
    this.documentation = documentation;
    this.additionalInfo = additionalInfo;
    this.video = video;
    this.images = images;
    this.imagesDesc = imagesDesc;
    this.visited = false;
  }


  show() {

    // this.visited = true;
    // localStorage.setItem(this.id, "true");
    // let thisCheckmarkId = "check" + this.id;
    // let thisCheckmark = document.getElementById(thisCheckmarkId);
    // thisCheckmark.style.display = "inline-block";
    $('#projectName').text(this.name);
    $('#projectDescription').text(this.description);
    $('.projectType').text(this.gameType);
    $('.projectGenre').text(this.gameGenre);
    $('.projectEngine').text(this.gameEngine);
    $('#projectLine').text(this.oneLine);
    let theList = document.getElementById("projectResponsibilities");
    theList.innerHTML = "";
    this.responsibilities.forEach((item)=>{
      let li = document.createElement("li");
       li.innerText = item;
       theList.appendChild(li);
    })
    let documentationList = document.getElementById("projectDocumentation");
    documentationList.innerHTML = "";
    this.documentation.forEach((item)=>{
      let paragraph = document.createElement("p");
       paragraph.innerText = item;
       documentationList.appendChild(paragraph);
    })
    let addInfoSection = document.getElementById("projectAdditional");
    addInfoSection.innerHTML = "";
    this.additionalInfo.forEach((item)=>{
      let paragraph = document.createElement("p");
       paragraph.innerHTML = item;
       addInfoSection.appendChild(paragraph);
    });
    let video = document.getElementById("projectVideo");
    video.src = this.video;
    let projectImage1 = document.getElementById("projectImage1Image");
    projectImage1.src = this.images[0];
    let projectImage2 = document.getElementById("projectImage2Image");
    projectImage2.src = this.images[1];
    let projectImage3 = document.getElementById("projectImage3Image");
    projectImage3.src = this.images[2];
    $('#projectImagesDesc').text(this.imagesDesc);
    // generate other games
    let otherGamesList = [];
    for (let i = 0; i < projectPages.length; i++) {
      if (this.id !== projectPages[i].id) {
        otherGamesList.push(projectPages[i]);
      }
    }
    let eachPanelWidth = (100 / otherGamesList.length) - 5;
    let otherProjectsDiv = document.getElementById('otherProjects');
    otherProjectsDiv.innerHTML = "";
    for (let i = 0; i < otherGamesList.length; i++) {
      let theCamelName = otherGamesList[i].camelName;
      let divPortfolio = document.createElement("div");
      otherProjectsDiv.appendChild(divPortfolio);
      divPortfolio.className = "portfolioGame otherProjectsPanel";
      divPortfolio.style.width = eachPanelWidth + "%";
      divPortfolio.onclick = function() {toProjectPage(1, theCamelName)};
      let thumbnailImage = document.createElement("img");
      thumbnailImage.className = "thumbnail";
      thumbnailImage.src = otherGamesList[i].images[1];
      divPortfolio.appendChild(thumbnailImage);
      let overlaySection = document.createElement("div");
      overlaySection.className = "portfolioOverlay";
      divPortfolio.appendChild(overlaySection);
      let projectTitle = document.createElement("h2");
      projectTitle.textContent = otherGamesList[i].name;
      overlaySection.appendChild(projectTitle);
      // let tagsLineDiv = document.createElement("div");
      // tagsLineDiv.className = "tagsLine";
      // overlaySection.appendChild(tagsLineDiv);
      // let tagType = document.createElement("h5");
      // tagType.className = "tag projectType";
      // tagType.textContent = otherGamesList[i].gameType;
      // tagsLineDiv.appendChild(tagType);
      // let tagGenre = document.createElement("h5");
      // tagGenre.className = "tag projectGenre";
      // tagGenre.textContent = otherGamesList[i].gameGenre;
      // tagsLineDiv.appendChild(tagGenre);
      // let tagEngine = document.createElement("h5");
      // tagEngine.className = "tag projectEngine";
      // tagEngine.textContent = otherGamesList[i].gameEngine;
      // tagsLineDiv.appendChild(tagEngine);
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
