// script.js
var anagrams = ["кот", "дом", "река"]; // список анаграмм
var currentAnagramIndex = 0;

function displayCurrentAnagram() {
    document.getElementById("anagram").textContent = shuffle(anagrams[currentAnagramIndex]);
}

function checkAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();
    var currentAnagram = anagrams[currentAnagramIndex];

    if (answer === currentAnagram) {
        document.getElementById("message").textContent = "Правильно! Следующая анаграмма...";
        currentAnagramIndex = (currentAnagramIndex + 1) % anagrams.length;
        displayCurrentAnagram();
        document.getElementById("answer").value = "";
    } else {
        document.getElementById("message").textContent = "Неправильный ответ. Попробуйте еще раз.";
    }
}

function getNewAnagram() {
    currentAnagramIndex = (currentAnagramIndex + 1) % anagrams.length;
    displayCurrentAnagram();
    document.getElementById("answer").value = "";
    document.getElementById("message").textContent = "";
}

// Функция для перемешивания букв в слове
function shuffle(word) {
    var shuffledWord = word.split('').sort(function(){return 0.5-Math.random()}).join('');
    // Проверяем, чтобы перемешанные буквы не совпадали с исходным словом
    if (shuffledWord === word) {
        return shuffle(word);
    }
    return shuffledWord;
}

// При загрузке страницы отображаем первую анаграмму
window.onload = function() {
    displayCurrentAnagram();
};
