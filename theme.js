function themes(){
  if (secret === 0){
    terminal.insertAdjacentHTML("beforeend", 
    `<p class="result">
      <ul>
        <li>Voici la liste des <code>themes</code> disponibles :</li>
        <ol>
          <li>classique</li>
          <li>dark</li>
          <li>dracula</li>
          <li>medallion</li>
        </ol>
      </ul><br>
      <p class="result">Vous pouvez choisir un theme en écrivant dans la commande le nom de votre theme ou le numero de ce dernier. Validez ensuite votre commande en appuyant sur <em>Entrer</em></p><br>
      <p class="result">/!\\ pour revenir sur le menu principal veuillez utiliser la commande <code>exit</code>.</p>
    </p>`);
  } else {
    terminal.insertAdjacentHTML("beforeend", 
    `<p class="result">
      <ul>
        <li>Voici la liste des <code>themes</code> disponibles :</li>
        <ol>
          <li>classique</li>
          <li>dark</li>
          <li>dracula</li>
          <li>medallion</li>
          <p class="linealign">secrets :<p>
          <li>matrix</li>
          <li>hello kitty</li>
        </ol>
      </ul><br>
      <p class="result">Vous pouvez choisir un theme en écrivant dans la commande le nom de votre theme ou le numero de ce dernier. Validez ensuite votre commande en appuyant sur <em>Entrer</em></p><br>
      <p class="result">/!\\ pour revenir sur le menu principal veuillez utiliser la commande <code>exit</code>.</p>
    </p>`);
  }
  
};

function check(){
  if (numberTheme === theme){
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          Votre terminal est deja sous le theme <code>${nameTheme}</code>. 
        </p>`);
  } else {
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          Votre terminal est désormais sous le theme <code>${nameTheme}</code>. 
        </p>`);
    theme = numberTheme;
  }
}

function secrets(){
  if (secret === 0){
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          Vous avez activez des themes supplementaires ! Utilisez le commande <code>themes</code> pour voir vos nouveaux themes. 
        </p>`);
        secret ++;
  } else {
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          Les themes secrets sont deja actifs. Utilisez le commande <code>themes</code> pour voir vos themes. 
        </p>`);
  }
}

function classic(){
  root.style.removeProperty('--text-color');
  root.style.removeProperty('--text-accent-color');
  root.style.removeProperty('--bg-1');
  root.style.removeProperty('--bg-2');
  root.style.removeProperty('--bg-3');
  root.style.removeProperty('--username-color');
  root.style.removeProperty('--terminal-bg');
  root.style.removeProperty('--terminal-header-bg');
  if (svg.classList.contains("ligthen")){
    svg.classList.remove("ligthen");
  }
}

function dark(){
  root.style.setProperty('--text-color', '#ffca85');
  root.style.setProperty('--text-accent-color', '#ff5555');
  root.style.setProperty('--bg-1','#211F20');
  root.style.setProperty('--bg-2','#292D34');
  root.style.setProperty('--bg-3','#213030');
  root.style.setProperty('--username-color','#858585');
  root.style.setProperty('--terminal-bg','rgb(0 0 0 / 90%)');
  root.style.setProperty('--terminal-header-bg','#585252');
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}

function dracula(){
  root.style.setProperty('--text-color', '#f8f8f2');
  root.style.setProperty('--text-accent-color', '#ff5555');
  root.style.setProperty('--bg-1','#44475a');
  root.style.setProperty('--bg-2','#44475a');
  root.style.setProperty('--bg-3','#44475a');
  root.style.setProperty('--username-color','#bd93f9');
  root.style.setProperty('--terminal-bg','#282a36');
  root.style.setProperty('--terminal-header-bg','#6272a4');
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}

function medallion(){
  root.style.setProperty('--text-color', '#5e5219');
  root.style.setProperty('--text-accent-color', '#916c25');
  root.style.setProperty('--bg-1','#5e5219');
  root.style.setProperty('--bg-2','#d3bd26');
  root.style.setProperty('--bg-3','#d3bd26');
  root.style.setProperty('--username-color','#b64c00');
  root.style.setProperty('--terminal-bg','#cac296');
  root.style.setProperty('--terminal-header-bg','#585252');
  if (svg.classList.contains("ligthen")){
    svg.classList.remove("ligthen");
  }
}

function matrix(){
  root.style.setProperty('--text-color', '#00FF41');
  root.style.setProperty('--text-accent-color', 'red');
  root.style.setProperty('--bg-1','#213030');
  root.style.setProperty('--bg-2','#213030');
  root.style.setProperty('--bg-3','#003B00');
  root.style.setProperty('--username-color','blue');
  root.style.setProperty('--terminal-bg','rgb(0 0 0 / 90%)');
  root.style.setProperty('--terminal-header-bg','#585252');
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}

function helloKitty(){
  root.style.setProperty('--text-color', '#914186');
  root.style.setProperty('--text-accent-color', '#F62E70');
  root.style.setProperty('--bg-1','#F98EAA');
  root.style.setProperty('--bg-2','#F62E70');
  root.style.setProperty('--bg-3','#F62E70');
  root.style.setProperty('--username-color','#F62E70');
  root.style.setProperty('--terminal-bg','#F2F2F2');
  root.style.setProperty('--terminal-header-bg','#E77ED0');
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}