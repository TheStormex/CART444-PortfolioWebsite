"use strict";

let darkMode = false;
let language = "en";
// is the page a project or the main page?
let isProject = false;
let videoPlaying = false;
let currentSection;
let currentSkill = "none";
let currentProject = "none";
let projectPages = [];
let projectAmount = 4;
let mainPage;
let projectPage;
let exampleAudio;
let setLanguageIndex = 0;
let urlString = "http://127.0.0.1:3000/"; // https://chetan.games/ http://127.0.0.1:3000/
let theUrl = new URL(urlString);

function createProjectPages() {
  const firstLanguage = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  language = firstLanguage.lang;
  const firstProject = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  currentProject = firstProject.proj;
  if (language === 'fr') {
    // $('html').attr('lang','fr');
    $('[lang="en"]').hide();
  } else if (language === 'en') {
    // $('html').attr('lang','en');
    $('[lang="fr"]').hide();
  } else {
    $('[lang="fr"]').hide();
    language = "en";
    // window.history.pushState('language', '', '?lang=en');
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
    ["2D Turn-Based / Action RPG", "RPG de tour par tour / Action 2D"],
    // gameEngine
    ["JavaScript (p5js)", "JavaScript (p5js)"],
    // oneLine
    ["Role-playing-game about combining turn-based strategy and action combat",
    "Jeu de rôle sur la combinaison de stratégie de tour par tour et l'action-combat"],
    // description
    [
      [ "The player controls a team of 4 characters and must defeat the 4 enemies in an RPG battle that alternates between a turn-based tactics phase and an action-based combat phase. In the turn-based section, the player can decide who will fight and can use their characters' utility abilities. In the action-based section, the player must dodge enemies's bullets and shoot back to deal damage.", "<a href='https://thestormex.github.io/Dreams/' class='linkAway' target='_blank' rel='noopener noreferrer'>It can be played here.</a>"],
      ["Le joueur contrôle une équipe de 4 personnages et doit vaincre les 4 ennemis dans une bataille RPG qui alterne entre une étape de tactiques au tour par tour et une étape de combat basée sur l'action. Dans la section au tour par tour, le joueur peut décider qui combattra et peut utiliser des abilités utilitaires. Dans la section basée sur l'action, le joueur doit esquiver les balles des ennemis et riposter pour infliger des dégâts.", "<a href='https://thestormex.github.io/Dreams/' class='linkAway' target='_blank' rel='noopener noreferrer'>Ce jeu est jouable ici.</a>"]
    ],
    // responsibilities
    [
      ["Mechanics design", "Programming (html, css, js)", "Character ability design", "User Interface design", "2D assets creation", "Music composition", "Sound effects creation"],
      ["Conception de mécaniques", "Programmation (html, css, js)", "Conception des capacités de personnages", "Conception d'interface d'utilisateur", "Création des sprites 2D", "Composition de musique", "Création des sons"]
    ],
    // documentation
    [
      ["This is an expansion upon and improvement over a university class's final project. I wanted to create a unique RPG combat system that combines the strategic decisions of turn-based games and the exciting gameplay of action games."],
      ["Ceci est une extension et une amélioration sur un projet final universitaire. Je voulais créer un système de combat RPG unique qui combine les décisions stratégiques des jeux de tour par tour et le gameplay excitant des jeux d'action."]
    ],
    // inspirations
    [
      ["My main inspirations for this game are the combat systems of <a href='https://store.steampowered.com/app/391540/Undertale/' class='linkAway' target='_blank' rel='noopener noreferrer'>Undertale</a>  and <a href='https://store.steampowered.com/app/1671210/DELTARUNE/' class='linkAway' target='_blank' rel='noopener noreferrer'>Deltarune</a>, as well as top-down action games like <a href='https://store.steampowered.com/app/399640/Flamebreak/' class='linkAway' target='_blank' rel='noopener noreferrer'>Flamebreak</a> and <a href='https://store.steampowered.com/app/445980/Wizard_of_Legend/?curator_clanid=6869120' class='linkAway' target='_blank' rel='noopener noreferrer'>Wizard of Legend</a>."],
      ["Mes inspirations principales pour ce jeu sont les systèmes de combat de <a href='https://store.steampowered.com/app/391540/Undertale/' class='linkAway' target='_blank' rel='noopener noreferrer'>Undertale</a>  et <a href='https://store.steampowered.com/app/1671210/DELTARUNE/' class='linkAway' target='_blank' rel='noopener noreferrer'>Deltarune</a>, ainsi que les jeux d'action à perspective descendante comme <a href='https://store.steampowered.com/app/399640/Flamebreak/' class='linkAway' target='_blank' rel='noopener noreferrer'>Flamebreak</a> et <a href='https://store.steampowered.com/app/445980/Wizard_of_Legend/?curator_clanid=6869120' class='linkAway' target='_blank' rel='noopener noreferrer'>Wizard of Legend</a>."]
    ],
    // video
    ["images/rectangle/projects/theLastHacktivists2/video.mp4", "images/rectangle/projects/theLastHacktivists2/video.mp4"],
    // images
    ["images/rectangle/projects/theLastHacktivists2/tactics.png", "images/rectangle/projects/theLastHacktivists2/combat.png", "images/rectangle/projects/theLastHacktivists2/stun.png"],
    // imagesDesc
    [
      ["Tactics Phase", "Combat Phase", "Enemy Talents (Stun)"],
      ["Étape de Tactiques", "Étape de Combat", "Les talents des ennemis (Choc)"]
    ],
    // thumbnail index
    2
  );
  projectPages.push(project1);
  let project2 = new ProjectPage (
    // camelName
    "reBoot",
    // id
    "2",
    // name
    ["Re-Boot", "Re-Boot"],
    // gameType
    ["Game Jam Game", "Jeu de Game Jam"],
    // gameGenre
    ["Puzzle Platformer", "Jeu de plateforme et de réflexion"],
    // gameEngine
    ["Unity Engine", "Moteur Unity"],
    // oneLine
    ["Puzzle-platformer game about respawning and placing clones",
    "Jeu de plateforme-réflexion sur la réincarnation et le clonage"],
    // description
    [
      ["The player controls a robot and must get to the end of each level through opening doors, stepping on buttons, and respawning to leave behind a clone that can be used as platforms and to keep buttons pressed. These actions require battery energy to use, which must be managed properly.", "<a href='https://thestormex.github.io/Dreams/' class='linkAway' target='_blank' rel='noopener noreferrer'>It can be played here.</a>"],
      ["Le joueur contrôle un robot et doit arriver à la fin de chaque niveau en ouvrant des portes, marchant sur des boutons, et en se réincarnant pour faire apparaître un clone qui peut être utilisé comme des plteformes et pour garder les boutons appuyés. Ces actions nécessitent la consommation de l'énergie de la pile, qui doit être gérée attentivement.", "<a href='https://thestormex.github.io/Dreams/' class='linkAway' target='_blank' rel='noopener noreferrer'>Ce jeu est jouable ici.</a>"]
    ],
    // responsibilities
    [
      ["Mechanics design", "<a href='https://docs.google.com/document/d/1nAN37LlpzY5hM98jnv-2LjswkMvY1aNNaNJ78IEUHaI/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Level design</a>", "Music and sound creation", "Programming (debugging via Zoom)", "<a href='https://docs.google.com/document/d/1aDKUX745H1UY3c7J6FqN2_nQ0oYgtkdpmPw51Bn8Kos/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>", "Project management"],
      ["Conception de mécaniques", "<a href='https://docs.google.com/document/d/1nAN37LlpzY5hM98jnv-2LjswkMvY1aNNaNJ78IEUHaI/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Conception des niveaux</a>", "Création de la musique et des sons", "Programmation (débogage par Zoom)", "<a href='https://docs.google.com/document/d/1aDKUX745H1UY3c7J6FqN2_nQ0oYgtkdpmPw51Bn8Kos/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>", "Gestion du projet"]
    ],
    // documentation
    [
      ["This game was created in a team of 3 during a 3 weeks university class game jam in November 2022. The theme was rebirth and the limitation of no / little text was enforced. I created this game alongside 2 partners, Luka and Meg.",
      "We had a miscommunication early on regarding who the battery mechanic would work, causing delays. From then on, I learned to maintain rigorous communication with the rest of the team so everyone is always on the same page."],
      ["Ce jeu a été créé par une équipe de 3 pendant un game jam d'une classe universitaire en novembre 2022. Le thème était la renaissance du personnage et on avait la limitation d'avoir pas de ou peu de texte. J'ai créé ce je jeu avec mes 2 partenaires, Luka et Meg.",
      "Nous avions eu un problème de communication assez tôt sur le mécanique de la pile, causant des retards. De ce point ci, j'ai appris à maintenir une communication rigoureuse avec mes coéquipiers pour que tout le monde est sur la même page."]
    ],
    // inspirations
    [
      ["My main inspiration for this game is <a href='https://armorgames.com/play/1567/chronotron' class='linkAway' target='_blank' rel='noopener noreferrer'>Chronotron</a>, another puzzle platformer where the player robot character must use their previous selves to solve the levels."],
      ["Mon inspiration principale pour ce jeu est <a href='https://armorgames.com/play/1567/chronotron' class='linkAway' target='_blank' rel='noopener noreferrer'>Chronotron</a>, un autre jeu de plateformes et de réflexion où le personnage robot du joueur doit utiliser ses corps du passé pour résoudre les niveaux."]
    ],
    // video
    ["images/rectangle/projects/reBoot/video.mp4", "images/rectangle/projects/reBoot/video.mp4"],
    // images
    ["images/rectangle/projects/reBoot/level1.png", "images/rectangle/projects/reBoot/level13.png", "images/rectangle/projects/reBoot/level15.png"],
    // imagesDesc
    [["Level 1", "Level 13", "Level 15 (Final level)"], ["Niveau 1", "Niveau 13", "Niveau 15 (Niveau final)"]],
    // thumbnail index
    1
  );
  projectPages.push(project2);
  let project3 = new ProjectPage (
    // camelName
    "ftk",
    // id
    "3",
    // name
    ["First Turn Kill", "First Turn Kill"],
    // gameType
    ["Personal Project", "Projet Personel"],
    // gameGenre
    ["2 Player Card Game", "Jeu de cartes à 2 joueurs"],
    // gameEngine
    ["Tabletop", "Jeu de table"],
    // oneLine
    ["2-player card game about trying to win on the first turn",
     "Jeu de cartes à 2 joueurs sur l'essai de gagner au premier tour"],
    // description
    [
      ["2 players attempt to reduce each other's life from 6 to 0 as quickly as possible using cards that deal damage among other thing. The sooner a player wins, the more points they get. Afterwards, the players play another round. The first player to get 6 points win the match. Cards can be played in response to each other, leading to long 'action chains'.", "<a href='https://thestormex.github.io/Dreams/' class='linkAway' target='_blank' rel='noopener noreferrer'>It can be played here.</a>"],
      ["2 joueurs essayent de réduire les points de vie de leur adversaire de 6 à 0 le plus tôt possible en utilisant des cartes qui infligent du dégât ainsi qu'autre choses. Le plus tôt qu'un joueur gagne, le plus de points qu'il reçoive. Après, les joueurs jouent une autre fois. Le premier joueur ayant 6 points gagnent le match. Les cartes peuvent être jouées en réponse aux autres cartes, causant des 'chaînes d'actions' longues.", "<a href='https://thestormex.github.io/Dreams/' class='linkAway' target='_blank' rel='noopener noreferrer'>Ce jeu est jouable ici.</a>"]
     ],
    // responsibilities
    [
      ["Mechanics design", "Writing card texts", "Card presentation design"],
      ["Conception de mécaniques", "Écriture du texte des cartes", "Conception de la présentation des cartes"]
    ],
    // documentation
    [
      ["This game was created for fun as my first game this year. I made a prototype and tested with my friends. Over the month, I iterated and improved the game based on feedback. My <a href='https://magic.wizards.com/en' class='linkAway' target='_blank' rel='noopener noreferrer'>Magic: The Gathering</a> playing friend liked it and said it reminded him of <a href='https://mtg.wiki/page/Commander_(format)' class='linkAway' target='_blank' rel='noopener noreferrer'>cEDH</a>, and I designed future iterations based on that similarity."],
      ["J'ai créé ce jeu pour le plaisir comme mon premier jeu cette année. J'ai créé un prototype et l'ai testé avec mes amis. Au cours du mois, j'ai changé et amélioré le jeu basé sur leurs commentaires. Mon ami qui joue <a href='https://magic.wizards.com/fr' class='linkAway' target='_blank' rel='noopener noreferrer'>Magic: The Gathering</a> l'a aimé et dit que ça lui rappelle de <a href='https://mtg.wiki/page/Commander_(format)' class='linkAway' target='_blank' rel='noopener noreferrer'>cEDH</a>, alors j'ai conçu les dernières versions en me concentrant sur cette ressemblance."]
    ],
    // inspirations
    [
      ["My main inspiration for this game is <a href=' https://www.youtube.com/watch?v=Gqcbau9OoaI' class='linkAway' target='_blank' rel='noopener noreferrer'>this video</a> about a New Year event in <a href='https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/' class='linkAway' target='_blank' rel='noopener noreferrer'>Yu-Gi-Oh! Master Duel</a>, where players have low life and can win on their first turn with direct damage."],
      ["Mon inspiration principale pour ce jeu, c'est <a href=' https://www.youtube.com/watch?v=Gqcbau9OoaI' class='linkAway' target='_blank' rel='noopener noreferrer'>cette vidéo</a> au sujet d'un événement de Nouvel An dans <a href='https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/' class='linkAway' target='_blank' rel='noopener noreferrer'>Yu-Gi-Oh! Master Duel</a>, où les joueurs ont peu de points de vie et peuvent gagner au premier tour avec du dégât direct."]
    ],
    // video
    ["images/rectangle/projects/ftk/videoEN.mp4", "images/rectangle/projects/ftk/videoFR.mp4"],
    // images
    ["images/rectangle/projects/ftk/slow.png", "images/rectangle/projects/ftk/fast.png", "images/rectangle/projects/ftk/actionChain.png"],
    // imagesDesc
    [["Slow Cards", "Fast Cards", "Action Chain"], ["Cartes lentes", "Cartes rapides", "Une chaîne d'actions"]],
    // thumbnail index
    2
  );
  projectPages.push(project3);
  let project4 = new ProjectPage (
    // camelName
    "screen",
    // id
    "4",
    // name
    ["Screen", "Screen"],
    // gameType
    ["Game Jam Game", "Jeu de Game Jam"],
    // gameGenre
    ["Mystery Simulator", "Jeu de mystère et de simulation"],
    // gameEngine
    ["Unity Engine", "Moteur Unity"],
    // oneLine
    ["Point-and-click mystery game about browsing computer files and text messaging",
    "Jeu de mystère pointer-cliquer sur l'exploration des fichiers d'un ordinateur et la messagerie texte"],
    // description
    [
     ["The player is a detective who must explore the hacked laptop of a drug dealer and navigate text messages with another drug dealer by pretending to be its owner to fish out information necessary to rescue a hostage. Clues to help impersonate the laptop's owner are scattered in the files on the laptop.", "<a href='https://github.com/xCyberus/game-jam-2' class='linkAway' target='_blank' rel='noopener noreferrer'>It can be found here.</a>"],
     ["Le joueur est un détective qui doit explorer un ordinateur portable d'un trafiquant de drogues et naviguer la messagerie texte avec un autre trafiquant de drogues en faisant semblant d'être son propriétaire pour trouver l'information nécessaire pour sauver un otage. Les indices pour aider avec l'imitation du propriétaire de l'ordinateur sont dispersés dans les fichiers de l'ordinateur.", "<a href='https://github.com/xCyberus/game-jam-2' class='linkAway' target='_blank' rel='noopener noreferrer'>Ce jeu se trouve ici.</a>"]
    ],
    // responsibilities
    [
     ["Mechanics design", "Narrative design", "Music and sound creation", "<a href='https://docs.google.com/document/d/1lSIWVNVGkejzxM-e8pPjpt07cj6QM6_bLO81mNMfyt8/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>", "<a href='https://docs.google.com/document/d/10iERilieVMKl041TzV_wtX8ECAcikbXIe4b9zN1iDUk/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Writing dialogue and other texts</a>", "Project management"],
     ["Conception des mécaniques", "Conception de l'histoire", "Création de la musique et des sons", "<a href='https://docs.google.com/document/d/1lSIWVNVGkejzxM-e8pPjpt07cj6QM6_bLO81mNMfyt8/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>", "<a href='https://docs.google.com/document/d/10iERilieVMKl041TzV_wtX8ECAcikbXIe4b9zN1iDUk/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Écriture des dialogues et d'autres textes</a>", "Gestion du projet"]
    ],
    // documentation
    [
     ["This game was created in a team of 3 during a 3 weeks university class game jam in October 2022. I worked with another member of the team to come up with the story and dialogue. The original idea of the puzzles all being different each playthrough was too ambitious so we scaled it down.",
     "Our classmates found the game too confusing. Thus, a tutorial section was added and some dialogue was cut.",
     "The theme of the game jam was ‘I know what you did’ and the game must have no on-screen player character. The name has the double meaning of both a computer screen and the screening process from the gang member the player goes through."],
     ["Ce jeu a été créé par une équipe de 3 pendant un game jam d'une classe universitaire en octobre 2022. J'ai travaillé avec un autre membre de l'équipe pour inventer l'histoire et les dialogues. L'idée originale d'avoir des énigmes différentes pour chaque session était trop ambitieuse, alors nous avons réduit la portée.",
     "Le jeu était trop complex pour nos camarades de classe. Alors, une section tutoriel est ajoutée et certaines dialogues ont été coupés.",
     "Le thème du game jam était 'Je sais ce que tu as fait' et le jeu ne doit pas avoir de personnages visibles. Le nom du jeu est un jeu de mot anglais sur l'écran et le processus de dépistage du trafiquant auquel le joueur est confronté."]
    ],
    // inspirations
    [
      ["My main inspirations for this game are <a href='https://store.steampowered.com/app/417860/Emily_is_Away/' class='linkAway' target='_blank' rel='noopener noreferrer'>Emily is Away</a> and <a href='https://store.steampowered.com/app/485380/Welcome_to_the_Game/' class='linkAway' target='_blank' rel='noopener noreferrer'>Welcome to the Game</a>, other computer simulators with information gathering and/or chatroom dialogue choices."],
      ["Mes inspirations principales pour ce jeu sont <a href='https://store.steampowered.com/app/417860/Emily_is_Away/' class='linkAway' target='_blank' rel='noopener noreferrer'>Emily is Away</a> et <a href='https://store.steampowered.com/app/485380/Welcome_to_the_Game/' class='linkAway' target='_blank' rel='noopener noreferrer'>Welcome to the Game</a>, autres simulateurs d'ordinateur avec la collecte d'information et/ou des choix de dialogues par clavardage."]
    ],
    // video
    ["images/rectangle/projects/screen/video.mp4", "images/rectangle/projects/screen/video.mp4"],
    // images
    ["images/rectangle/projects/screen/spreadsheets.png", "images/rectangle/projects/screen/chatroom.png", "images/rectangle/projects/screen/diary.png"],
    // imagesDesc
    [["Spreadsheets", "Interactive chatroom", "Diary entries"], ["Feuilles de calcul", "Salle de discussion interactive", "Entrées de journal"]],
    // thumbnail index
    1
  );
  projectPages.push(project4);
  let project5 = new ProjectPage (
    // camelName
    "charmingOffering",
    // id
    "5",
    // name
    ["Charming Offering", "Charming Offering"],
    // gameType
    ["Game Jam Game", "Jeu de Game Jam"],
    // gameGenre
    ["1 Player Card Game", "Jeu de cartes à 1 joueur"],
    // gameEngine
    ["Tabletop", "Jeu de table"],
    // oneLine
    ["1-player card game about luck and superstitions",
    "Jeu de cartes à 1 joueur sur le hasard et les superstitions"],
    // description
    [
      ["The player must rely on a combination of resource management and luck to craft the perfect hand of cards to please 2 random gods of luck. Each turn, a random event occurs and the player must make a decision which affects the content of their hand.", "<a href='https://itch.io/jam/gamebling-game-jam-2/rate/1923517' class='linkAway' target='_blank' rel='noopener noreferrer'>It can be played here.</a>"],
      ["Le joueur doit compter sur une combinaison de gestion de ressources et de la chance pour bâtir la main parfaite des cartes pour plaire 2 dieux aléatoires de la chance. Chaque tour, un événement aléatoire arrive et le joueur doit prendre une décision qui affectera le contenu de leur main", "<a href='https://itch.io/jam/gamebling-game-jam-2/rate/1923517' class='linkAway' target='_blank' rel='noopener noreferrer'>Ce jeu est jouable ici.</a>"]
   ],
    // responsibilities
    [
      ["Mechanics design", "Writing card texts", "Card presentation design", 'Project Management and leadership', "<a href='https://docs.google.com/document/d/1wW5YmIjagfta-NUvJ_q5a5xmoC9wuKNb2hL5jJ4Ul4M/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>"],
      ["Conception de mécaniques", "Écriture du texte des cartes", "Conception de la présentation des cartes", 'Gestion du projet et leadership', "<a href='https://docs.google.com/document/d/1wW5YmIjagfta-NUvJ_q5a5xmoC9wuKNb2hL5jJ4Ul4M/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>"]
    ],
    // documentation
    [
      ["This game was created in a weekend-long <a href='https://milieux.concordia.ca/gamebling-game-jam-2-0-the-writing-workshop/' class='linkAway' target='_blank' rel='noopener noreferrer'>game jam</a> in February 2023. The theme was luck/chance and teams consisted of 3 people. My teammates were subsequently <a href='https://criticalgamblingstudies.com/index.php/cgs/article/view/192/135' class='linkAway' target='_blank' rel='noopener noreferrer'>interviewed regarding their experience in an academic essay</a>. As they were not from a game development background, I took the role of leader and guided the team to create a game that fit the theme and included their artistic visions. We interviewed other participants of the game jam to learn about their personal superstitions and included them into the game. As a game about chance, I used my card game experience to design the core gameplay loop that involves random events and outcomes."],
      ["Ce jeu a été créé dans un <a href='https://milieux.concordia.ca/gamebling-game-jam-2-0-the-writing-workshop/' class='linkAway' target='_blank' rel='noopener noreferrer'>game jam</a> d'une fin de semaine en février 2023. Le thème était la chance/le hasard et les équipes se composaient de 3 personnes. Mes coéquipiers étaient <a href='https://criticalgamblingstudies.com/index.php/cgs/article/view/192/135' class='linkAway' target='_blank' rel='noopener noreferrer'>interviewés après sur leur expérience dans un essai académique</a>. Puisqu'ils n'étaient pas du domaine de développement de jeux,  j'ai pris le rôle de dirigeant et j'ai guidé l'équipe pour créer un jeu qui correspondait au thème et incluait leurs visions artistiques. Nous avons questionné d'autres participants au concours pour connaître leurs superstitions personnelles et les avons incluses dans le jeu. Comme il s'agit d'un jeu de hasard, j'ai utilisé mon expérience des jeux de cartes pour concevoir la boucle principale du jeu qui comporte des événements et des résultats aléatoires."]
    ],
    // inspirations
    [
      ["My main inspiration for this game was the mobile game <a href='https://play.google.com/store/apps/details?id=edu.cornell.gdiac.underhand&hl=en_CA&pli=1' class='linkAway' target='_blank' rel='noopener noreferrer'>Underhand</a>, another game about crafting a hand of the right resources to please various Gods. My teammates also introduced the card game <a href='https://www.looneylabs.com/games/fluxx' class='linkAway' target='_blank' rel='noopener noreferrer'>FLUXX</a> as an inspiration."],
      ["Mon inspiration principale pour ce jeu est le jeu pour téléphone portable <a href='https://play.google.com/store/apps/details?id=edu.cornell.gdiac.underhand&hl=en_CA&pli=1' class='linkAway' target='_blank' rel='noopener noreferrer'>Underhand</a>, un autre jeu sur la préparation d'une main parfaite des ressources pour plaire des dieux. Mes coéquipiers ont aussi introduit le jeu de cartes <a href='https://www.looneylabs.com/games/fluxx' class='linkAway' target='_blank' rel='noopener noreferrer'>FLUXX</a> comme une inspiration."]
    ],
    // video
    ["images/rectangle/projects/charmingOffering/videoEN.mp4", "images/rectangle/projects/charmingOffering/videoFR.mp4"],
    // images
    ["images/rectangle/projects/charmingOffering/gameBoard.png", "images/rectangle/projects/charmingOffering/eventCards.png", "images/rectangle/projects/charmingOffering/godCards.png"],
    // imagesDesc
    [["Game Board", "Event Cards", "God and Resource Cards"], ["Tableau de jeu", "Cartes des Événements", "Cartes de Dieux et de Ressources"]],
    // thumbnail index
    0
  );
  projectPages.push(project5);
  let project6 = new ProjectPage (
    // camelName
    "stanStopper",
    // id
    "6",
    // name
    ["Stan Stopper", "Stan Stopper"],
    // gameType
    ["Game Jam Game", "Jeu de Game Jam"],
    // gameGenre
    ["Action Game", "Jeu d'action"],
    // gameEngine
    ["Unity Engine", "Moteur Unity"],
    // oneLine
    ["Action arcade game about protecting a singer from rabid fans",
    "Jeu d'action style arcade sur la protection d'un chanteur de ses admiratrices obsédées"],
    // description
    [
      ["The player is a bodyguard who must protect a famous singer from his overly attached fans. The player tackles and shoots T-Shirts to knock off the fans who climbed onto the stage. The goal is to help the singer stay 'alive' as long as possible.", "<a href='https://atienn.itch.io/stan-stopper' class='linkAway' target='_blank' rel='noopener noreferrer'>It can be played here.</a>"],
      ["Le joueur incarne un garde du corps qui doit protéger un chanteur célèbre de ses fans trop attachées. Le joueur pousse et tire des T-shirts pour faire tomber les fans qui sont montées sur la scène. Le but est d'aider le chanteur à rester « en vie » le plus longtemps possible.",  "<a href='https://atienn.itch.io/stan-stopper' class='linkAway' target='_blank' rel='noopener noreferrer'>Ce jeu est jouable ici.</a>"]
    ],
    // responsibilities
    [
      ["Mechanics design", "Character ability design", "2D asset creation", "Music and sound creation", "<a href='https://docs.google.com/document/d/16-bI4iewxbsSki89UGgYayjW8YKrjmW4etQ1OMybLc4/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>"],
      ["Conception des mécaniques", 'Conception des capacités des personnages', 'Création des sprites 2D', 'Création de la musique et des sons', "<a href='https://docs.google.com/document/d/16-bI4iewxbsSki89UGgYayjW8YKrjmW4etQ1OMybLc4/edit?tab=t.0' class='linkAway' target='_blank' rel='noopener noreferrer'>Documentation</a>"]
    ],
    // documentation
    [
      ["This game was created in a team of 3 during a 3 weeks university class game jam in November and December 2022. The theme was unconditional love and we wanted to do something unique, so we made a classic style action game. The creation process was smooth, though we encountered 2 minor issues.",
    'We needed more sprites than expected due to the variety of enemy types so I helped take over and make some of them. We were also concerned about the different enemy types having different skin colours. We could accidentally depict racial stereotypes, like the dark-skinned fan being faster and stronger. For this reason, we settled on the fans having similar skin colours but vastly different clothes.'],
      ["Ce jeu été créé par une équipe de 3 pendant un game jam d'une classe universitaire en novembre et décembre 2022. Le thème était l'amour inconditionnel et nous voulions faire quelque chose unique, alors nous avions fait un jeu d'action classique. Le processus de création s'est déroulé avec seulement 2 problèmes.",
      "Nous avions besoin de plus de sprites que prévu à cause de la variété de types d'ennemies alors j'ai aidé avec la création de certains. Nous étions aussi préoccupés avec la possibilité de représenter des stéréotypes raciaux avec les ennemies ayant des couleurs de peaux différentes, comme si la fille avec la peau sombre était plus rapide et forte. Pour cette raison, nous avions décidé qu'elles doivent avoir des couleurs de peaux similaires mais vêtements différents."]
    ],
    // inspirations
    [
      ["Our team did not have a specific game in mind when making this game. However, the way enemies are defeated (by pushing them off screen) have been compared to the <a href='https://nintendo.fandom.com/wiki/Super_Smash_Bros._(series)' class='linkAway' target='_blank' rel='noopener noreferrer'>Super Smash Bros.</a> games by one of the playtesters."],
      ["Notre équipe n'a pas de jeu spécifique comme inspiration quand on a créé ce jeu. Cependant, la façon dont les ennemies sont défaites (en les poussant hors écran) a été comparée aux jeux de la série <a href='https://nintendo.fandom.com/wiki/Super_Smash_Bros._(series)' class='linkAway' target='_blank' rel='noopener noreferrer'>Super Smash Bros.</a> par un de nos testeurs."]
    ],
    // video
    ["images/rectangle/projects/stanStopper/video.mp4", "images/rectangle/projects/stanStopper/video.mp4"],
    // images
    ["images/rectangle/projects/stanStopper/inAction.png", "images/rectangle/projects/stanStopper/explanation.png", "images/rectangle/projects/stanStopper/defeat.PNG"],
    // imagesDesc
    [["Bodyguard Vs. Fans", "Explanation Screen", "Defeat Screen"], ["Le garde du corps contre les fans", "Écran d'explications", "Écran de défaite"]],
    // thumbnail index
    0
  );
  projectPages.push(project6);
  generateProjects();
  if (currentProject != null) {
    toProjectPage(1, currentProject);
  } else {
    isProject = true;
    toMainPage();
  }
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
  bottomImage.src = "images/rectangle/bottomImage.png";
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
      englishPart.forEach((item)=>{
        let li = document.createElement("li");
         li.lang = "en";
         li.innerHTML = item;
         parentSection.appendChild(li);
      })
      frenchPart.forEach((item)=>{
        let li = document.createElement("li");
         li.lang = "fr";
         li.innerHTML = item;
         parentSection.appendChild(li);
      })
      break;
    case "paragraph":
      englishPart.forEach((item)=>{
        let paragraph = document.createElement("p");
         paragraph.lang = "en";
         paragraph.innerHTML = item;
         parentSection.appendChild(paragraph);
      })
      frenchPart.forEach((item)=>{
        let paragraph = document.createElement("p");
         paragraph.lang = "fr";
         paragraph.innerHTML = item;
         parentSection.appendChild(paragraph);
      })
      break;
    case "video":
      let videoEN = document.createElement("video");
      let videoENSource = document.createElement('source');
      let videoFR = document.createElement("video");
      let videoFRSource = document.createElement('source');
      videoENSource.type = "video/mp4";
      videoENSource.src = englishPart;
      videoEN.id = 'projectVideoEN';
      videoEN.classList.add("projectVideo");
      videoEN.controls = true;
      videoEN.appendChild(videoENSource);
      videoEN.lang = 'en';
      videoFRSource.type = "video/mp4";
      videoFRSource.src = frenchPart;
      videoFR.id = 'projectVideoFR';
      videoFR.classList.add("projectVideo");
      videoFR.controls = true;
      videoFR.lang = 'fr';
      videoFR.appendChild(videoFRSource);
      parentSection.appendChild(videoEN);
      parentSection.appendChild(videoFR);
      break;
    default: console.log('error');
  }
  // refreshSameLanguage();
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
    thumbnailImage.src = projectPages[i].images[projectPages[i].thumbnailIndex];
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
  currentProject = projectName;
  // stop montage video
  let theMontageVideo = document.getElementById('videoFull');
  if (typeof theMontageVideo !== 'undefined' && theMontageVideo !== null) {
    theMontageVideo.pause();
    theMontageVideo.currentTime = 0;
    finishVideo();
  }
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
    // stop videos
    let theVideoEN = document.getElementById('projectVideoEN');
    let theVideoFR = document.getElementById('projectVideoFR');
    if (typeof theVideoEN !== 'undefined' && typeof theVideoFR !== 'undefined' && theVideoEN !== null && theVideoFR !== null) {
      theVideoEN.pause();
      theVideoEN.currentTime = 0;
      theVideoFR.pause();
      theVideoFR.currentTime = 0;
    }
    mainPage = document.getElementById('mainPage');
    projectPage = document.getElementById('projectPage');
    $(projectPage).fadeOut(150);
    $(mainPage).fadeIn(150);
    isProject = false;
    currentProject = 'none';
    generateProjects();
    window.history.replaceState(null, '', window.location.pathname);
    theUrl.href = urlString;
    refreshSameLanguage();
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

// if the language stays the same but new items are spawned and the non-used language needs to be
// removed
// set volume to low
function refreshSameLanguage() {
  exampleAudio = document.getElementById('song');
  exampleAudio.volume = 0.2;
  if (language === "en") {
    $('[lang="en"]').show();
    $('[lang="fr"]').hide();
    addURLParameter("lang", "en");
  } else if (language === "fr") {
    $('[lang="fr"]').show();
    $('[lang="en"]').hide();
    addURLParameter("lang", "fr");
  }

}

function changeLanguage() {
  if (isProject === true) {
    // stop videos
    let theVideoEN = document.getElementById('projectVideoEN');
    let theVideoFR = document.getElementById('projectVideoFR');
    if (typeof theVideoEN !== 'undefined' && typeof theVideoFR !== 'undefined' && theVideoEN !== null && theVideoFR !== null) {
      theVideoEN.pause();
      theVideoEN.currentTime = 0;
      theVideoFR.pause();
      theVideoFR.currentTime = 0;
    }
  }
  if (language === "en") {
    $('[lang="fr"]').show();
    $('[lang="en"]').hide();
    language = "fr";
    addURLParameter("lang", "fr");
  } else if (language === "fr") {
    $('[lang="en"]').show();
    $('[lang="fr"]').hide();
    language = "en";
    addURLParameter("lang", "en");
  }
}

function addURLParameter(parameter, value) {
  theUrl.searchParams.set(parameter, value);
  history.pushState({}, null, theUrl.toString());
}
