var anagrams = ["КОТ", "ДОМ", "КИТ"]; // список анаграмм (используем большие буквы)
var currentAnagramIndex = 0;
var anagramLetters = document.querySelectorAll('.anagram-letter');
var answerInput = document.getElementById("answer");
var message = document.getElementById("message");

// Функция, которая перемешивает символы в строке
function shuffleString(str) {
    var shuffledStr = str.split('').sort(function(){return 0.5-Math.random()}).join('');
    return shuffledStr;
}

// Функция, которая перемешивает буквы в слове, оставляя только те, которые есть в исходном слове
function shuffleLettersInWord(word) {
    var shuffledWord = '';
    var originalLetters = word.split('');
    var shuffledLetters = shuffleString(word).split('');
    shuffledLetters.forEach(function(letter) {
        if (originalLetters.includes(letter)) {
            shuffledWord += letter;
            originalLetters.splice(originalLetters.indexOf(letter), 1);
        }
    });
    return shuffledWord;
}

function displayCurrentAnagram() {
    var currentAnagram = shuffleLettersInWord(anagrams[currentAnagramIndex]); // перемешиваем буквы только из исходного слова
    var correctAnagram = anagrams[currentAnagramIndex];
    
    // Проверяем, совпадает ли первоначальная анаграмма с правильным ответом
    while (currentAnagram === correctAnagram) {
        currentAnagram = shuffleLettersInWord(anagrams[currentAnagramIndex]);
    }
    
    for (var i = 0; i < currentAnagram.length; i++) {
        // Устанавливаем изображение для каждой буквы анаграммы
        anagramLetters[i].src = "img/" + currentAnagram[i] + ".png";
    }
}

function checkAnswer() {
    var answer = answerInput.value.toUpperCase(); // приводим ответ пользователя к верхнему регистру
    var currentAnagram = anagrams[currentAnagramIndex];

    if (answer === currentAnagram) {
        message.textContent = "Правильно! Следующая анаграмма...";
        currentAnagramIndex = (currentAnagramIndex + 1) % anagrams.length;
        displayCurrentAnagram();
        answerInput.value = "";
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

// Отображаем первую анаграмму при загрузке страницы
displayCurrentAnagram();
