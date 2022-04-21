let terminal = document.getElementById("terminal");
let i = 0;
let a = 0;
let input = document.getElementById(`input${i}`);
let terminalBody = document.getElementById("terminal-body");
let main = document.querySelector("div.main");
let extend = document.getElementById("banner-button-extend");
let closeWindow = document.getElementById("banner-button-close");
let icon = document.getElementById("icon");
const root = document.querySelector(":root");
let svg = document.getElementById("githubcorner");
let historic = [];
let theme = 1;
let numberTheme;
let nameTheme = "classique";
let secret = 0;
let y = 0;

window.addEventListener("click",function(){
  document.getElementById(`input${i}`).focus();
});

window.addEventListener("load", function(){
  input.value = "";
});

window.addEventListener("keydown", logKey);


function logKey(e){
  input = document.getElementById(`input${i}`)
  let result = input.value.toLowerCase();

  if(e.ctrlKey && e.code === "KeyU"){
    input.value = "";
  }

  if(e.key === "ArrowUp"){
    if (historic.length > 0){
      if(a >= historic.length){
        a = historic.length - 1;
      }
      input.value = historic[a];
      a++;
    }
    e.preventDefault(); 
  }

  if(e.key === "ArrowDown"){
      if(a < 0){
        input.value = "";
        a = 0;
      }else{
        a--;
        if(historic[a-1] === undefined){
          input.value = "";
          a = 0;
        }else{
          input.value = historic[a - 1];
        }
      }
    e.preventDefault();
  }


  if (e.key === 'Tab'){
    if (y === 0){
      if(result[0] === "a"){
        input.value = "a-propos";
      }
      if(result[0] === "c"){
        input.value = "clear";
      }
      if(result[0] === "e"){
        input.value = "experiences";
      }
      if(result.includes("mes-projets[") && !result.includes("]")){
        input.value = `${result}]`;
      }
      if(result.includes("mes-projets") && !result.includes("mes-projets[")){
        input.value = "mes-projets[";
      }
      if(result.includes("mes-projets[")){
        if(result.includes("]") && !result.includes(".website")){      
          input.value = `${result}.website`;
        }
      }
      if(result[0] === "f"){
        input.value = "formations";
      }
      if(result[0] === "g"){
        input.value = "get ";
      }
      if(result.includes("get c")){
        input.value = "get cv";
      }
      if(result.includes("get l")){
        input.value = "get linkedin";
      }
      if(result.includes("get g")){
        input.value = "get github";
      }
      if(result[0] === "h"){
        input.value = "help";
      }
      if(result[0] === "m" && result !== "mes-projets" && !result.includes("mes-projets[")) {
        input.value = "mes-projets";
      }
      if(result[0] === "p"){
        input.value = "passions";
      }
      if(result[0] === "t"){
        input.value = "themes";
      }
    } else {
      if(result[0] === "c"){
        input.value = "cl";
      }
      if(result[0] === "c" && result.includes("cle")){
        input.value = "clear";
      }
      if(result[0] === "c" && result.includes("cla")){
        input.value = "classique";
      }
      if(result[0] === "e"){
        input.value = "exit";
      }
      if(result[0] === "d" && result[1] === "a"){
        input.value = "dark";
      }
      if(result[0] === "d" && result[1] === "r"){
        input.value = "dracula";
      }
      if(result[0] === "m" && result[1] === "a" && secret == 1){
        input.value = "matrix";
      }
      if(result[0] === "m" && result[1] === "e"){
        input.value = "medallion";
      }
      if(result[0] === "h" && secret == 1){
        input.value = "hello kitty";
      }
      if(result[0] === "t"){
        input.value = "themes";
      }

    }
    e.preventDefault();
  }

  if(e.key === 'Enter'){
    if(result === ""){
      e.preventDefault();
    }else{
      historic.unshift(result);
      let answer = document.getElementById(`answer${i}`);
      let inputDelete = document.getElementById(`input${i}`);
      inputDelete.remove();
      answer.insertAdjacentHTML("beforeend", `<p class="resultwrite">${input.value}</p>`);
      i++;

      if (y === 0){
        if(result === "help" || result === "ls"){
          help();
        } else if (result === "a-propos"){
          aboutMe();
        } else if (result === "clear"){
          clear();
        } else if (result === "experiences"){
          experiences();
        } else if( result === "get cv"){
          getCv();
        } else if (result === "get linkedin"){
          getLinkedin();
        } else if (result === "get github"){
          getGithub();
        } else if (result === "passions"){
          hobby();
        } else if (result === "mes-projets"){
          project();
        } else if (result === "mes-projets[1].website"){
          website(result);
        } else if (result === "mes-projets[2].website"){
          website(result);
        } else if (result === "mes-projets[3].website"){
          website(result);
        } else if (result === "mes-projets[4].website"){
          website(result);
        }     
        else if (result === "secrets"){
          secrets();
        } else if (result === "move"){
          moveBg(historic, result, y);
        } else if (result === "remove"){
          moveBg(historic, result, y);
        } else if (result === "themes"){
          y ++;
          themes();
        }         
        else{
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          <br><br>Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.</p>`);
        }
      } else {

        if (result === "exit"){
          y --;
          terminal.insertAdjacentHTML("beforeend", `<br>`);
        } else if (result === "clear"){
          clear();
        }else if (result === "classique" || result === "1"){
          numberTheme = 1;
          nameTheme = "classique";
          check();
          classic();
        } else if (result === "dark" || result === "2"){
          numberTheme = 2;
          nameTheme = "dark";
          check();
          dark();
        } else if (result === "dracula" || result === "3"){
          numberTheme = 3;
          nameTheme = "dracula";
          check();
          dracula();
        } else if (result === "medallion" || result === "4"){
          numberTheme = 4;
          nameTheme = "medallion";
          check();
          medallion();
        } else if (result === "matrix" || result === "5" && secret == 1){
          numberTheme = 5;
          nameTheme = "matrix";
          check();
          matrix();
        } else if (result === "hello kitty" || result === "6" && secret == 1){
          numberTheme = 6;
          nameTheme = "hello kitty";
          check();
          helloKitty();
        } else if (result === "themes" || result === "ls"){
          themes();
        } else if (result === "secrets"){
          secrets();
        } else if (result === "move"){
          moveBg(historic, result, y);
        } else if (result === "remove"){
          moveBg(historic, result, y);
        }
        
        else {
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          <br><br>Tapez la commande <code>themes</code> pour afficher la liste des themes disponibles.</p><br>
          <p class="result">/!\\ pour revenir sur le menu principal veuillez utiliser la commande <code>exit</code></p>`);
        }        
      }
      if (y === 1){
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<p class="commande" id="answer${i}">Guillaume REYGNER/themes ~$</p><input type="text" autofocus class="input themeinput" id="input${i}" tabindex="-1">`);
      } else {
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<p class="commande" id="answer${i}">Guillaume REYGNER ~$</p><input type="text" autofocus class="input" id="input${i}" tabindex="-1">`);
      }
      document.getElementById(`input${i}`).focus();
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }
}






