"use strict";

let darkMode = false;
// is the page a project or the main page?
let isProject = false;
let videoPlaying = false;
let currentSection;

let projectPages = [];
let projectAmount = 4;
let mainPage;
let projectPage;

function createProjectPages() {
  let project1 = new ProjectPage (
    "Breakdown Bowling",
    "University Game",
    "3D Puzzle Strategy",
    "Unity Engine",
    "Observe, plan, aim, and fire! Knock down all the pins with balls!",
    "The player must use a limited amount of light and heavy balls to destroy all the bowling pins in the area that are stacked onto or behind blocks of different types.  Look through 3 camera angles to find the best way to finish the level.",
    ["play", "make stuff", "more!"],
    "ok",
    "ok",
    "ok",
    [],
    ["Aiming the ball", "Hitting the pins", "Back view camera perspective"]);
  projectPages.push(project1);
  let project2 = new ProjectPage (
    "Nerdy Cards",
    "Personal Project",
    "Card Game",
    "Tabletop",
    "Use careful positioning to defeat your opponent with your army!",
    "This is a two-players game where they must damage each other’s shields until a direct hit is made. Players summon units onto zones of the battlefield and play ability cards to affect the game state. Positioning matters, as units and abilities can only affect specific zones relative to themselves.",
    ["play", "make stuff", "more!"],
    "ok",
    "ok",
    "ok",
    [],
    ["Zones of the play area", "Different types of cards", "Different colors of cards"]);
  projectPages.push(project2);
  let project3 = new ProjectPage (
    "Re-Boot",
    "Game Jam Game",
    "2D Puzzle Platformer",
    "Unity Engine",
    "Guide the robot to the exit! Use energy and leave behind clones to solve the puzzles!",
    "The player controls a robot and must get to the end of each level through opening doors, stepping on switches, and respawning to leave behind a clone that can be used as platforms and to keep switches pressed. These actions require battery energy to use, which is limited, and must be managed properly.",
    ["play", "make stuff", "more!"],
    "ok",
    "ok",
    "ok",
    [],
    ["Level 1", "Level 13", "Level 15 (Final level)"]);
  projectPages.push(project3);
  let project4 = new ProjectPage (
    "Screen",
    "Game Jam Game",
    "2D Mystery Simulator",
    "Unity Engine",
    "Save the hostage, detective! Catfish a gang member into giving you their location!",
    "The player is a detective who has hacked into the laptop of a gang member. They must pretend to be that gang member and catfish  another to reveal the location of a hostage. The player must explore the files on the computer to learn what the gang member knows to make their act convincing.",
    ["play", "make stuff", "more!"],
    "ok",
    "ok",
    "ok",
    [],
    ["Spreadsheets", "Interactive chatroom", "Diary entries"]);
  projectPages.push(project4);
}

function toProjectPage(mainSection, projectName) {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  switch (projectName) {
    case "breakdownBowling":
      projectPages[0].show();
      break;
    case "nerdyCards":
      projectPages[1].show();
      break;
    case "reBoot":
      projectPages[2].show();
      break;
    case "screen":
      projectPages[3].show();
      break;
    default:
  }
  $(mainPage).fadeOut(150);
  $(projectPage).fadeIn(150);
  isProject = true;
}

function toMainPage() {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  $(projectPage).fadeOut(150);
  $(mainPage).fadeIn(150);
  isProject = false;
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
