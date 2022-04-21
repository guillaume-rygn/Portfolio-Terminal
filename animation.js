extend.addEventListener("click", function(){
  main.classList.toggle("extendmain");
  terminalBody.classList.toggle("extendcontent");
  
  setTimeout(() => {
    document.getElementById(`input${i}`).focus();
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }, 300);
  
});

closeWindow.addEventListener("click", function(){
  main.remove();
  icon.style.display="block";
});


icon.addEventListener("dblclick", function(){
  icon.style.display="none";
  location.reload();
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
});

document.addEventListener("touchend", () =>{
  icon.classList.remove("active");
  icon.removeEventListener("touchmove", onDrag);
});


function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(icon);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  icon.style.left = `${left + movementX}px`;
  icon.style.top = `${top + movementY}px`;

}  

function moveBg(historic, result, y){
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
