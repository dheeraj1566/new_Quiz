import { questions } from "./question.js";

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");

// Function to load one question at a time
function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    return showResult();
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Clear previous content
  quizContainer.innerHTML = "";

  // Create question element
  const questionElement = document.createElement("p");
  questionElement.innerHTML = `<strong>Q${currentQuestionIndex + 1}: </strong> ${currentQuestion.q}`;
  quizContainer.appendChild(questionElement);

  // Create options container
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  for (let j = 0; j < currentQuestion.opt.length; j++) {
    const option = document.createElement("p");
    option.textContent = currentQuestion.opt[j];
    option.classList.add("option");
    option.onclick = () => checkAnswer(currentQuestion.opt[j]);
    optionsContainer.appendChild(option);
  }

  quizContainer.appendChild(optionsContainer);
}

// Function to check the answer
function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  loadQuestion();
}

// Function to display the final score
function showResult() {
  quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>`;
}

// Load the first question on page load
loadQuestion();
