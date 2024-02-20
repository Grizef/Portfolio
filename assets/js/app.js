const positiveData = {
    'A': { word: 'Accueillant', definition: 'Crée un environnement de travail chaleureux et inclusif.' },
    'B': { word: 'Bienveillant', definition: 'Favorise le bien-être des collègues et contribue positivement à l’ambiance de travail.' },
    'C': { word: 'Calme', definition: 'Maintient son calme dans les situations stressantes, apportant stabilité et sérénité.' },
    'D': { word: 'Dynamique', definition: 'Injecte énergie et innovation dans ses projets et son équipe.' },
    'E': { word: 'Entraînant', definition: 'Motive ses collègues, les encourageant à atteindre leurs objectifs.' },
    'F': { word: 'Fiable', definition: 'Démontre une grande fiabilité dans la gestion des tâches et des responsabilités.' },
    'G': { word: 'Gentil', definition: 'Fait preuve de gentillesse et de soutien envers ses collègues.' },
    'H': { word: 'Honnête', definition: 'Valorise la transparence et l’intégrité dans toutes les interactions professionnelles.' },
    'I': { word: 'Impliqué', definition: 'Engagé dans ses missions et contribue activement aux objectifs de l’équipe.' },
    'J': { word: 'Joyeux', definition: 'Apporte une attitude positive qui enrichit le climat de travail.' },
    'K': { word: 'Kantien', definition: 'Adopte une approche éthique et morale dans les décisions d’entreprise.' },
    'L': { word: 'Logique', definition: 'Utilise un raisonnement logique pour résoudre les problèmes et optimiser les processus.' },
    'M': { word: 'Mature', definition: 'Fait preuve de maturité dans le jugement et la gestion des relations professionnelles.' },
    'N': { word: 'Naturel', definition: 'Agit de manière authentique, favorisant une communication ouverte.' },
    'O': { word: 'Ouvert d’esprit', definition: 'Accueille les nouvelles idées et perspectives, favorisant l’innovation.' },
    'P': { word: 'Persévérant', definition: 'Persiste face aux défis, trouvant des solutions pour surmonter les obstacles.' },
    'Q': { word: 'Qualifié', definition: 'Possède les compétences et l’expertise nécessaires pour exceller dans son rôle.' },
    'R': { word: 'Réaliste', definition: 'Évalue les situations avec pragmatisme pour atteindre les objectifs de manière efficace.' },
    'S': { word: 'Sociable', definition: 'Facilite la collaboration et la communication au sein de l’équipe.' },
    'T': { word: 'Travailleur', definition: 'Montre un engagement et une diligence exceptionnels dans son travail.' },
    'U': { word: 'Unique', definition: 'Apporte une perspective unique, contribuant à la diversité et à l’innovation.' },
    'V': { word: 'Vif', definition: 'Réagit rapidement aux situations, avec agilité intellectuelle.' },
    'W': { word: 'Winner', definition: 'Orienté résultats, visant l’excellence et le succès dans ses projets.' },
    'X': { word: 'Xénophile', definition: 'Valorise la diversité culturelle et encourage l’intégration des perspectives internationales.' },
    'Y': { word: 'YinYang', definition: 'Promeut l’équilibre et l’harmonie dans l’équipe, reconnaissant la valeur des contributions contrastées.' },
    'Z': { word: 'Zélé', definition: 'Manifeste un enthousiasme et un dévouement exceptionnels pour ses tâches et projets.' }
};


const negativeData = {
    'A': { word: 'Anxieux', definition: 'Peut laisser l’anxiété affecter la prise de décision et le bien-être de l’équipe.' },
    'B': { word: 'Bavard', definition: 'Peut perturber la concentration des collègues par des conversations non pertinentes.' },
    'C': { word: 'Colérique', definition: 'Tendance à réagir avec colère, affectant le climat de travail.' },
    'D': { word: 'Destructeur', definition: 'Peut compromettre la cohésion d’équipe et l’atteinte des objectifs.' },
    'E': { word: 'Égoïste', definition: 'Met en avant ses intérêts personnels au détriment de ceux de l’équipe.' },
    'F': { word: 'Frondeur', definition: 'Challenge constamment les directives sans proposer de solutions constructives.' },
    'G': { word: 'Grossier', definition: 'Manque de respect envers les collègues, nuisant à l’environnement de travail.' },
    'H': { word: 'Humiliant', definition: 'Peut causer une baisse de moral en dévalorisant les efforts des autres.' },
    'I': { word: 'Irresponsable', definition: 'N’assume pas les conséquences de ses actions, impactant la fiabilité de l’équipe.' },
    'J': { word: 'Jaloux', definition: 'Peut miner la confiance et l’esprit de collaboration au sein de l’équipe.' },
    'K': { word: 'Kakou', definition: 'Adopte une attitude provocante ou arrogante, nuisant à l’harmonie de l’équipe.' },
    'L': { word: 'Lunatique', definition: 'Inconsistance dans l’humeur ou l’engagement, rendant difficile la collaboration.' },
    'M': { word: 'Malveillant', definition: 'Agit avec l’intention de nuire, affectant la sécurité et la confiance au sein de l’équipe.' },
    'N': { word: 'Négatif', definition: 'Adopte une vision pessimiste, pouvant affecter le moral et la motivation.' },
    'O': { word: 'Orgueilleux', definition: 'Difficulté à collaborer ou à accepter des feedbacks, limitant l’apprentissage et l’évolution.' },
    'P': { word: 'Perturbateur', definition: 'Cause des interruptions ou des conflits, perturbant le flux de travail.' },
    'Q': { word: 'Qui sait tout', definition: 'Peut décourager le partage d’idées en étouffant les contributions des autres.' },
    'R': { word: 'Raciste', definition: 'Crée un environnement toxique, allant à l’encontre des valeurs d’inclusion et de respect.' },
    'S': { word: 'Silencieux', definition: 'Manque de communication, pouvant entraver la coordination et l’efficacité de l’équipe.' },
    'T': { word: 'Tyrannique', definition: 'Exerce une autorité excessive, limitant l’initiative et la créativité des collègues.' },
    'U': { word: 'Utopiste', definition: 'Poursuit des objectifs irréalistes, risquant de détourner les ressources des buts atteignables.' },
    'V': { word: 'Vil', definition: 'Agit de manière indigne, compromettant l’éthique et l’intégrité professionnelle.' },
    'W': { word: 'Wagon', definition: 'Manque de distinction ou de contribution significative, passant inaperçu.' },
    'X': { word: 'Xénophobe', definition: 'Contribue à une culture d’entreprise fermée, rejetant la diversité et l’innovation.' },
    'Y': { word: 'Yoyo', definition: 'Montre une performance inconstante, affectant la prévisibilité et la planification.' },
    'Z': { word: 'Zéro', definition: 'Apporte peu ou pas de valeur ajoutée, n’atteignant pas les standards de performance attendus.' }
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