import { questions } from "./question.js";

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");

// Function to load one question at a time
function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    return showResult();
  }
