const themes = () =>{
  if (secret === 0){
    terminal.insertAdjacentHTML("beforeend", 
    `<p class="result">
      <ul>
        <li>Voici la liste des <code>themes</code> disponibles :</li>
        <ol>
          <li>dracula</li>
          <li>dark</li>
          <li>ubuntu</li>
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
          <li>dracula</li>
          <li>dark</li>
          <li>ubuntu</li>
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

const check = () =>{
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

const secrets = () =>{
  if (secret === 0){
    localStorage.setItem(secret, 1);
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          Vous avez activez des themes supplementaires ! Utilisez le commande <code>themes</code> pour voir vos nouveaux themes. 
        </p>`);
        secret = 1;
  } else {
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          Les themes secrets sont deja actifs. Utilisez le commande <code>themes</code> pour voir vos themes. 
        </p>`);
  }
}

const dracula = () =>{
  root.style.removeProperty('--text-color');
  root.style.removeProperty('--text-accent-color');
  root.style.removeProperty('--bg-1');
  root.style.removeProperty('--bg-2');
  root.style.removeProperty('--bg-3');
  root.style.removeProperty('--username-color');
  root.style.removeProperty('--terminal-bg');
  root.style.removeProperty('--terminal-header-bg');
  bannerTitle.style.removeProperty('color');
  if (svg.classList.contains("ligthen")){
    svg.classList.remove("ligthen");
  }
}

const dark = () =>{
  root.style.setProperty('--text-color', '#ffca85');
  root.style.setProperty('--text-accent-color', '#ff5555');
  root.style.setProperty('--bg-1','#211F20');
  root.style.setProperty('--bg-2','#292D34');
  root.style.setProperty('--bg-3','#213030');
  root.style.setProperty('--username-color','#858585');
  root.style.setProperty('--terminal-bg','rgb(0 0 0 / 90%)');
  root.style.setProperty('--terminal-header-bg','#585252');
  bannerTitle.style.color = "#ffca85";
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}

const ubuntu = () =>{
  root.style.setProperty('--text-color', '#fff');
  root.style.setProperty('--text-accent-color', 'darksalmon');
  root.style.setProperty('--bg-1','#f27121');
  root.style.setProperty('--bg-2','#e94057');
  root.style.setProperty('--bg-3','#8a2387');
  root.style.setProperty('--username-color','cadetblue');
  root.style.setProperty('--terminal-bg','rgba(56, 4, 40, 0.9)');
  bannerTitle.style.color = "#222222";
  root.style.setProperty('--terminal-header-bg','#bbb');
  if (svg.classList.contains("ligthen")){
    svg.classList.remove("ligthen");
  }
}

const medallion = () =>{
  root.style.setProperty('--text-color', '#5e5219');
  root.style.setProperty('--text-accent-color', '#916c25');
  root.style.setProperty('--bg-1','#5e5219');
  root.style.setProperty('--bg-2','#d3bd26');
  root.style.setProperty('--bg-3','#d3bd26');
  root.style.setProperty('--username-color','#b64c00');
  root.style.setProperty('--terminal-bg','#cac296');
  root.style.setProperty('--terminal-header-bg','#585252');
  bannerTitle.style.color = "#cac296";
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}

const matrix = () =>{
  root.style.setProperty('--text-color', '#00FF41');
  root.style.setProperty('--text-accent-color', 'red');
  root.style.setProperty('--bg-1','#213030');
  root.style.setProperty('--bg-2','#213030');
  root.style.setProperty('--bg-3','#003B00');
  root.style.setProperty('--username-color','blue');
  root.style.setProperty('--terminal-bg','rgb(0 0 0 / 90%)');
  root.style.setProperty('--terminal-header-bg','#585252');
  bannerTitle.style.color = "#00FF41";
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}

const helloKitty = () =>{
  root.style.setProperty('--text-color', '#914186');
  root.style.setProperty('--text-accent-color', '#F62E70');
  root.style.setProperty('--bg-1','#F98EAA');
  root.style.setProperty('--bg-2','#F62E70');
  root.style.setProperty('--bg-3','#F62E70');
  root.style.setProperty('--username-color','#F62E70');
  root.style.setProperty('--terminal-bg','#F2F2F2');
  root.style.setProperty('--terminal-header-bg','#E77ED0');
  bannerTitle.style.color = "#F2F2F2";
  if (!svg.classList.contains("ligthen")){
    svg.classList.add("ligthen");
  }
}