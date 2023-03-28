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
    $('#projectType').text(this.type);
    $('#projectGenre').text(this.genre);
    $('#projectLine').text(this.oneLine);
    let theList = document.getElementById("projectResponsibilities");
    theList.innerHTML = "";
    this.responsibilities.forEach((item)=>{
      let li = document.createElement("li");
       li.innerText = item;
       theList.appendChild(li);
    })
    $('#projectDocumentation').text(this.documentation);
    $('#projectAdditional').text(this.additionalInfo);
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
