const positiveData = {
    'A': { word: 'Accueillant', definition: 'Qui reçoit de manière chaleureuse et ouverte.' },
    'B': { word: 'Bienveillant', definition: 'Qui a une disposition favorable envers les autres.' },
    'C': { word: 'Calme', definition: 'Qui est tranquille, serein, sans agitation.' },
    'D': { word: 'Dynamique', definition: 'Plein d’énergie et d’activité.' },
    'E': { word: 'Entraînant', definition: 'Qui motive ou stimule à participer ou à agir.' },
    'F': { word: 'Fiable', definition: 'Digne de confiance, sur qui on peut compter.' },
    'G': { word: 'Gentil', definition: 'Aimable, doux et attentionné envers les autres.' },
    'H': { word: 'Honnête', definition: 'Qui agit de manière juste, loyale et sincère.' },
    'I': { word: 'Impliqué', definition: 'Qui participe activement et avec engagement.' },
    'J': { word: 'Joyeux', definition: 'Qui manifeste de la joie, du bonheur.' },
    'K': { word: 'Kantien', definition: 'Relatif à la philosophie de Kant, prônant la morale et la raison.' },
    'L': { word: 'Logique', definition: 'Qui est conforme à la raison, cohérent.' },
    'M': { word: 'Mature', definition: 'Qui a atteint un plein développement, en parlant de la personnalité.' },
    'N': { word: 'Naturel', definition: 'Qui est conforme à sa nature, simple et authentique.' },
    'O': { word: 'Ouvert d’esprit', definition: 'Disposé à comprendre et à accepter des idées ou des comportements différents.' },
    'P': { word: 'Persévérant', definition: 'Qui continue ses efforts malgré les difficultés.' },
    'Q': { word: 'Qualifié', definition: 'Qui possède les compétences ou les qualifications requises.' },
    'R': { word: 'Réaliste', definition: 'Qui perçoit et accepte la réalité telle qu’elle est.' },
    'S': { word: 'Sociable', definition: 'Qui aime être en compagnie d’autres, facile à vivre en société.' },
    'T': { word: 'Travailleur', definition: 'Qui travaille dur, avec assiduité et sérieux.' },
    'U': { word: 'Unique', definition: 'Qui est sans égal, exceptionnel dans son genre.' },
    'V': { word: 'Vif', definition: 'Rapide, alerte, plein d’énergie.' },
    'W': { word: 'Winner', definition: 'Gagnant, celui qui remporte une victoire.' },
    'X': { word: 'Xénophile', definition: 'Qui est attiré par ce qui est étranger, par les cultures différentes.' },
    'Y': { word: 'YingYang', definition: 'Principe de dualité, représentant des forces opposées mais complémentaires.' },
    'Z': { word: 'Zélé', definition: 'Plein de zèle, très actif et enthousiaste dans sa tâche.' }
};

const negativeData = {
    'A': { word: 'Anxieux', definition: 'Qui éprouve de l’anxiété, une inquiétude intense.' },
    'B': { word: 'Bavard', definition: 'Qui parle beaucoup, souvent de manière inutile.' },
    'C': { word: 'Colérique', definition: 'Qui se met facilement en colère, irritable.' },
    'D': { word: 'Destructeur', definition: 'Qui détruit, cause des dommages ou des pertes.' },
    'E': { word: 'Égoïste', definition: 'Qui ne pense qu’à ses propres intérêts, sans considération pour les autres.' },
    'F': { word: 'Frondeur', definition: 'Qui aime contester l’autorité ou les normes établies.' },
    'G': { word: 'Grossier', definition: 'Qui manque de finesse, de politesse ou d’éducation.' },
    'H': { word: 'Humiliant', definition: 'Qui cause de la honte ou une perte de dignité.' },
    'I': { word: 'Irresponsable', definition: 'Qui manque de responsabilité, ne prend pas en compte les conséquences de ses actes.' },
    'J': { word: 'Jaloux', definition: 'Qui ressent de la jalousie, envie ce que les autres possèdent.' },
    'K': { word: 'Kakou', definition: 'Terme marseillais désignant une personne se comportant de manière arrogante ou provocante.' },
    'L': { word: 'Lunatique', definition: 'Qui change fréquemment d’humeur ou de comportement sans raison apparente.' },
    'M': { word: 'Malveillant', definition: 'Qui souhaite du mal ou cherche à nuire.' },
    'N': { word: 'Négatif', definition: 'Qui a une attitude pessimiste, voit les aspects négatifs.' },
    'O': { word: 'Orgueilleux', definition: 'Qui a une trop haute opinion de soi, méprisant envers les autres.' },
    'P': { word: 'Perturbateur', definition: 'Qui cause des troubles, des désordres.' },
    'Q': { word: 'Qui sait tout', definition: 'Personne prétendant tout savoir, souvent de manière arrogante.' },
    'R': { word: 'Raciste', definition: 'Qui manifeste de la discrimination ou de la haine envers d’autres races.' },
    'S': { word: 'Silencieux', definition: 'Qui ne parle pas, qui est trop réservé ou manque de communication.' },
    'T': { word: 'Tyrannique', definition: 'Qui exerce le pouvoir de manière abusive et autoritaire.' },
    'U': { word: 'Utopiste', definition: 'Qui poursuit des idéaux irréalistes, inatteignables.' },
    'V': { word: 'Vil', definition: 'Qui est méprisable, bas ou indigne.' },
    'W': { word: 'Wagon', definition: 'Utilisé ici de manière figurative pour indiquer quelqu’un ou quelque chose qui ne se distingue pas, ordinaire.' },
    'X': { word: 'Xénophobe', definition: 'Qui a peur des étrangers ou ce qui est perçu comme étranger.' },
    'Y': { word: 'Yoyo', definition: 'Utilisé de manière figurative pour désigner quelqu’un qui est instable ou inconstant.' },
    'Z': { word: 'Zéro', definition: 'Utilisé ici pour désigner une personne ou une chose sans valeur ou importance.' }
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