"use strict";

let darkMode = false;
// is the page a project or the main page?
let isProject = false;
let videoPlaying = false;
let currentSection;

let projectPages = [];
let mainPage;
let projectPage;

function toProjectPage(mainSection, projectName) {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  $(mainPage).fadeOut(150);
  $(projectPage).fadeIn(150);
}

function toMainPage() {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  $(projectPage).fadeOut(150);
  $(mainPage).fadeIn(150);
}

function playVideo() {
  $('#video').fadeOut(100);
  $('#overlay').fadeOut(100);
  $('#videoFull').fadeIn(100);
  document.getElementById('videoFull').addEventListener('ended', finishVideo, false);
  videoPlaying = true;
}

function finishVideo() {
  videoPlaying = false;
  $('#videoFull').fadeOut(0);
  $('#video').fadeIn(0);
  $('#overlay').fadeIn(0);
}
