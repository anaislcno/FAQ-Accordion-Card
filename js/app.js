import * as jsonParser from "./utils/jsonParser.js";

// Iterate on data

const faqData = await jsonParser.loadJsonFromFilename("faq_data.json");

faqData.forEach((element) => {
  const { question, answer } = element;

  // Create a new question element
  const questionElement = document.createElement("div");

  // Create content
  questionElement.innerHTML = `
        <h2 class="question">${question}</h2>
        <p class="answer">${answer}</p>
        <hr />
    `;

  // Append the category element to the document
  document.getElementById("faq__container").appendChild(questionElement);
});

// Accordion

var accordion = document.getElementsByClassName("question");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (this.classList.contains("active") == false) {
      closeOldQuestionsActive();
    }
    openAndCloseAnswer(this);
  });
}

// Active question collapse

function openAndCloseAnswer(currentQuestion) {
  var answer = currentQuestion.nextElementSibling;

  currentQuestion.classList.toggle("active");

  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// Closed old opened question
function closeOldQuestionsActive() {
  const oldOpenedQuestion = document.querySelectorAll(".question.active");

  oldOpenedQuestion.forEach((oldQuestion) => {
    var oldAnswer = oldQuestion.nextElementSibling;

    oldQuestion.classList.remove("active");
    oldAnswer.style.display = "none";
  });
}
