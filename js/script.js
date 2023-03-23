"use strict";

let darkMode = false;
// is the page a project or the main page?
let isProject = false;
let currentSection = "";
let projectPages = [];
let mainPage;
let projectPage;

function toProjectPage() {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  mainPage.style.display = "none";
  projectPage.style.display = "inline-block";
}

function toMainPage() {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  projectPage.style.display = "none";
  mainPage.style.display = "inline-block";
}
