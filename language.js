var data = {
  "english":
  {
    "welcome" : "Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",

    "information" : "This site was entirely created using <code>HTML</code>, <code>CSS</code> and <code>Javascript</code> without using any library or framework. This site contains a large number of features (hidden animations, secret themes, etc.) but also a well-hidden <code>easter egg</code> that only developers can find. Good discovery!",

    "btnpopup" : "Continue",

    "help" : `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Guillaume REYGNER",<br>
      &nbsp;&nbsp;&nbsp;"formation": "Developer 1200h in 6 months - The Hacking Project",<br>
      &nbsp;&nbsp;&nbsp;"language" : "JS, SCSS, HTML, CSS, Ruby, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Rails",<br>
      &nbsp;&nbsp;&nbsp;"tools": "GitHub, Heroku, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Lyon, France"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">June 2016 - June 2018</td>
    <td>Klevery</td>
    <td>Co-founder</td>
    <td>Routing optimization software for professionals with high delivery or travel activity.</td>
  </tr>
  <tr>
    <td class="center">Sept 2017 - Sept 2018</td>
    <td>Credit Agricole Centre-Est</td>
    <td>Expert risk analyst</td>
    <td>Feasibility study of files, frequent contact with project managers in the field, legal study of bilateral/arranger contracts.</td>
  </tr>
  <tr>
    <td class="center">Jan 2019 - Jul 2021</td>
    <td>CIC - Lyonnaise de Banque</td>
    <td>Professional Business Manager</td>
    <td>Accompaniment of the entrepreneur on his personal and professional projects, financing of needs, accompaniment on the optimization of the balance sheet and projects.</td>
  </tr>
  <tr>
    <td class="center">Dec 2019 - Today</td>
    <td>Overstats</td>
    <td>Co-founder</td>
    <td>Overstats is a team management tool for the game Overwatch developed by Blizzard used by over 100 teams around the world. Management of partnerships and development of the application.</td>
  </tr>
  <tr>
    <td class="center">August 2021 - Today</td>
    <td>Startup101</td>
    <td>Editor</td>
    <td>Writer for the Startup101 newsletter which explores the beginnings of today's great startups such as Facebook, Instagram, Google and many more.</td>
  </tr>`,

  "cv" : `The resume upload will begin.`,

  "redirectLinkedin" : `You will be redirected to Linkedin.`,

  "redirectGithub" : `You will be redirected to Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport": "Volleyball, Cycling",<br>
    &nbsp;&nbsp;&nbsp;"Programming": "JS, Rails",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Entrepreneurship, Photography, Reading autobiography, Design, Marketing"<br>
  }`,

  "project" : `<table class="result">
  <tr>
    <th>index</th>
    <th>Name</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>As a team?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Catshop</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>Cat Photo Selling Marketplace</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/CatShop" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">2</td>
    <td class="center">Kata Temple</td>
    <td class="center">HTML CSS JS Heroku</td>
    <td>30-day challenge to improve in technical test with Kata Temple. Attempt to complete temple sensei katas from level 8kyu to 4kyu in 30 days - Ruby Edition</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Kata-Temple" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">3</td>
    <td class="center">ScoreIT</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>The objective of ScoreIT is to offer a tool for creating credibility for start-up projects aimed at raising funds from investors or financial institutions. We offer a fully online platform allowing startup founders to obtain a rating on their project, thus giving it a credibility score in order to reassure future potential investors.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/ScoreIT" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">4</td>
    <td class="center">Monolith Arena</td>
    <td class="center">HTML CSS JS</td>
    <td>48h to create a 2d game on the theme of a battle arena using Javascript classes</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Monolith-Arena" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">5</td>
    <td class="center">My Dark Theme.JS</td>
    <td class="center">HTML CSS JS</td>
    <td>60 seconds to reproduce as many emoji as possible with your face! Use of webcam and face detection thanks to AI!</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/MyDarkTheme.JS" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">6</td>
    <td class="center">EmojiFace</td>
    <td class="center">HTML CSS JS</td>
    <td>Dark mode generator with customization of dark mode colors and possibility to copy the code to add it directly to your site. To make it work you have to vary the colors in CSS.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/EmojiFace" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">7</td>
    <td class="center">Portfolio Terminal</td>
    <td class="center">HTML CSS JS</td>
    <td>Presentation of my portfolio as a terminal. Integration of autocomplete, command history, etc. The latter can be used as a real terminal.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Portfolio-Terminal" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">8</td>
    <td class="center">YouLearn</td>
    <td class="center">React JS SCSS</td>
    <td>Turns any YouTube video into an e-learning platform with the ability to view chapters in the video, take notes with associated timestamps, etc.
    - Under development to integrate a Rails API backend to record information.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/YouLearn" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">9</td>
    <td class="center">FindHouse</td>
    <td class="center">React JS CSS Rails API</td>
    <td>Creation of a real estate sales platform with a React JS frontend and a Rails API backend.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/FindHouse" target="blank">Link</a></td>
  </tr>
  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div>my-projects[6].website</div>
    <div>my-projects[7].website</div>
    <div><code>themes</code></div>
  `,

  "ls2" : `
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div>my-projects[5].website</div>
    <div>my-projects[6].website</div>
    <div>my-projects[7].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

  "congratulation" : `Congratulations you have found the <code>.secret</code> folder.`,

  "bodymail" : `mailto:reygner0224@gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Guillaume REYGNER > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time !`

  },








  "french":
  {
    "welcome" : "Bienvenue sur mon Portfolio ! Pour afficher les commandes disponibles tapez <code>help</code>. Pour valider chaque commande appuyez sur <em>Entrer</em>, vous pouvez utiliser la touche <em>Tabulation</em> afin de vous aider à compléter une commande.",
    
    "information" : "Ce site a entièrement été réalisé sous <code>HTML</code>, <code>CSS</code> et <code>Javascript</code> sans faire appel à la moindre librairie ou framework. Ce site renferme un grand nombre de fonctionnalités (animations cachées, thèmes secrets, etc.) mais également un <code>easter egg</code> bien caché que seul les développeurs pourront trouver. Bonne découverte!",

    "btnpopup" : "Continuer",

    "help" : `<li><code>a-propos</code> : Affiche les informations me concernant</li>
    <li><code>clear</code> : Nettoie le terminal</li>
    <li><code>experiences</code> : Affiche la liste de mes expériences</li>
    <li><code>get cv</code> : Télécharge mon CV</li>
    <li><code>get linkedin</code> : Lien vers mon Linkedin</li>
    <li><code>get github</code> : Lien vers mon Github</li>
    <li><code>help</code> : Affiche la liste des commandes</li>
    <li><code>passions</code> : Affiche la liste de mes passes temps</li>
    <li><code>mes-projets</code> : Affiche la liste de mes projets personnels</li>
    <li><code>themes</code> : Change le theme du terminal</li>
    <li><em>Vous pouvez utiliser la touche TAB afin de compléter une ligne de commande</em></li>
    <li><em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Guillaume REYGNER",<br>
      &nbsp;&nbsp;&nbsp;"formation" : "Developpeur 1200h en 6 mois - The Hacking Project",<br>
      &nbsp;&nbsp;&nbsp;"language" : "JS, SCSS, HTML, CSS, Ruby, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Rails",<br>
      &nbsp;&nbsp;&nbsp;"tools" : "GitHub, Heroku, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills" : "Methode Agile, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE" : "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Lyon, France"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Entreprise</th>
    <th>Poste</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">Juin 2016 - Juin 2018</td>
    <td>Klevery</td>
    <td>Co-fondateur</td>
    <td>Logiciel d'optimisation de tournée à destination des professionnels disposant d'une forte activité de livraison ou de déplacement.</td>
  </tr> 
  <tr>
    <td class="center">Sept 2017 - Sept 2018</td>
    <td>Crédit Agricole Centre-Est</td>
    <td>Expert analyste risque</td>
    <td>Etude de faisabilité des dossiers, contact fréquent avec les chargés d’affaires sur le terrain, étude juridique des contrats bilatéral/arrangeur.</td>
  </tr> 
  <tr>
    <td class="center">Janv 2019 - Juil 2021</td>
    <td>CIC - Lyonnaise de Banque</td>
    <td>Chargé d'Affaires Professionnels</td>
    <td>Accompagnement du chef d'entreprise sur ses projets personnels et professionnels, financement des besoins, accompagnement sur l'optimisation du bilan et des projets.</td>
  </tr>     
  <tr>
    <td class="center">Dec 2019 - Today</td>
    <td>Overstats</td>
    <td>Co-fondateur</td>
    <td>Overstats est un outil de gestion d'équipe pour le jeu Overwatch développé par Blizzard utilisé par plus de 100 équipes à travers le monde. Gestion des partenariats et du dévelopment de l'application.</td>
  </tr> 
  <tr>
    <td class="center">Aout 2021 - Today</td>
    <td>Startup101</td>
    <td>Rédacteur</td>
    <td>Redacteur pour la newsletter Startup101 qui explore les débuts des grandes startup d’aujourd’hui tels que Facebook, Instagram, Google et bien d’autres.</td>
  </tr>`,

  "cv" : `Le téléchargement du CV va commencer.`,

  "redirectLinkedin" : `Vous allez être redirigé vers Linkedin.`,

  "redirectGithub" : `Vous allez être redirigé vers Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport" : "Volley-ball, Vélo",<br>
    &nbsp;&nbsp;&nbsp;"Programmation" : "JS, Rails",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Entrepreneuriat, Photographie, Lecture autobiographie, Design, Marketing"<br>
  }`,

  "project" : `<table class="result">
  <tr>
    <th>index</th>
    <th>Nom</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>En equipe?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Catshop</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>Marketplace de vente de photo de chat</td>
    <td class="center">Oui</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/CatShop" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">2</td>
    <td class="center">Kata Temple</td>
    <td class="center">HTML CSS JS Heroku</td>
    <td>Défi de 30 jours pour s'améliorer en test technique avec Kata Temple. Tente de terminer les katas du sensei du temple du niveau 8kyu à 4kyu en 30 jours - Ruby Edition</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Kata-Temple" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">3</td>
    <td class="center">ScoreIT</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>L’objectif de ScoreIT est de proposer un outil de crédibilisation des projets de startups dont l’optique serait de lever des fonds auprès d’investisseurs ou d’établissements financiers. Nous proposons une plateforme entièrement en ligne permettant aux fondateurs de startups de pouvoir obtenir une notation sur leur projet permettant ainsi de donner un score de crédibilité à ce dernier dans le but de rassurer les futurs potentiels investisseurs.</td>
    <td class="center">Oui</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/ScoreIT" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">4</td>
    <td class="center">Monolith Arena</td>
    <td class="center">HTML CSS JS</td>
    <td>48h pour créer un jeu en 2d sur le thème d'une arène de combat en utilisant les classes de Javascript</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Monolith-Arena" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">5</td>
    <td class="center">My Dark Theme.JS</td>
    <td class="center">HTML CSS JS</td>
    <td>60 secondes pour reproduire un maximum d'emoji avec votre visage ! Utilisation de la webcam et de la détection de visage grâce à l IA !</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/MyDarkTheme.JS" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">6</td>
    <td class="center">EmojiFace</td>
    <td class="center">HTML CSS JS</td>
    <td>Generateur de mode sombre avec personnalisation des couleurs du mode sombre et possibilité de copier le code pour l ajouter directement sur son site. Pour le faire fonctionner il faut variabiliser les couleurs sous CSS.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/EmojiFace" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">7</td>
    <td class="center">Portfolio Terminal</td>
    <td class="center">HTML CSS JS</td>
    <td>Présentation de mon portefolio sous forme de terminal. Intégration de l'autocomplétion, de l'historique des commandes, etc. Ce dernier peut s'utiliser comme un vrai terminal.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Portfolio-Terminal" target="blank">Lien</a></td>
  </tr>
  <tr>
    <td class="center">8</td>
    <td class="center">YouLearn</td>
    <td class="center">React JS</td>
    <td>Transforme n'importe quelle vidéo YouTube en une plateforme de e-learning avec la possibilité de voir les chapitres de la video, prendre des notes avec des timestamps associés, etc.
    - En cours de développement afin d'intégrer un backend Rails API pour enregistrer les informations.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/YouLearn" target="blank">Lien</a></td>
  </tr>
  <tr>
  <td class="center">9</td>
  <td class="center">FindHouse</td>
  <td class="center">React JS CSS Rails API</td>
  <td>Création d'une plateforme de vente de bien immobilier avec un frontend React JS et un backend Rails API.</td>
  <td class="center">Oui</td>
  <td class="center"><a href="https://github.com/guillaume-rygn/FindHouse" target="blank">Link</a></td>
</tr>
  </table><br>
  <p class="result"><em>Vous pouvez voir le site rattaché au projet en utilisant la commande</em> <code>mes-projets[index].website</code><em>, index étant le numéro associé au projet.</em></p>`,

  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">Vous venez de desactiver le design glassmorphisme pour activer ce dernier utilisez la commande <code>glassmophism</code>.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">Vous venez d'activer le design glassmorphisme pour désactiver ce dernier utilisez la commande <code>glassmophism</code>.`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.</p></span>`,

  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Tapez la commande <code>themes</code> pour afficher la liste des themes disponibles.</p><br>
  <p class="result">/!\\ pour revenir sur le menu principal veuillez utiliser la commande <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">Vous allez être redirigé vers le site web du projet.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>a-propos</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get cv</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>mes-projets</div>
    <div>mes-projets[1].website</div>
    <div>mes-projets[2].website</div>
    <div>mes-projets[3].website</div>
    <div>mes-projets[4].website</div>
    <div>mes-projets[5].website</div>
    <div>mes-projets[6].website</div>
    <div>mes-projets[7].website</div>
    <div><code>themes</code></div>`,

  "ls2" : `
    <div>a-propos</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get cv</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>mes-projets</div>
    <div>mes-projets[1].website</div>
    <div>mes-projets[2].website</div>
    <div>mes-projets[3].website</div>
    <div>mes-projets[4].website</div>
    <div>mes-projets[5].website</div>
    <div>mes-projets[6].website</div>
    <div>mes-projets[7].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code> : Active l animation du background</li>
      <li><code>remove</code> : Desactive l animation du background</li>
      <li><code>glassmorphism</code> : Active/desactive l animation glassmorphisme sur le theme</li>
      <li><code>secrets</code> : Active les themes secrets</li>
      <li>/!\\ Ces commandes ne font pas parties de l easter egg a trouver. Bon courage vous y êtes presque!</li>`,

  "congratulation" : `Bravo vous avez trouvé le dossier <code>.secret</code>.`,

  "bodymail" : `mailto:reygner0224@gmail.com?subject=Votre portfolio est incroyable, êtes-vous à l'écoute d'opportunité ?&body=Guillaume REYGNER > Bonjour à vous qui avez trouvé mon easter egg, Je suis à l'écoute d'opportunités professionnelles donc n'hésitez pas à me contacter en m'envoyant ce courriel avec votre proposition. Je vous recontacterai pour que nous organisions un entretien téléphonique. Merci pour votre temps !`

  }
}

let welcome = document.getElementById("welcome");
let popupcontent = document.getElementsByClassName("popupinfo")[0];
let french = document.getElementById("french");
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage(){
  if(localStorage.getItem("language") === null){
    localStorage.setItem('language', "english");
  } 
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  popupcontent.innerHTML = data[language].information;
  btnPopup.innerHTML = data[language].btnpopup;
  document.querySelectorAll(".helpresult").forEach(element => {
    element.innerHTML = data[language].help
  });
  document.querySelectorAll(".aboutmeresult").forEach(element => {
    element.innerHTML = data[language].aboutme
  });
  document.querySelectorAll(".experienceresult").forEach(element =>{
    element.innerHTML = data[language].experience
  });
  document.querySelectorAll(".cvresult").forEach(element =>{
    element.innerHTML = data[language].cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element =>{
    element.innerHTML = data[language].redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element =>{
    element.innerHTML = data[language].redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element =>{
    element.innerHTML = data[language].hobby
  });
  document.querySelectorAll(".resultproject").forEach(element =>{
    element.innerHTML = data[language].project
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOff
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOn
  });
  document.querySelectorAll(".notfoundlanguage").forEach(element =>{
    element.innerHTML = data[language].notfound
  });
  document.querySelectorAll(".notfoundmenu").forEach(element =>{
    element.innerHTML = data[language].notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element =>{
    element.innerHTML = data[language].website
  });
  document.querySelectorAll(".lsresult1").forEach(element =>{
    element.innerHTML = data[language].ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element =>{
    element.innerHTML = data[language].ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element =>{
    element.innerHTML = data[language].listsecretresult
  });
  document.querySelectorAll(".congratulation").forEach(element =>{
    element.innerHTML = data[language].congratulation
  });

  
}


french.addEventListener("click", function(){
  language = "french";
  localStorage.setItem('language', language);
  setLanguage();
});

english.addEventListener("click", function(){
  language = "english";
  localStorage.setItem('language', language);
  setLanguage();
});