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
let setLanguageIndex = 0;

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
    // camelName
    "theLastHacktivists2",
    // id
    "1",
    // name
    ["The Last Hacktivists 2", "The Last Hacktivists 2"],
    // gameType
    ["Personal Project", "Projet Personel"],
    // gameGenre
    ["2D Turn-Based / Action RPG", "RPG au tour par tour / Action 2D"],
    // gameEngine
    ["JavaScript (p5js)", "JavaScript (p5js)"],
    // oneLine
    ["Role-playing-game about combining turn-based strategy and action combat",
    ""],
    // description
    ["The player controls a team of 4 characters and must defeat the 4 enemies in an RPG battle that alternates between a turn-based tactics phase and an action-based combat phase. In the turn-based section, the player can decide who will fight and use utility abilities. In the action-based section, the player must dodge enemies's bullets and shoot back to deal damage.",
    ""],
    // responsibilities
    [["Mechanics design", "Programming (html, css, js)", "Character ability design", "User Interface design", "2D assets creation", "Music composition", "Sound effects creation"],
    ["Design de mécaniques", "Programming (html, css, js)", "Character ability design", "User Interface design", "2D assets creation", "Music composition", "Sound effects creation"]],
    // documentation
    [["This is an expansion upon and improvement over a university class's final project. I wanted to create a unique RPG combat system that combines the strategic decisions of turn-based games and the exciting gameplay of action games."],
    ["fr", "fr2"]],
    // inspirations
    [["My main inspirations for this game are the combat systems of <a href='https://store.steampowered.com/app/391540/Undertale/' class='linkAway'>Undertale</a>  and <a href='https://store.steampowered.com/app/1671210/DELTARUNE/' class='linkAway'>Deltarune</a>, as well as top-down action games like <a href='https://store.steampowered.com/app/399640/Flamebreak/' class='linkAway'>Flamebreak</a> and <a href='https://store.steampowered.com/app/445980/Wizard_of_Legend/?curator_clanid=6869120' class='linkAway'>Wizard of Legend</a>."],
    ["fr", "fr2"]],
    // video
    "images/rectangle/projects/reBoot/video.mp4",
    // images
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    // imagesDesc
    [["Tactics Phase", "Combat Phase", "Enemy Talents (Stun)"], ["Étape de Tactiques", "Étape de Combat", "Les talents des ennemies (Choc)"]]);
  projectPages.push(project1);
  let project2 = new ProjectPage (
    "reBoot",
    "2",
    ["Re-Boot", "Re-Boot"],
    ["Game Jam Game", "Jeu de Game Jam"],
    ["Puzzle Platformer", "Jeu de plateforme et de réflexion"],
    ["Unity Engine", "Moteur Unity"],
    ["Puzzle-platformer game about respawning and placing clones.",
    ""],
    ["The player controls a robot and must get to the end of each level through opening doors, stepping on switches, and respawning to leave behind a clone that can be used as platforms and to keep switches pressed. These actions require battery energy to use, which is limited, and must be managed properly.",
    ""],
    ["Mechanics design", "Level design", "Music and sound creation", "Programming (debugging)", "Documentation", "Project management"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam in November 2022. The theme was rebirth and the limitation of no / little text was enforced. I created this game alongside 2 partners, Luka and Meg. I learned to maintain rigorous communication with the rest of the team so everyone is always on the same page."],
    ["My main inspiration for this game is <a href='https://armorgames.com/play/1567/chronotron' class='linkAway'>Chronotron</a>, another puzzle platformer where the player robot character must use their previous selves to solve the levels."],
    "images/rectangle/projects/reBoot/video.mp4",
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    [["Level 1", "Level 13", "Level 15 (Final level)"], ["Niveau 1", "Niveau 13", "Niveau 15 (Niveau final)"]]);
  projectPages.push(project2);
  let project3 = new ProjectPage (
    "ftk",
    "3",
    ["First Turn Kill", "First Turn Kill"],
    ["Personal Project", "Projet Personel"],
    ["2 Player Card Game", "Jeu de cartes à 2 joueurs"],
    ["Tabletop", "Jeu de table"],
    "Observe, plan, aim, and fire! Knock down all the pins with balls!",
    "The player must use a limited amount of light and heavy balls to destroy all the bowling pins in the area that are stacked onto or behind blocks of different types.  Look through 3 camera angles to find the best way to finish the level.",
    ["Mechanics design", "Level design", "UI design", "Programming", "Music and sound creation", "Documentation", "Project management"],
    ["This project was created in about three weeks in 2021. The four levels were created first, but after playtesting, it was found that the game was not easy to understand. For this reason, I added the three tutorial levels to 'breakdown' the mechanics of the game.",
    "The new version with the tutorial levels was liked by the teacher and students for being much clearer in helping teach players how it works. I learned that just because I find something obvious, it does not mean that players would, so step-by-step tutorialization is important for any game."],
    ["This game was my final project for my introduction to Unity class. Retroactively, I improved the UI and added more levels.",
    "My main inspirations for this game are <a href='https://www.angrybirds.com/' class='linkAway'>Angry Birds</a> and the <a href='https://www.wizard101central.com/wiki/Location:Pet_Mini_Games' class='linkAway'>Cannon Game</a> in the MMORPG <a href='https://www.wizard101.com/game' class='linkAway'>Wizard101</a>, games where you shoot a projectile to demolish structures, plan how to use each projectile, and have specific targets to aim for."],
    "images/rectangle/projects/breakdownBowling/video.mp4",
    ["images/rectangle/projects/breakdownBowling/aim.png", "images/rectangle/projects/breakdownBowling/hitting.png", "images/rectangle/projects/breakdownBowling/backview.png"],
    [["Level 1", "Level 13", "Level 15 (Final level)"], ["Niveau 1", "Niveau 13", "Niveau 15 (Niveau final)"]]);
  projectPages.push(project3);
  let project4 = new ProjectPage (
    "screen",
    "4",
    ["Screen", "Screen"],
    ["Game Jam Game", "Jeu de Game Jam"],
    ["Mystery Simulator", "Jeu de mystère et de simulation"],
    ["Unity Engine", "Moteur Unity"],
    ["Point-and-click Mystery game about browsing computer files and text messaging", ""],
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
    ["Charming Offering", "Charming Offering"],
    ["Game Jam Game", "Jeu de Game Jam"],
    ["2 Player Card Game", "Jeu de cartes à 2 joueurs"],
    ["Tabletop", "Jeu de table"],
    "Save the hostage, detective! Catfish a gang member into giving you their location!",
    "The player is a detective who has hacked into the laptop of a gang member. They must pretend to be that gang member and catfish  another to reveal the location of a hostage. The player must explore the files on the computer to learn what the gang member knows to make their act convincing.",
    ["Mechanics design", "Narrative design", "Music and sound creation", "Documentation", "Writing dialogue and other texts", "Project management"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam in October 2022. I worked with another member of the team to come up with the story and dialogue. The original idea of the puzzles all being different each playthrough was too ambitious so we scaled it down.",
    "After playtesting, it was found that the game was confusing. The hacker character was added, dialogue was cut, and more tutorialization was placed in the beginning."],
    ["The theme of the game jam was ‘I know what you did’ and the game must have no on-screen player character. The name has the double meaning of both a computer screen and the screening process from the gang member the player goes through.",
    "My main inspirations for this game are <a href='https://store.steampowered.com/app/417860/Emily_is_Away/' class='linkAway'>Emily is Away</a> and <a href='https://store.steampowered.com/app/485380/Welcome_to_the_Game/' class='linkAway'>Welcome to the Game</a>, other computer simulators with information gathering and/or chatroom dialogue choices."],
    "images/rectangle/projects/screen/video.mp4",
    ["images/rectangle/projects/screen/spreadsheets.png", "images/rectangle/projects/screen/chatroom.png", "images/rectangle/projects/screen/diary.png"],
    [["Level 1", "Level 13", "Level 15 (Final level)"], ["Niveau 1", "Niveau 13", "Niveau 15 (Niveau final)"]]);
  projectPages.push(project5);
  let project6 = new ProjectPage (
    "stanStopper",
    "6",
    ["Stan Stopper", "Stan Stopper"],
    ["Game Jam Game", "Jeu de Game Jam"],
    ["Action Game", "Jeu d'action"],
    ["Unity Engine", "Moteur Unity"],
    "Action arcade game about protecting a singer from rabid fans",
    "The player is a detective who has hacked into the laptop of a gang member. They must pretend to be that gang member and catfish  another to reveal the location of a hostage. The player must explore the files on the computer to learn what the gang member knows to make their act convincing.",
    ["Mechanics design", "Narrative design", "Music and sound creation", "Documentation", "Writing dialogue and other texts", "Project management"],
    ["This game was created in a team of 3 during a 3 weeks university class game jam in October 2022. I worked with another member of the team to come up with the story and dialogue. The original idea of the puzzles all being different each playthrough was too ambitious so we scaled it down.",
    "After playtesting, it was found that the game was confusing. The hacker character was added, dialogue was cut, and more tutorialization was placed in the beginning."],
    ["The theme of the game jam was ‘I know what you did’ and the game must have no on-screen player character. The name has the double meaning of both a computer screen and the screening process from the gang member the player goes through.",
    "My main inspirations for this game are <a href='https://store.steampowered.com/app/417860/Emily_is_Away/' class='linkAway'>Emily is Away</a> and <a href='https://store.steampowered.com/app/485380/Welcome_to_the_Game/' class='linkAway'>Welcome to the Game</a>, other computer simulators with information gathering and/or chatroom dialogue choices."],
    "images/rectangle/projects/screen/video.mp4",
    ["images/rectangle/projects/screen/spreadsheets.png", "images/rectangle/projects/screen/chatroom.png", "images/rectangle/projects/screen/diary.png"],
    [["Bodyguard Vs. Fans", "Explanation Screen", "Defeat Screen"], ["Le garde du corps contre les admirateurs", "Écran d'explications", "Écran de défaite"]]);
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

function makeLanguageSpans(parentSection, englishPart, frenchPart, type) {
  parentSection.textContent = "";
  let englishSpan = document.createElement("span");
  let frenchSpan = document.createElement("span");
  englishSpan.lang = "en";
  frenchSpan.lang = "fr";
  switch (type) {
    case "normal":
      englishSpan.textContent = englishPart;
      frenchSpan.textContent = frenchPart;
      parentSection.appendChild(englishSpan);
      parentSection.appendChild(frenchSpan);
      break;
    case "list":
    console.log("list used");
      englishPart.forEach((item)=>{
        let li = document.createElement("li");
         li.lang = "en";
         li.innerText = item;
         parentSection.appendChild(li);
      })
      frenchPart.forEach((item)=>{
        let li = document.createElement("li");
         li.lang = "fr";
         li.innerText = item;
         parentSection.appendChild(li);
      })
      break;
    case "paragraph":
      englishPart.forEach((item)=>{
        let paragraph = document.createElement("p");
         paragraph.lang = "en";
         paragraph.innerText = item;
         parentSection.appendChild(paragraph);
      })
      frenchPart.forEach((item)=>{
        let paragraph = document.createElement("p");
         paragraph.lang = "fr";
         paragraph.innerText = item;
         parentSection.appendChild(paragraph);
      })
      break;
    default: console.log('error');
  }
  refreshSameLanguage();
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
    makeLanguageSpans(projectTitle, projectPages[i].name[0], projectPages[i].name[1], "normal");
    overlaySection.appendChild(projectTitle);
    let tagsLineDiv = document.createElement("div");
    tagsLineDiv.className = "tagsLine";
    overlaySection.appendChild(tagsLineDiv);
    let tagType = document.createElement("h5");
    tagType.className = "tag projectType";
    makeLanguageSpans(tagType, projectPages[i].gameType[0], projectPages[i].gameType[1], "normal");
    tagsLineDiv.appendChild(tagType);
    let tagGenre = document.createElement("h5");
    tagGenre.className = "tag projectGenre";
    makeLanguageSpans(tagGenre, projectPages[i].gameGenre[0], projectPages[i].gameGenre[1], "normal");
    tagsLineDiv.appendChild(tagGenre);
    let tagEngine = document.createElement("h5");
    tagEngine.className = "tag projectEngine";
    makeLanguageSpans(tagEngine, projectPages[i].gameEngine[0], projectPages[i].gameEngine[1], "normal");
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

// if the language stays the same but new items are spawned and the non-used language needs to be
// removed
function refreshSameLanguage() {
  if (language === "en") {
    $('[lang="en"]').show();
    $('[lang="fr"]').hide();
  } else if (language === "fr") {
    $('[lang="fr"]').show();
    $('[lang="en"]').hide();
  }
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
