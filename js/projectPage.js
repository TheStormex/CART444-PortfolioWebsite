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
    // $('#projectName').text(this.name);
    let projectName = document.getElementById('projectName');
    makeLanguageSpans(projectName, this.name[0], this.name[1], "normal");
    let projectDescription = document.getElementById('projectDescription');
    makeLanguageSpans(projectDescription, this.description[0], this.description[1], "normal");
    let projectType = document.getElementById('projectPageType');
    makeLanguageSpans(projectType, this.gameType[0], this.gameType[1], "normal");
    let projectGenre = document.getElementById('projectPageGenre');
    makeLanguageSpans(projectGenre, this.gameGenre[0], this.gameGenre[1], "normal");
    let projectEngine = document.getElementById('projectPageEngine');
    makeLanguageSpans(projectEngine, this.gameEngine[0], this.gameEngine[1], "normal");
    let projectLine = document.getElementById('projectLine');
    makeLanguageSpans(projectLine, this.oneLine[0], this.oneLine[1], "normal");
    let theList = document.getElementById("projectResponsibilities");
    theList.innerHTML = "";
    makeLanguageSpans(theList, this.responsibilities[0], this.responsibilities[1], "list");
    let documentationList = document.getElementById("projectDocumentation");
    documentationList.innerHTML = "";
    makeLanguageSpans(documentationList, this.documentation[0], this.documentation[1], "paragraph");
    let addInfoSection = document.getElementById("projectAdditional");
    addInfoSection.innerHTML = "";
    makeLanguageSpans(addInfoSection, this.additionalInfo[0], this.additionalInfo[1], "paragraph");
    let video = document.getElementById("projectVideo");
    video.src = this.video;
    let projectImage1 = document.getElementById("projectImage1Image");
    projectImage1.src = this.images[0];
    let projectImage2 = document.getElementById("projectImage2Image");
    projectImage2.src = this.images[1];
    let projectImage3 = document.getElementById("projectImage3Image");
    projectImage3.src = this.images[2];
    $('#projectImagesDesc').text(this.imagesDesc);
    let underImageText1 = document.getElementById("projectImage1Text");
    makeLanguageSpans(underImageText1, this.imagesDesc[0][0], this.imagesDesc[1][0], "normal");
    let underImageText2 = document.getElementById("projectImage2Text");
    makeLanguageSpans(underImageText2, this.imagesDesc[0][1], this.imagesDesc[1][1], "normal");
    let underImageText3 = document.getElementById("projectImage3Text");
    makeLanguageSpans(underImageText3, this.imagesDesc[0][2], this.imagesDesc[1][2], "normal");
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
      let projectTitle = document.createElement("h5");
      makeLanguageSpans(projectTitle, otherGamesList[i].name[0], otherGamesList[i].name[1], "normal");
      // projectTitle.textContent = otherGamesList[i].name;
      overlaySection.appendChild(projectTitle);
    }
    refreshSameLanguage();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }
}
