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
  //   questionElement.className = "category";

  // Create content
  questionElement.innerHTML = `
        <h2 class="question">${question}</h2>
        <p class="answer">${answer}</p>
    `;

  // Append the category element to the document
  document.getElementById("faq__container").appendChild(questionElement);
});
