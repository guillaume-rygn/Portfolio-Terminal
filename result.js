const aboutMe = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result aboutmeresult">
          ${data[language].aboutme}
        </p>`);
};


const clear = () =>{
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin", `<div id="terminal"></div>`);
};

const experiences = () =>{
  terminal.insertAdjacentHTML("beforeend", `
  <table class="result experienceresult">
      ${data[language].experience}
  </table>`);
};

const getCv = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result cvresult">${data[language].cv}</p>`);
  const a = document.createElement("a");
  a.href = "ressources/CV -  Guillaume REYGNER.pdf";
  a.setAttribute("download", "CV -  Guillaume REYGNER.pdf");
  a.setAttribute("target", "blank");
  a.click();
}

const getLinkedin = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultLinkedin">${data[language].redirectLinkedin}</p>`);
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/guillaume-reygner/";
  a.setAttribute("target", "blank");
  a.click();
}

const getGithub = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultGithub">${data[language].redirectGithub}</p>`);
  const a = document.createElement("a");
  a.href = "https://github.com/guillaume-rygn";
  a.setAttribute("target", "blank");
  a.click();
}

const help = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          <ul class="helpresult">
            ${data[language].help}
          </ul>
        </p>`);
};

const hobby = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result hobbyresult">
          ${data[language].hobby}
        </p>`);
};


const project = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<div class="resultproject">
        ${data[language].project}
    </div>`);
};


const website = (result) =>{
  terminal.insertAdjacentHTML("beforeend", 
          `${data[language].website}`);
  const a = document.createElement("a");

  if(result === "mes-projets[1].website" || result === "my-projects[1].website"){
    a.href = "https://catshop-io.herokuapp.com/";
  } else if (result === "mes-projets[2].website" || result === "my-projects[2].website"){
    a.href = "https://guillaume-rygn.github.io/Kata-Temple/";
  } else if (result === "mes-projets[3].website" || result === "my-projects[3].website"){
    a.href = "https://scoreit-thp.herokuapp.com/";
  } else if (result === "mes-projets[4].website" || result === "my-projects[4].website"){
    a.href = "https://guillaume-rygn.github.io/Monolith-Arena/";
  } else if (result === "mes-projets[5].website" || result === "my-projects[5].website"){
    a.href = "https://guillaume-rygn.github.io/MyDarkTheme.JS/";
  } else if (result === "mes-projets[6].website" || result === "my-projects[6].website"){
    a.href = "https://guillaume-rygn.github.io/EmojiFace/";
  } else if (result === "mes-projets[7].website" || result === "my-projects[7].website"){
    a.href = "https://www.guillaumereygner.fr/";
  } else if (result === "mes-projets[8].website" || result === "my-projects[8].website"){
    a.href = "https://guillaume-rygn.github.io/YouLearn/";
  } else if (result === "mes-projets[9].website" || result === "my-projects[9].website"){
    a.href = "https://guillaume-rygn.github.io/FindHouse/";
  }
  a.setAttribute("target", "blank");
  a.click();
}

const ls = (y, result, secret) =>{
  if(y === 0 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult1">${data[language].ls1}</div>`);
  } else if (y === 0 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult2">${data[language].ls2}</div>`);
  } else if (y === 1 && result === "ls -a" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
            <div>matrix</div>
            <div>hello kitty</div>
        </div>`);
  } else if (y === 1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
        </div>`);
  } else if (y === 1  && result === "ls" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
      <div>matrix</div>
      <div>hello kitty</div>
    </div>`);
  } else if (y === 1  && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
    </div>`);
  } else if (y === -1 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div>list-secret</div>
            <div><code>Guillaume REYGNER</code></div>
          </div>`);
  } else if (y === -1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend",  
    `<div class="result ls">
      <div><code>.</code></div>
      <div><code>.secret</code></div>
      <div>list-secret</div>
      <div><code>Guillaume REYGNER</code></div>
    </div>`);
  }
}

const listSecret = () =>{
  terminal.insertAdjacentHTML("beforeend",
        `<p class="result">
          <ul class="listsecretresult">
            ${data[language].listsecretresult}
          </ul>
        </p>`);
}


const mailer = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result bravo">${data[language].congratulation}</p>`);
  const a = document.createElement("a");
  a.href = `${data[language].bodymail}`;
  a.click();
}
