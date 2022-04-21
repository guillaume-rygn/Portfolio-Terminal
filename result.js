function aboutMe(){
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          {<br>
            &nbsp;&nbsp;&nbsp;"name" : "Guillaume REYGNER",<br>
            &nbsp;&nbsp;&nbsp;"formation" : "Developpeur 1200h en 6 mois - The Hacking Project",<br>
            &nbsp;&nbsp;&nbsp;"language" : "HTML, CSS, JS, Ruby, Rails, Git",<br>
            &nbsp;&nbsp;&nbsp;"tools" : "GitHub, Heroku, Figma",<br>
            &nbsp;&nbsp;&nbsp;"favoriteIDE" : "VS Code",<br>
            &nbsp;&nbsp;&nbsp;"city" : "Lyon, France"<br>
          }
        </p>`);
};


function clear(){
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin", `<div id="terminal"></div>`);
};

function experiences(){
  terminal.insertAdjacentHTML("beforeend", `
  <table class="result">
      <tr>
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
      </tr>
  </table>`);
};

function getCv(){
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">Le téléchargement du CV va commencer.</p>`);
  const a = document.createElement("a");
  a.href = "ressources/CV -  Guillaume REYGNER.pdf";
  a.setAttribute("download", "CV -  Guillaume REYGNER.pdf");
  a.setAttribute("target", "blank");
  a.click();
}

function getLinkedin(){
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">Vous allez être redirigé vers Linkedin.</p>`);
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/guillaume-reygner/";
  a.setAttribute("target", "blank");
  a.click();
}

function getGithub(){
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">Vous allez être redirigé vers Github.</p>`);
  const a = document.createElement("a");
  a.href = "https://github.com/guillaume-rygn";
  a.setAttribute("target", "blank");
  a.click();
}

function help(){
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          <ul>
            <li><code>a-propos</code> : Affiche les informations me concernant</li>
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
            <li><em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas</em></li>
          </ul>
        </p>`);
};

function hobby(){
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          {<br>
            &nbsp;&nbsp;&nbsp;"Sport" : "Volley-ball, Vélo",<br>
            &nbsp;&nbsp;&nbsp;"Programmation" : "JS, Rails",<br>
            &nbsp;&nbsp;&nbsp;"Other" : "Entrepreneuriat, Photographie, Lecture autobiographie, Design, Marketing"<br>
          }
        </p>`);
};


function project(){
  terminal.insertAdjacentHTML("beforeend", 
        `<table class="result">
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
          <td class="center">HTML CSS JS Heroku</td>
          <td>48h pour créer un jeu en 2d sur le thème d'une arène de combat en utilisant les classes de Javascript</td>
          <td class="center">Non</td>
          <td class="center"><a href="https://github.com/guillaume-rygn/Monolith-Arena" target="blank">Lien</a></td>
        </tr> 
    </table><br>
    <p class="result"><em>Vous pouvez voir le site rattaché au projet en utilisant la commande</em> <code>mes-projets[index].website</code><em>, index étant le numéro associé au projet.</em></p>`);
};


function website(result){
  terminal.insertAdjacentHTML("beforeend", 
          `<p class="result">Vous allez être redirigé vers le site web du projet.</p>`);
  const a = document.createElement("a");

  if(result === "mes-projets[1].website"){
    a.href = "https://catshop-io.herokuapp.com/";
  } else if (result === "mes-projets[2].website"){
    a.href = "https://katatemple.herokuapp.com/";
  } else if (result === "mes-projets[3].website"){
    a.href = "https://scoreit-thp.herokuapp.com/";
  } else if (result === "mes-projets[4].website"){
    a.href = "https://monolitharena.herokuapp.com";
  } 
  a.setAttribute("target", "blank");
  a.click();
}


