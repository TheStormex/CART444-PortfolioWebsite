"use strict";

class ProjectPage {
  constructor(name, gameType, gameGenre, gameEngine, oneLine, description, responsibilities, documentation, additionalInfo, video, images, imagesDesc) {
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
    $('#projectName').text(this.name);
    $('#projectDescription').text(this.description);
    $('#projectType').text(this.gameType);
    $('#projectGenre').text(this.gameGenre);
    $('#projectEngine').text(this.gameEngine);
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
       paragraph.innerText = item;
       addInfoSection.appendChild(paragraph);
    })
    $('#projectVideo').text(this.video);
    $('#projectImages').text(this.images);
    $('#projectImagesDesc').text(this.imagesDesc);
    $('#projectImage1Text').text(this.imagesDesc[0]);
    $('#projectImage2Text').text(this.imagesDesc[1]);
    $('#projectImage3Text').text(this.imagesDesc[2]);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
