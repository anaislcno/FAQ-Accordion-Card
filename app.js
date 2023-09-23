// Loading functon

async function loadJsonFromFilename(filename) {
  var jsonData = [];

  if (filename == null) return;

  try {
    const response = await fetch(filename);
    jsonData = await response.json();
  } catch (err) {
    throw "Error fetching data";
  }

  return jsonData;
}

// Iterate on data

const faqData = await loadJsonFromFilename("faq_data.json");

faqData.forEach((element) => {
  console.log("Question: ", element["question"]);
  console.log("Answer: ", element["answer"]);
});

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
    this.classList.toggle("active");

    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
