const positiveData = {
    'A': { word: 'Adaptable', definition: 'Capable de s’ajuster efficacement aux changements et aux différentes situations professionnelles.' },
    'B': { word: 'Bienveillant', definition: 'Qui soutient un environnement de travail positif en étant attentif au bien-être des collègues.' },
    'C': { word: 'Collaboratif', definition: 'Enclin à travailler en équipe, partageant les idées et les efforts pour atteindre un objectif commun.' },
    'D': { word: 'Déterminé', definition: 'Fait preuve de persévérance et de motivation pour atteindre les objectifs de l’entreprise.' },
    'E': { word: 'Éthique', definition: 'Agit avec intégrité et respect des normes professionnelles et morales.' },
    'F': { word: 'Flexible', definition: 'Capable de s’adapter aux exigences changeantes du travail et aux horaires variés.' },
    'G': { word: 'Gestionnaire', definition: 'Compétent dans la planification, l’organisation et la direction des ressources pour atteindre les objectifs fixés.' },
    'H': { word: 'Habile', definition: 'Possède des compétences techniques ou spécialisées élevées pertinentes pour son domaine d’activité.' },
    'I': { word: 'Innovateur', definition: 'Propose des idées créatives et des solutions novatrices pour améliorer les processus ou les produits.' },
    'J': { word: 'Juste', definition: 'Fait preuve d’équité et d’impartialité dans les décisions et les actions au travail.' },
    'K': { word: 'KPI-orienté', definition: 'Concentré sur les indicateurs clés de performance pour mesurer et améliorer constamment les résultats.' },
    'L': { word: 'Leader', definition: 'Inspire et guide les autres, favorisant un environnement de travail motivant et productif.' },
    'M': { word: 'Motivé', definition: 'Démontre un engagement fort et une passion pour son travail et les objectifs de l’entreprise.' },
    'N': { word: 'Négociateur', definition: 'Habile à trouver des terrains d’entente et à conclure des accords avantageux pour toutes les parties.' },
    'O': { word: 'Orienté objectifs', definition: 'Axé sur l’atteinte des buts et des résultats spécifiques, avec une planification et une exécution efficaces.' },
    'P': { word: 'Proactif', definition: 'Anticipe les besoins et les problèmes potentiels, en prenant des initiatives pour les résoudre avant qu’ils ne surviennent.' },
    'Q': { word: 'Qualifié', definition: 'Possède les compétences, les connaissances et l’expérience requises pour son rôle professionnel.' },
    'R': { word: 'Résilient', definition: 'Capable de gérer le stress et de rebondir face aux défis et aux échecs.' },
    'S': { word: 'Stratégique', definition: 'Pense et planifie à long terme, en alignant les actions avec les objectifs globaux de l’entreprise.' },
    'T': { word: 'Travailleur', definition: 'Fait preuve d’assiduité et d’engagement dans l’accomplissement de ses tâches.' },
    'U': { word: 'Unificateur', definition: 'Promeut la cohésion et la collaboration au sein de l’équipe ou de l’organisation.' },
    'V': { word: 'Visionnaire', definition: 'Capable de voir au-delà du présent et de planifier l’avenir avec imagination et sagesse.' },
    'W': { word: 'Winner', definition: 'Axé sur la réussite, contribuant activement aux succès de l’entreprise.' },
    'X': { word: 'Xénophile', definition: 'Ouvert et appréciant la diversité culturelle, favorisant un environnement de travail inclusif.' },
    'Y': { word: 'Yield-management', definition: 'Utilise des stratégies de gestion des revenus pour optimiser la profitabilité de l’entreprise.' },
    'Z': { word: 'Zélé', definition: 'Très enthousiaste et dévoué à ses responsabilités professionnelles.' }
};

const negativeData = {
    'A': { word: 'Absentéiste', definition: 'Manque fréquemment au travail sans justification valable, nuisant à la productivité.' },
    'B': { word: 'Borné', definition: 'Refuse d’envisager de nouvelles idées ou des perspectives différentes, limitant l’innovation.' },
    'C': { word: 'Confrontationnel', definition: 'Prone les conflits plutôt que la collaboration, nuisant à l’ambiance de travail.' },
    'D': { word: 'Désengagé', definition: 'Manque d’intérêt et de motivation pour son travail, affectant la performance.' },
    'E': { word: 'Égoïste', definition: 'Privilégie ses intérêts personnels au détriment de ceux de l’équipe ou de l’entreprise.' },
    'F': { word: 'Frileux', definition: 'Hésite à prendre des risques ou à s’engager dans des initiatives novatrices.' },
    'G': { word: 'Gossip', definition: 'Propage des rumeurs ou des informations non vérifiées, nuisant à l’environnement de travail.' },
    'H': { word: 'Hésitant', definition: 'Manque de décision, ce qui peut retarder les projets et les initiatives.' },
    'I': { word: 'Inflexible', definition: 'Résistant au changement, ce qui peut entraver l’adaptation et l’évolution de l’entreprise.' },
    'J': { word: 'Jugemental', definition: 'Critique les autres de manière excessive et non constructive, créant une atmosphère négative.' },
    'K': { word: 'Kleptomaniaque', definition: 'Prend des biens de l’entreprise sans permission, compromettant la confiance.' },
    'L': { word: 'Lâche', definition: 'Évite de prendre des responsabilités ou de faire face aux problèmes, affectant la résolution de conflits.' },
    'M': { word: 'Malcommode', definition: 'Difficile à travailler avec, en raison d’un comportement désagréable ou exigeant.' },
    'N': { word: 'Négligent', definition: 'Manque de précision et d’attention aux détails, pouvant mener à des erreurs coûteuses.' },
    'O': { word: 'Obstiné', definition: 'Persiste dans ses idées malgré les conseils ou les preuves contraires, limitant l’efficacité.' },
    'P': { word: 'Pessimiste', definition: 'Voit le côté négatif des situations, affectant le moral et la motivation de l’équipe.' },
    'Q': { word: 'Querelleur', definition: 'Provoque fréquemment des disputes, perturbant la paix et la productivité.' },
    'R': { word: 'Réfractaire', definition: 'S’oppose activement aux directives ou aux changements proposés par la direction.' },
    'S': { word: 'Sceptique', definition: 'Doute de manière excessive des initiatives et des motivations, freinant le progrès.' },
    'T': { word: 'Tardif', definition: 'Souvent en retard, impactant négativement le déroulement des réunions et des projets.' },
    'U': { word: 'Utopiste', definition: 'Poursuit des idéaux irréalistes, détournant l’attention des objectifs réalisables.' },
    'V': { word: 'Volatile', definition: 'Change fréquemment d’humeur ou de comportement, créant de l’incertitude.' },
    'W': { word: 'Wagon', definition: 'Suiveur, manquant d’initiative et de contribution active aux objectifs de l’équipe.' },
    'X': { word: 'Xénophobe', definition: 'Résistant à la diversité culturelle, nuisant à l’inclusion et à la collaboration.' },
    'Y': { word: 'Yoyo', definition: 'Inconsistant dans le travail et les performances, compromettant la fiabilité.' },
    'Z': { word: 'Zéro', definition: 'Manque d’apport significatif, n’ajoutant pas de valeur à l’équipe ou à l’entreprise.' }
};

function getRandomLetter() {
    const letters = Object.keys(positiveData);
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

let foundLetters = new Set(); // Utilise un Set pour stocker les lettres trouvées sans doublons

function buildInterface() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const letterSelector = document.createElement('select');
    letterSelector.setAttribute('id', 'letterSelector');
    Object.keys(positiveData).forEach(letter => {
        const option = document.createElement('option');
        option.value = letter;
        option.textContent = letter;
        letterSelector.appendChild(option);
    });
    container.appendChild(letterSelector);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Valider';
    submitButton.setAttribute('id', 'submitButton');
    submitButton.onclick = function() { checkLetter(); };
    container.appendChild(submitButton);

    const showFoundButton = document.createElement('button');
    showFoundButton.textContent = 'Afficher les lettres trouvées';
    showFoundButton.setAttribute('id', 'showFoundButton');
    showFoundButton.onclick = function() { showFoundLetters(); };
    container.appendChild(showFoundButton);

    const resultContainer = document.createElement('div');
    resultContainer.setAttribute('id', 'resultContainer');
    container.appendChild(resultContainer);

    document.body.appendChild(container);
}

function blinkButton(button) {
    let count = 0;
    const intervalId = setInterval(() => {
        button.style.backgroundColor = (count % 2 === 0) ? getRandomColor() : '';
        if (++count >= 10) {
            clearInterval(intervalId);
            button.style.backgroundColor = ''; // Reset to original or default color
        }
    }, 200);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function checkLetter() {
    const selectedLetter = document.getElementById('letterSelector').value;
    const randomLetter = getRandomLetter();
    const resultContainer = document.getElementById('resultContainer');
    if (selectedLetter === randomLetter) {
        foundLetters.add(selectedLetter); // Ajoute toujours la lettre trouvée sans vérifier si elle était déjà ajoutée
        displayLetterInfo(selectedLetter, resultContainer);
        const submitButton = document.getElementById('submitButton');
        submitButton.disabled = true;
        blinkButton(submitButton);
        setTimeout(() => {
            submitButton.disabled = false;
        }, 5000);
    } else {
        resultContainer.innerHTML = `<p>Désolé, vous n'avez pas gagné cette fois-ci. La lettre aléatoire était "${randomLetter}". Essayez à nouveau !</p>`;
    }
}

function displayLetterInfo(letter, container) {
    const positiveWord = positiveData[letter].word;
    const positiveDefinition = positiveData[letter].definition;
    const negativeWord = negativeData[letter].word;
    const negativeDefinition = negativeData[letter].definition;
    container.innerHTML = `
        <p>Félicitations ! Vous avez gagné avec la lettre "${letter}"!</p>
        <h3>Positif : ${positiveWord}</h3>
        <p>${positiveDefinition}</p>
        <h3>Négatif : ${negativeWord}</h3>
        <p>${negativeDefinition}</p>
    `;
}

function showFoundLetters() {
    const resultContainer = document.getElementById('resultContainer');
    if (foundLetters.size === 0) {
        resultContainer.innerHTML = '<p>Aucune lettre trouvée pour le moment.</p>';
        return;
    }

    resultContainer.innerHTML = '<p>Lettres trouvées :</p>';
    foundLetters.forEach(letter => {
        const positiveWord = positiveData[letter].word;
        const positiveDefinition = positiveData[letter].definition;
        const negativeWord = negativeData[letter].word;
        const negativeDefinition = negativeData[letter].definition;
        resultContainer.innerHTML += `
            <h3>Lettre : ${letter}</h3>
            <p>Positif : ${positiveWord} - ${positiveDefinition}</p>
            <p>Négatif : ${negativeWord} - ${negativeDefinition}</p>
        `;
    });
}

// Initialisation
buildInterface();