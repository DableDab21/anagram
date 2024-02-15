const anagrams = ["КОТ", "ДОМ", "КИТ"];
let currentAnagramIndex = 0;
const anagramLetters = document.querySelectorAll('.anagram-letter');
const answerInput = document.getElementById("answer");
const message = document.getElementById("message");

function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

function shuffleLettersInWord(word) {
    const originalLetters = word.split('');
    const shuffledLetters = shuffleString(word).split('');
    let shuffledWord = '';
    shuffledLetters.forEach(letter => {
        if (originalLetters.includes(letter)) {
            shuffledWord += letter;
            originalLetters.splice(originalLetters.indexOf(letter), 1);
        }
    });
    return shuffledWord;
}

function displayCurrentAnagram() {
    let currentAnagram = shuffleLettersInWord(anagrams[currentAnagramIndex]);
    const correctAnagram = anagrams[currentAnagramIndex];
    
    while (currentAnagram === correctAnagram) {
        currentAnagram = shuffleLettersInWord(anagrams[currentAnagramIndex]);
    }
    
    currentAnagram.split('').forEach((letter, index) => {
        anagramLetters[index].src = `img/${letter}.png`;
    });
}

function checkAnswer() {
    const answer = answerInput.value.toUpperCase();
    const currentAnagram = anagrams[currentAnagramIndex];

    if (!answer) {
        message.textContent = "Введите ответ!";
        return;
    }

    if (answer === currentAnagram) {
        if ([...anagramLetters].every(letter => letter.complete)) {
            message.textContent = "Правильно! Следующая анаграмма...";
            currentAnagramIndex = (currentAnagramIndex + 1) % anagrams.length;
            displayCurrentAnagram();
            answerInput.value = "";
        }
    } else {
        message.textContent = "Неправильный ответ. Попробуйте еще раз.";
    }
}

function getNewAnagram() {
    currentAnagramIndex = (currentAnagramIndex + 1) % anagrams.length;
    displayCurrentAnagram();
    answerInput.value = "";
    message.textContent = "";
}

displayCurrentAnagram();
