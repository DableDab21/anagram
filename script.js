var anagrams = ["кот", "дом", "река"]; // список анаграмм
var currentAnagramIndex = 0;
var anagramContainer = document.getElementById("anagram");
var answerInput = document.getElementById("answer");
var message = document.getElementById("message");

function displayCurrentAnagram() {
    anagramContainer.textContent = anagrams[currentAnagramIndex];
}

function checkAnswer() {
    var answer = answerInput.value.toLowerCase();
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
