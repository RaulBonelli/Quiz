const questions = [
  {
    entry: "Este Pokémon dorme o tempo todo. Ele só acorda para comer e volta a dormir imediatamente após.",
    options: ["Gloom", "Snorlax", "Slaking", "Slowpoke"],
    answer: "Snorlax"
  },
  {
    entry: "É dito que este Pokémon apareceu quando um cientista tentou clonar o Mew, mas a experiência deu errado.",
    options: ["Mewtwo", "Ditto", "Genesect", "Deoxys"],
    answer: "Mewtwo"
  },
  {
    entry: "Sua cauda é tão pesada que ele não percebe quando ela está sendo mordida. Ele é lento, mas sempre tranquilo.",
    options: ["Psyduck", "Quagsire", "Slowpoke", "Wooper"],
    answer: "Slowpoke"
  },
  {
    entry: "Apesar de seu corpo parecer doce, o cheiro azedo afasta predadores. Ele atrai insetos com seu aroma.",
    options: ["Combee", "Gloom", "Sprigatito", "Budew"],
    answer: "Gloom"
  },
  {
    entry: "Este Pokémon elétrico gera energia ao girar suas caudas como hélices.",
    options: ["Pikachu", "Helioptile", "Rotom", "Tynamo"],
    answer: "Helioptile"
  },
  {
    entry: "Seu casco é tão resistente que pode suportar explosões sem sofrer danos.",
    options: ["Torkoal", "Blastoise", "Torterra", "Forretress"],
    answer: "Blastoise"
  },
  {
    entry: "Adora brilhar e se exibir em batalhas, usando o reflexo de sua armadura para distrair o inimigo.",
    options: ["Gallade", "Aegislash", "Bisharp", "Lucario"],
    answer: "Bisharp"
  },
  {
    entry: "Cria seu filhote em uma bolsa e luta até o fim para protegê-lo.",
    options: ["Chansey", "Blissey", "Kangaskhan", "Togekiss"],
    answer: "Kangaskhan"
  },
  {
    entry: "Pode caminhar em lava derretida como se fosse água.",
    options: ["Magcargo", "Camerupt", "Magmar", "Heatran"],
    answer: "Heatran"
  },
  {
    entry: "Consegue transformar completamente sua forma para se adaptar a diferentes aparelhos elétricos.",
    options: ["Porygon-Z", "Rotom", "Klink", "Magnezone"],
    answer: "Rotom"
  },
  {
    entry: "Este Pokémon é dito ser o criador do tempo.",
    options: ["Dialga", "Palkia", "Arceus", "Giratina"],
    answer: "Dialga"
  },
  {
    entry: "Seus olhos hipnóticos podem colocar qualquer um para dormir.",
    options: ["Drowzee", "Hypno", "Alakazam", "Espeon"],
    answer: "Hypno"
  },
  {
    entry: "Este Pokémon foi criado por humanos para ser o mais poderoso.",
    options: ["Mewtwo", "Genesect", "Type: Null", "Silvally"],
    answer: "Mewtwo"
  },
  {
    entry: "Consegue correr tão rápido que mal pode ser visto a olho nu.",
    options: ["Ninjask", "Zeraora", "Jolteon", "Accelgor"],
    answer: "Ninjask"
  },
  {
    entry: "Controla o espaço e é dito ser capaz de dobrar dimensões.",
    options: ["Palkia", "Dialga", "Hoopa", "Lunala"],
    answer: "Palkia"
  },
  {
    entry: "Este Pokémon guarda um segredo ancestral e vive em ruínas esquecidas.",
    options: ["Sigilyph", "Claydol", "Unown", "Runerigus"],
    answer: "Unown"
  },
  {
    entry: "Cria buracos negros em miniatura ao redor de si.",
    options: ["Solgaleo", "Necrozma", "Darkrai", "Giratina"],
    answer: "Giratina"
  },
  {
    entry: "Adora pregar peças e desaparece em sombras.",
    options: ["Mimikyu", "Banette", "Gengar", "Drifloon"],
    answer: "Gengar"
  },
  {
    entry: "Este Pokémon é o guardião dos mares.",
    options: ["Kyogre", "Manaphy", "Lugia", "Lapras"],
    answer: "Kyogre"
  },
  {
    entry: "Seu corpo é feito de aço e ele pode suportar ataques diretos de canhões.",
    options: ["Steelix", "Aggron", "Metagross", "Bastiodon"],
    answer: "Aggron"
  },
  {
    entry: "Este Pokémon se multiplica rapidamente e causa pragas nas plantações.",
    options: ["Foongus", "Paras", "Oddish", "Morelull"],
    answer: "Paras"
  },
  {
    entry: "Pode voar com suas pétalas mesmo sendo pequeno e leve.",
    options: ["Hoppip", "Skiploom", "Petilil", "Flabébé"],
    answer: "Hoppip"
  },
  {
    entry: "Ele tem uma chama que nunca se apaga, mesmo embaixo d’água.",
    options: ["Charmander", "Cyndaquil", "Litwick", "Fuecoco"],
    answer: "Charmander"
  },
  {
    entry: "Este Pokémon absorve luz solar para liberar poderosos feixes de energia.",
    options: ["Cherrim", "Sceptile", "Solarbeam", "Sunflora"],
    answer: "Sunflora"
  },
  {
    entry: "Ele protege florestas e é visto como um espírito guardião por tribos antigas.",
    options: ["Trevenant", "Shaymin", "Decidueye", "Virizion"],
    answer: "Trevenant"
  },
  {
    entry: "Seus balões atraem crianças e as carregam para longe.",
    options: ["Drifloon", "Jigglypuff", "Swablu", "Misdreavus"],
    answer: "Drifloon"
  },
  {
    entry: "Sua saliva é tão potente que pode derreter até mesmo ferro.",
    options: ["Salandit", "Gible", "Goodra", "Salazzle"],
    answer: "Salazzle"
  },
  {
    entry: "Possui múltiplas cabeças que nunca concordam entre si.",
    options: ["Dodrio", "Hydreigon", "Zweilous", "Exeggcute"],
    answer: "Hydreigon"
  },
  {
    entry: "Este Pokémon vive no gelo eterno e congela tudo ao seu redor.",
    options: ["Regice", "Glaceon", "Frosmoth", "Aurorus"],
    answer: "Regice"
  },
  {
    entry: "Dizem que ele surgiu de uma boneca esquecida cheia de rancor.",
    options: ["Banette", "Mimikyu", "Shuppet", "Zorua"],
    answer: "Banette"
  }
];


    let currentQuestion = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const resultEl = document.getElementById("result");
    const nextBtn = document.getElementById("next");
    const rotomdex = document.getElementById("rotomdex");
    const body = document.getElementById("body");

    function loadQuestion() {
      const q = questions[currentQuestion];
      questionEl.textContent = `🔍 Pokédex: "${q.entry}"`;
      optionsEl.innerHTML = "";
      resultEl.textContent = "";
      nextBtn.style.display = "none";

    const colors = ["#21c4d4", "#76d421", "#55d4a3", "#44a3d4", "#d4457a", "#7a45d4"];

q.options.forEach(option => {
  const btn = document.createElement("button");
btn.textContent = option;
btn.style.backgroundImage = 'url(./IMG/black-white/' + [Math.floor(Math.random() * 300)] + '.png)';
btn.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
btn.style.color = "white";
btn.style.textShadow = "1px 1px 4px #000";
btn.style.padding = "10px";
btn.style.margin = "5px";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.onclick = () => selectAnswer(option, q.answer);
optionsEl.appendChild(btn);
});
    }


    function selectAnswer(selected, correct) {
      if (selected === correct) {
        resultEl.textContent = "✅ Correto!";
        resultEl.style.color = "green";
        rotomdex.style.backgroundImage = 'url(./IMG/3.png';
        body.style.background = "#1ec688ff";
       body.style.backgroundImage = 'url(./IMG/black-white/' + [Math.floor(Math.random() * 300)] + '.png)';
        correctAnswers++;
      } else {
        resultEl.textContent = `❌ Errado! Resposta correta: ${correct}`;
        body.style.background = "#ff4c4cff";
               body.style.backgroundImage = 'url(./IMG/black-white/' + [Math.floor(Math.random() * 300)] + '.png)';
        resultEl.style.color = "red";
        rotomdex.style.backgroundImage = 'url(./IMG/8.png';
        wrongAnswers++;
      }
      nextBtn.style.display = "inline-block";
      Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
    }

    nextBtn.onclick = () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        questionEl.textContent = " Fim!";
        optionsEl.innerHTML = "";
        if(correctAnswers == 30){
        resultEl.textContent = `Você acertou todas as perguntas! E está pronto para se tornar um verdadeiro Mestre Pokémon!`;
        }else if(correctAnswers >= 20){
        resultEl.textContent = `Você acertou ${correctAnswers} perguntas! Continue treinando para se tornar um Mestre Pokémon!`;
        }else if(correctAnswers >= 10){
        resultEl.textContent = `Você acertou ${correctAnswers} perguntas! Continue praticando para melhorar suas habilidades!`;
        }else{
        resultEl.textContent = `Você acertou ${correctAnswers} perguntas... talvez se tornar um mestre pokémon não seja para voce...`;
        }
        nextBtn.style.display = "none";
      }
    };

    // Iniciar o quiz
// ...existing code...
loadQuestion();

// Avançar ao pressionar Enter
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter" && nextBtn.style.display !== "none") {
    nextBtn.click();
  }
});