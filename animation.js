extend.addEventListener("click", function(){
  main.classList.toggle("extendmain");
  terminalBody.classList.toggle("extendcontent");
  
  setTimeout(() => {
    document.getElementById(`input${i}`).focus();
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }, 300);
  
});

closeWindow.addEventListener("click", function(){
  main.style.animation = "fadeout 0.3s ease";
  icon.style.display="block";
  setTimeout( () =>{
    main.classList.toggle("display");
  },300);
});


//computer event
icon.addEventListener("mousedown", () =>{
  icon.classList.add("active");
  icon.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () =>{
  icon.classList.remove("active");
  icon.removeEventListener("mousemove", onDrag);
});

//mobile event
icon.addEventListener("touchstart", () =>{
  icon.classList.add("active");
  icon.addEventListener("touchmove", onDrag);
}, false);

document.addEventListener("touchend", () =>{
  icon.classList.remove("active");
  icon.removeEventListener("touchmove", onDrag);
}, false);


const onDrag = ({movementX, movementY}) =>{
  let getStyle = window.getComputedStyle(icon);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  icon.style.left = `${left + movementX}px`;
  icon.style.top = `${top + movementY}px`;
}  

const moveBg = (historic, result, y) =>{
  if (result === "move" && document.body.classList.contains("animateBg")){
    terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML("beforeend", `<p class="result">l'animation du background est deja active. Pour desactiver cette derniere utilisez la commande <code>remove</code>.</p>`);
  } 
  else if (result === "move"){
    document.body.classList.toggle("animateBg");
    terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML("beforeend", `<p class="result">Vous venez d'activer l'animation du background pour désactiver cette derniere utilisez la commande <code>remove</code>.</p>`);
  }  
  else if (result === "remove" && document.body.classList.contains("animateBg")){
    document.body.classList.toggle("animateBg");
    terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML("beforeend", `<p class="result">Vous venez de désactiver l'animation du background pour activer cette derniere utilisez la commande <code>move</code>.</p>`);
  } else {
    if (y === 1){
      terminal = document.getElementById("terminal");
      terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
      <br><br>Tapez la commande <code>themes</code> pour afficher la liste des themes disponibles.</p><br>
      <p class="result">/!\\ pour revenir sur le menu principal veuillez utiliser la commande <code>exit</code></p>`);
    } else {
      terminal = document.getElementById("terminal");
      terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          <br><br>Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.</p>`);
    }
  }
}


window.addEventListener("click", function(event){
  if(event.target === closeWindowPopup || event.target === filter || event.target === btnPopup){
    popup.style.animation = "fadeout 0.3s ease";
    filter.style.animation = "fadeoutfilter 0.3s ease"
    setTimeout( () =>{
      popup.remove();
      filter.remove();
      document.getElementById(`input${i}`).focus();
    },300);
  };
});

icon.addEventListener("dblclick", function(){
  main.style.animation = "null";
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin",`
<div class="resume">
<pre>

 ______   ______     ______     ______   ______   ______     __         __     ______    
/\\  == \\ /\\  __ \\   /\\  == \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\ \\       /\\ \\   /\\  __ \\   
\\ \\  _-/ \\ \\ \\/\\ \\  \\ \\  __<   \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/\\ \\  
 \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\_____\\ 
  \\/_/     \\/_____/   \\/_/ /_/     \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_/   \\/_____/ 
                                                                                   
  
</pre></div>
        <div>Bienvenue sur mon Portfolio ! Pour afficher les commandes disponibles tapez <code>help</code>. Pour valider chaque commande appuyez sur <em>Entrer</em>, vous pouvez utiliser la touche <em>Tabulation</em> afin de vous aider à compléter une commande.</div>
        <div id="terminal">
          <div>
            <p class="commande" id="answer${i}">Guillaume REYGNER:~/portfolio$</p>
            <input type="text" class="input" id="input${i}" tabindex="-1">
          </div>

      </div>
  `);
  main.classList.toggle("display");
  icon.style.display="none";
  document.getElementById(`input${i}`).focus();
});