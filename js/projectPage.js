"use strict";

class ProjectPage {
  constructor(id, name, gameType, gameGenre, gameEngine, oneLine, description, responsibilities, documentation, additionalInfo, video, images, imagesDesc) {
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
    $('#projectImage1Text').text(this.imagesDesc[0]);
    $('#projectImage2Text').text(this.imagesDesc[1]);
    $('#projectImage3Text').text(this.imagesDesc[2]);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
