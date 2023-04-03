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
    ["Mechanics design", "Level design", "UI design", "Programming", "Music and sound creation", "Documentation", "Project management"],
    ["stuff", "other"],
    ["This game was my final project for my introduction to Unity class. Retroactively, I improved the UI and added more levels.",
    "My main inspirations for this game are Angry Birds and the Cannon Game in the MMORPG Wizard101, games where you shoot a projectile to demolish structures, plan how to use each projectile, and have specific targets to aim for."],
    "images/rectangle/projects/breakdownBowling/video.mp4",
    ["images/rectangle/projects/breakdownBowling/aim.png", "images/rectangle/projects/breakdownBowling/hitting.png", "images/rectangle/projects/breakdownBowling/backview.png"],
    ["Aiming the ball", "Hitting the pins", "Back view camera perspective"]);
  projectPages.push(project1);
  let project2 = new ProjectPage (
    "Nerdy Cards",
    "Personal Project",
    "Card Game",
    "Tabletop",
    "Use careful positioning to defeat your opponent with your army!",
    "This is a two-players game where they must damage each other’s shields until a direct hit is made. Players summon units onto zones of the battlefield and play ability cards to affect the game state. Positioning matters, as units and abilities can only affect specific zones relative to themselves.",
    ["Mechanics design", "Card layout and content design", "Vector artwork", "Documentation", "Project management"],
    ["stuff", "other"],
    ["I love playing trading card games so I want to make my own card game. The main unique aspect of this game is the positioning system, which trading card games rarely use.",
    "The resource (Energy) mechanic is inspired by the roguelike deckbuilder Slay the Spire. the Upgrade mechanic is a combination of Pokemon TCG's Energy cards mechanic, Digimon TCG's digivolution mechanic, and Yu-Gi-Oh! TCG's XYZ materials mechanic."],
    "images/rectangle/projects/nerdyCards/video2.mp4",
    ["images/rectangle/projects/nerdyCards/playArea.png", "images/rectangle/projects/nerdyCards/typesOfCards.png", "images/rectangle/projects/nerdyCards/colors.png"],
    ["Zones of the play area", "Different types of cards", "Different colors of cards"]);
  projectPages.push(project2);
  let project3 = new ProjectPage (
    "Re-Boot",
    "Game Jam Game",
    "2D Puzzle Platformer",
    "Unity Engine",
    "Guide the robot to the exit! Use energy and leave behind clones to solve the puzzles!",
    "The player controls a robot and must get to the end of each level through opening doors, stepping on switches, and respawning to leave behind a clone that can be used as platforms and to keep switches pressed. These actions require battery energy to use, which is limited, and must be managed properly.",
    ["Mechanics design", "Level design", "Music and sound creation", "Programming", "Documentation", "Project management"],
    ["stuff", "other"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam. The theme was rebirth and the game must have no (or few) text.",
    "My main inspiration for this game is Chronotron, another puzzle platformer where the player robot character must use previous selves to solve the levels."],
    "images/rectangle/projects/reBoot/video.mp4",
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    ["Level 1", "Level 13", "Level 15 (Final level)"]);
  projectPages.push(project3);
  let project4 = new ProjectPage (
    "Screen",
    "Game Jam Game",
    "2D Mystery Simulator",
    "Unity Engine",
    "Save the hostage, detective! Catfish a gang member into giving you their location!",
    "The player is a detective who has hacked into the laptop of a gang member. They must pretend to be that gang member and catfish  another to reveal the location of a hostage. The player must explore the files on the computer to learn what the gang member knows to make their act convincing.",
    ["Mechanics design", "Narrative design", "Music and sound creation", "Documentation", "Writing dialogue and other texts", "Project management"],
    ["stuff", "other"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam. The theme was ‘I know what you did’ and the game must have no on-screen player character.",
    "My main inspirations for this game are Emily is Away and Welcome to the Game, other computer simulators with information gathering and/or chatroom dialogue choices."],
    "images/rectangle/projects/screen/video.mp4",
    ["images/rectangle/projects/screen/spreadsheets.png", "images/rectangle/projects/screen/chatroom.png", "images/rectangle/projects/screen/diary.png"],
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
  if (isProject === true) {
    mainPage = document.getElementById('mainPage');
    projectPage = document.getElementById('projectPage');
    $(projectPage).fadeOut(150);
    $(mainPage).fadeIn(150);
    isProject = false;
  }
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
