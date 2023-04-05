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
    "1",
    "Breakdown Bowling",
    "University Game",
    "3D Puzzle Strategy",
    "Unity Engine",
    "Observe, plan, aim, and fire! Knock down all the pins with balls!",
    "The player must use a limited amount of light and heavy balls to destroy all the bowling pins in the area that are stacked onto or behind blocks of different types.  Look through 3 camera angles to find the best way to finish the level.",
    ["Mechanics design", "Level design", "UI design", "Programming", "Music and sound creation", "Documentation", "Project management"],
    ["This project was created in about three weeks in 2021. The four levels were created first, but after playtesting, it was found that the game was not easy to understand. For this reason, I added the three tutorial levels to 'breakdown' the mechanics of the game.",
    "The new version with the tutorial levels was liked by the teacher and students for being much clearer in helping teach players how it works. I learned that just because I find something obvious, it does not mean that players would, so step-by-step tutorialization is important for any game."],
    ["This game was my final project for my introduction to Unity class. Retroactively, I improved the UI and added more levels.",
    "My main inspirations for this game are <a href='https://www.angrybirds.com/' class='linkAway'>Angry Birds</a> and the <a href='https://www.wizard101central.com/wiki/Location:Pet_Mini_Games' class='linkAway'>Cannon Game</a> in the MMORPG <a href='https://www.wizard101.com/game' class='linkAway'>Wizard101</a>, games where you shoot a projectile to demolish structures, plan how to use each projectile, and have specific targets to aim for."],
    "images/rectangle/projects/breakdownBowling/video.mp4",
    ["images/rectangle/projects/breakdownBowling/aim.png", "images/rectangle/projects/breakdownBowling/hitting.png", "images/rectangle/projects/breakdownBowling/backview.png"],
    ["Aiming the ball", "Hitting the pins", "Back view camera perspective"]);
  projectPages.push(project1);
  let project2 = new ProjectPage (
    "2",
    "Nerdy Cards",
    "Personal Project",
    "Card Game",
    "Tabletop",
    "Use careful positioning to defeat your opponent with your army!",
    "This is a two-players game where they must damage each other’s shields until a direct hit is made. Players summon units onto zones of the battlefield and play ability cards to affect the game state. Positioning matters, as units and abilities can only affect specific zones relative to themselves.",
    ["Mechanics design", "Card layout and content design", "Vector artwork", "Documentation", "Project management"],
    ["I brainstormed ideas for this game for a long time, but nothing felt right. In 2022, having played many different trading card games, I took inspiration from my favorite games and came up with these mechanics I found both interesting and fun.",
     "In 2023, I started prototyping cards of different colors, which have different playstyles, and playtested the game with a friend who has expertise in card games. I am still tweaking the rules to see how I can maximise its potential."],
    ["I love playing trading card games so I want to make my own card game. The main unique aspect of this game is the positioning system, which trading card games rarely use.",
    "The resource (Energy) mechanic is inspired by the roguelike deckbuilder <a href='https://store.steampowered.com/app/646570/Slay_the_Spire/' class='linkAway'>Slay the Spire</a>. the Upgrade mechanic is a combination of <a href='https://www.pokemon.com/us/pokemon-tcg' class='linkAway'>Pokemon TCG</a>'s Energy cards mechanic, <a href='https://world.digimoncard.com/' class='linkAway'>Digimon TCG</a>'s digivolution mechanic, and Yu-Gi-Oh! TCG's XYZ materials mechanic."],
    "images/rectangle/projects/nerdyCards/video2.mp4",
    ["images/rectangle/projects/nerdyCards/playArea.png", "images/rectangle/projects/nerdyCards/typesOfCards.png", "images/rectangle/projects/nerdyCards/colors.png"],
    ["Zones of the play area", "Different types of cards", "Different colors of cards"]);
  projectPages.push(project2);
  let project3 = new ProjectPage (
    "3",
    "Re-Boot",
    "Game Jam Game",
    "2D Puzzle Platformer",
    "Unity Engine",
    "Guide the robot to the exit! Use energy and leave behind clones to solve the puzzles!",
    "The player controls a robot and must get to the end of each level through opening doors, stepping on switches, and respawning to leave behind a clone that can be used as platforms and to keep switches pressed. These actions require battery energy to use, which is limited, and must be managed properly.",
    ["Mechanics design", "Level design", "Music and sound creation", "Programming", "Documentation", "Project management"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam in November 2022. I, as the designer, had a miscommunication with the lead programmer. I designed the game to cost a resource when the player jumps, but did not communicate this properly with the programmer.",
    "This caused the levels I designed to not work and I had to design new ones to fit the rules the actual game was coded to have. I learned to maintain rigorous communication with the rest of the team so everyone is always on the same page."],
    ["The theme of the game jam was rebirth and the game must have no (or few) text.",
    "My main inspiration for this game is <a href='https://armorgames.com/play/1567/chronotron' class='linkAway'>Chronotron</a>, another puzzle platformer where the player robot character must use previous selves to solve the levels."],
    "images/rectangle/projects/reBoot/video.mp4",
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    ["Level 1", "Level 13", "Level 15 (Final level)"]);
  projectPages.push(project3);
  let project4 = new ProjectPage (
    "4",
    "Screen",
    "Game Jam Game",
    "2D Mystery Simulator",
    "Unity Engine",
    "Save the hostage, detective! Catfish a gang member into giving you their location!",
    "The player is a detective who has hacked into the laptop of a gang member. They must pretend to be that gang member and catfish  another to reveal the location of a hostage. The player must explore the files on the computer to learn what the gang member knows to make their act convincing.",
    ["Mechanics design", "Narrative design", "Music and sound creation", "Documentation", "Writing dialogue and other texts", "Project management"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam in October 2022. I worked with another member of the team to come up with the story and dialogue. The original idea of the puzzles all being different each playthrough was too ambitious so we scaled it down.",
    "After playtesting, it was found that the game was confusing. The hacker character was added, dialogue was cut, and more tutorialization was placed in the beginning."],
    ["The theme of the game jam was ‘I know what you did’ and the game must have no on-screen player character. The name has the double meaning of both a computer screen and the screening process from the gang member the player goes through.",
    "My main inspirations for this game are <a href='https://store.steampowered.com/app/417860/Emily_is_Away/' class='linkAway'>Emily is Away</a> and <a href='https://store.steampowered.com/app/485380/Welcome_to_the_Game/' class='linkAway'>Welcome to the Game</a>, other computer simulators with information gathering and/or chatroom dialogue choices."],
    "images/rectangle/projects/screen/video.mp4",
    ["images/rectangle/projects/screen/spreadsheets.png", "images/rectangle/projects/screen/chatroom.png", "images/rectangle/projects/screen/diary.png"],
    ["Spreadsheets", "Interactive chatroom", "Diary entries"]);
  projectPages.push(project4);
  for (let i = 1; i < projectPages.length+1; i++) {
    let targetId = "portfolioButton" + i;
    console.log(targetId);
    let targetIdElement = document.getElementById(targetId);
    let theProjectType = targetIdElement.querySelector('.projectType');
    let theProjectGenre = targetIdElement.querySelector('.projectGenre');
    let theProjectEngine = targetIdElement.querySelector('.projectEngine');
    theProjectType.textContent = projectPages[i-1].gameType;
    theProjectGenre.textContent = projectPages[i-1].gameGenre;
    theProjectEngine.textContent = projectPages[i-1].gameEngine;
    // see if need to add the checkmark
    // let visitedBefore = localStorage.getItem(i);
    // if (visitedBefore === "true") {
    //   let thisCheckmarkId = "check" + i;
    //   let thisCheckmark = document.getElementById(thisCheckmarkId);
    //   thisCheckmark.style.display = "inline-block";
    // }
  }
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

function toggleProjects() {
  $('.projectItem').fadeToggle(100);
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
