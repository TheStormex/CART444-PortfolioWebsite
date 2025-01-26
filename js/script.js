"use strict";

let darkMode = false;
let language = "en";
// is the page a project or the main page?
let isProject = false;
let videoPlaying = false;
let currentSection;
let currentSkill = "none";
let projectPages = [];
let projectAmount = 4;
let mainPage;
let projectPage;

function createProjectPages() {
  const firstLanguage = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  language = firstLanguage.lang;
  if (language === 'fr') {
    // $('html').attr('lang','fr');
    $('[lang="en"]').hide();
  } else if (language === 'en') {
    // $('html').attr('lang','en');
    $('[lang="fr"]').hide();
  } else {
    $('[lang="fr"]').hide();
    language = "en";
    window.history.pushState('language', '', '?lang=en');
  }
  let project1 = new ProjectPage (
    "theLastHacktivists2",
    "1",
    "The Last Hacktivists 2",
    "Personal Project",
    "2D Turn-Based / Action RPG",
    "JavaScript (p5js)",
    "Role-playing-game about combining turn-based strategy and action combat",
    "The player controls a team of 4 characters and must defeat the 4 enemies in an RPG battle that alternates between a turn-based tactics phase and an action-based combat phase. In the turn-based section, the player can decide who will fight and use utility abilities. In the action-based section, the player must dodge enemies's bullets and shoot back to deal damage.",
    ["Mechanics design", "Programming (html, css, js)", "Character ability design", "User Interface design", "2D assets creation", "Music composition", "Sound effects creation"],
    ["This is an expansion upon and improvement over a university class's final project. I wanted to create a unique RPG combat system that combines the strategic decisions of turn-based games and the exciting gameplay of action games."],
    ["My main inspirations for this game are the combat systems of <a href='https://store.steampowered.com/app/391540/Undertale/' class='linkAway'>Undertale</a>  and <a href='https://store.steampowered.com/app/1671210/DELTARUNE/' class='linkAway'>Deltarune</a>, as well as top-down action games like <a href='https://store.steampowered.com/app/399640/Flamebreak/' class='linkAway'>Flamebreak</a> and <a href='https://store.steampowered.com/app/445980/Wizard_of_Legend/?curator_clanid=6869120' class='linkAway'>Wizard of Legend</a>."],
    "images/rectangle/projects/reBoot/video.mp4",
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    ["Tactics Phase", "Combat Phase", "Enemy Talents (Stun)"]);
  projectPages.push(project1);
  let project2 = new ProjectPage (
    "reBoot",
    "2",
    "Re-Boot",
    "Game Jam Game",
    "2D Puzzle Platformer",
    "Unity Engine",
    "Puzzle-platformer game about respawning and placing clones.",
    "The player controls a robot and must get to the end of each level through opening doors, stepping on switches, and respawning to leave behind a clone that can be used as platforms and to keep switches pressed. These actions require battery energy to use, which is limited, and must be managed properly.",
    ["Mechanics design", "Level design", "Music and sound creation", "Programming (debugging)", "Documentation", "Project management"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam in November 2022. I, as the designer, had a miscommunication with the lead programmer. I designed the game to cost a resource when the player jumps, but did not communicate this properly with the programmer.",
    "This caused the levels I designed to not work and I had to design new ones to fit the rules the actual game was coded to have. I learned to maintain rigorous communication with the rest of the team so everyone is always on the same page."],
    ["My main inspiration for this game is <a href='https://armorgames.com/play/1567/chronotron' class='linkAway'>Chronotron</a>, another puzzle platformer where the player robot character must use previous selves to solve the levels."],
    "images/rectangle/projects/reBoot/video.mp4",
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    ["Level 1", "Level 13", "Level 15 (Final level)"]);
  projectPages.push(project2);
  let project3 = new ProjectPage (
    "ftk",
    "3",
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
  projectPages.push(project3);
  let project4 = new ProjectPage (
    "screen",
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
  let project5 = new ProjectPage (
    "charmingOffering",
    "5",
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
  projectPages.push(project5);
  let project6 = new ProjectPage (
    "stanStopper",
    "6",
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
  projectPages.push(project6);
  generateProjects();
}

function changeSkill(skill) {
  currentSkill = skill;
  showSkills();
}

function justDanceImages(year) {
  let topImage = document.getElementById('aboutImage1');
  topImage.src = 'images/rectangle/fixed_jd' + year + '.png';
}

function showSkills() {
  if (currentSkill !== "none") {
    let topImage = document.getElementById('aboutImage1');
    let bottomImage = document.getElementById('aboutImage2');
    topImage.src = 'images/rectangle/examples/fixed_' + currentSkill + '.png';
    bottomImage.src = 'images/rectangle/examples/fixed_' + currentSkill + '2.png';
  } else {
    resetSkills();
  }
}

function resetSkills() {
  let topImage = document.getElementById('aboutImage1');
  let bottomImage = document.getElementById('aboutImage2');
  topImage.src = "images/rectangle/portrait2.png";
  bottomImage.src = "images/rectangle/game2.png";
}

function generateProjects() {
  let containerDiv = document.getElementById('portfolioSection');
  containerDiv.innerHTML = "";
  for (let i = 0; i < projectPages.length; i++) {
    let theCamelName = projectPages[i].camelName;
    let divPortfolio = document.createElement("div");
    containerDiv.appendChild(divPortfolio);
    divPortfolio.className = "portfolioGame";
    divPortfolio.onclick = function() {toProjectPage(1, theCamelName)};
    let thumbnailImage = document.createElement("img");
    thumbnailImage.className = "thumbnail";
    thumbnailImage.src = projectPages[i].images[1];
    divPortfolio.appendChild(thumbnailImage);
    let overlaySection = document.createElement("div");
    overlaySection.className = "portfolioOverlay";
    divPortfolio.appendChild(overlaySection);
    let projectTitle = document.createElement("h2");
    projectTitle.textContent = projectPages[i].name;
    overlaySection.appendChild(projectTitle);
    let tagsLineDiv = document.createElement("div");
    tagsLineDiv.className = "tagsLine";
    overlaySection.appendChild(tagsLineDiv);
    let tagType = document.createElement("h5");
    tagType.className = "tag projectType";
    tagType.textContent = projectPages[i].gameType;
    tagsLineDiv.appendChild(tagType);
    let tagGenre = document.createElement("h5");
    tagGenre.className = "tag projectGenre";
    tagGenre.textContent = projectPages[i].gameGenre;
    tagsLineDiv.appendChild(tagGenre);
    let tagEngine = document.createElement("h5");
    tagEngine.className = "tag projectEngine";
    tagEngine.textContent = projectPages[i].gameEngine;
    tagsLineDiv.appendChild(tagEngine);
  }
}

function toProjectPage(mainSection, projectName) {
  mainPage = document.getElementById('mainPage');
  projectPage = document.getElementById('projectPage');
  switch (projectName) {
    case "theLastHacktivists2":
      projectPages[0].show();
      break;
    case "reBoot":
      projectPages[1].show();
      break;
    case "ftk":
      projectPages[2].show();
      break;
    case "screen":
      projectPages[3].show();
      break;
    case "charmingOffering":
      projectPages[4].show();
      break;
    case "stanStopper":
      projectPages[5].show();
      break;
    default:
  }
  $(mainPage).fadeOut(150);
  $(projectPage).fadeIn(150);
  isProject = true;
  generateProjects();
}

function toMainPage() {
  if (isProject === true) {
    mainPage = document.getElementById('mainPage');
    projectPage = document.getElementById('projectPage');
    $(projectPage).fadeOut(150);
    $(mainPage).fadeIn(150);
    isProject = false;
    generateProjects();
  }
}

function toggleProjects() {
  $('.projectItem').fadeToggle(100);
  generateProjects();
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

function changeLanguage() {
  if (language === "en") {
    $('[lang="fr"]').show();
    $('[lang="en"]').hide();
    language = "fr";
    window.history.pushState('language', '', '?lang=fr');
  } else if (language === "fr") {
    $('[lang="en"]').show();
    $('[lang="fr"]').hide();
    language = "en";
    window.history.pushState('language', '', '?lang=en');
  }
}
