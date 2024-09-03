function getLocalStorageKeyStartingWith(prefix) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      return key;
    }
  }
  return null;
}
function getLocalStorageData(prefix) {
  const key = getLocalStorageKeyStartingWith(prefix);
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
document.addEventListener("keydown", function (event) {
  // const API_URL = "http://localhost:3000";
  // const FRONT_URL = "https://sai-myperfecticekey.netlify.app";

  const API_URL = "https://sai-key-server.vercel.app";
  const FRONT_URL = "https://sai-myperfecticekey.netlify.app";

  if (event.altKey && event.code === "KeyY") {
    const data = getLocalStorageData("test_data_of_attempt");
    if (data) {
      const sendData = {
        questions: data.questions.map((question, index) => ({
          questionText: question.questionText,
          correctAnswer: question.answers.find(
            (answer) => answer.isCorrectAnswer
          ).answerText,
        })),
      };
      console.log("Send Data:", sendData);
      fetch(`${API_URL}/storeData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("Data successfully sent:", data);
          alert("Redirecting to answer key page. Please wait...");
          const url = `${FRONT_URL}?data=${data.id}`;
          chrome.runtime.sendMessage({ action: "openTab", url: url });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Error: Please open the test and then press (Alt+Y).");
      console.log("No data found.");
    }
  }
});
