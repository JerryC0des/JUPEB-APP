
var questionDiv = document.getElementById("questionDiv");
var optionDiv = document.getElementById("optionDiv");
var questionsButton = document.getElementById("questionsButton");
var answers = [];
var currentQuestion = 0;

function showCbt() {
  questionsButton.innerHTML = "";
  for (var i = 0; i < exam.questions.length; i++) {
      questionsButton.innerHTML += '<button class="qbtn" onclick="showQuestion(' + i + ')">' + (i + 1) + '</button>';
      answers[i] = -1;
  }
  showQuestion(0);
}

function startExam() {
  showCbt();
  document.getElementById("questionIndex").innerText = "Question " + (currentQuestion + 1);
  document.getElementById("submitbtn").style.display = "inline-block"; // Hide the start button
  document.getElementById("prevbtn").style.display = "inline-block"; // Hide the start button
  document.getElementById("nextbtn").style.display = "inline-block"; // Hide the start button
}

function showQuestion(questionNumber) {
questionDiv.innerHTML = exam.questions[questionNumber].question;
optionDiv.innerHTML = "";
const optionLetters = ['A', 'B', 'C', 'D']; // Letters to be added

for (var i = 0; i < exam.questions[questionNumber].options.length; i++) {
  const optionLetter = optionLetters[i];
  optionDiv.innerHTML += `
    <label class="radio-label">
        ${optionLetter}. 
        <input type="radio" onclick="selectAnswer(${questionNumber}, ${i})" name="questionOptions"/>
        ${exam.questions[questionNumber].options[i]}
    </label><br>`;
}

document.getElementById("questionIndex").innerText = "Question " + (questionNumber + 1);
const questionButtons = document.querySelectorAll("#questionsButton > button");
questionButtons.forEach(button => button.classList.remove("currentQuestion", "answeredQuestion"));

if (answers[questionNumber] !== -1) {
  questionButtons[questionNumber].classList.add("answeredQuestion");
}
questionButtons[questionNumber].classList.add("currentQuestion");
currentQuestion = questionNumber;
}

function selectAnswer(questionNumber, optionNumber) {
  answers[questionNumber] = optionNumber;
  document.querySelectorAll("#questionsButton > button")[questionNumber].classList.add("blueHightlight");
  answer[questionNumber] = optionNumber;
}

function prevQuestion() {
  if (currentQuestion > 0) {
      showQuestion(currentQuestion - 1);
  }
}

function nextQuestion() {
  if (currentQuestion < exam.questions.length - 1) {
      showQuestion(currentQuestion + 1);
  }
}

function submitExam() {
  var score = 0;
  for (var i = 0; i < exam.questions.length; i++) {
      if (answers[i] == exam.questions[i].answerPosition) {
          score++;
      }
  }
  displayScore(score);
  makeVisible("hiddenDiv");
  // You might want to display the score or perform other actions here
}

function displayScore(score) {
  var scoreDisplayDiv = document.getElementById("scoreDisplay");
  scoreDisplayDiv.innerHTML = "Score: " + score + " / " + exam.questions.length;
}

function makeVisible(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "block";
}
startExam();