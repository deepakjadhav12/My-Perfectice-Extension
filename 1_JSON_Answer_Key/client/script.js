document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get("data");
  const answerDiv = document.querySelector(".answer");
  const API_URL = "https://sai-key-server.vercel.app";

  console.log("dataParam", dataParam);
  if (dataParam) {
    fetch(`${API_URL}/getData/${dataParam}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        displayData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        answerDiv.innerText = "Error retrieving data.";
      });
  } else {
    answerDiv.innerText = "No data ID found in URL.";
  }

  const input = document.querySelector("input");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      try {
        const jsonData = JSON.parse(input.value);
        displayData(jsonData);
      } catch (error) {
        alert("Invalid JSON format.");
        console.error("Invalid JSON:", error);
        answerDiv.innerText = "Invalid JSON format.";
      }
    }
  });

  function displayData(data) {
    const questions = data.questions;
    let htmlContent = '<div class="questions">';
    questions.forEach((question, index) => {
      htmlContent += `<div class="question-block">
        <h3>Question ${index + 1}:</h3>
        <p>${question.questionText}</p>
        <h4>Correct Answer:</h4>
        <p>${question.correctAnswer}</p>
      </div><hr>`;
    });

    htmlContent += "</div>";
    answerDiv.innerHTML = htmlContent;
  }
});
