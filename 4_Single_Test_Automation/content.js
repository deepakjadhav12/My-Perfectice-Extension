//* Get Local Storage Key Starting With Prefix
function getLocalStorageKeyStartingWith(prefix) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      return key;
    }
  }
  return null;
}

//* Delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//* Returns Question Order
function getQuestionOrder() {
  const orderPrefix = "attempt_question_order";
  const orderKey = getLocalStorageKeyStartingWith(orderPrefix);
  const orderValue = localStorage.getItem(orderKey);
  const orderData = JSON.parse(orderValue);
  if (!orderData) return;
  return orderData;
}

//* Removes "attempt_test_map" after exam
function cleanData() {
  const testMapPrefix = "attempt_test_map";
  const testMapKey = getLocalStorageKeyStartingWith(testMapPrefix);
  const testMapValue = localStorage.getItem(testMapKey);
  const testMapParsedData = JSON.parse(testMapValue);
  try {
    if (Object.keys(testMapParsedData).length === 0) {
      localStorage.removeItem(testMapKey);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}

//* Get Answers Object
function getAnswersObject() {
  let allAnswers = {};
  const prefix = "test_data_of_attempt";
  const key = getLocalStorageKeyStartingWith(prefix);
  if (key) {
    const value = localStorage.getItem(key);
    const parsedData = JSON.parse(value);
    const questionOrder = getQuestionOrder();
    for (let i = 0; i < questionOrder.questions.length; i++) {
      const questionIndex = questionOrder.questions[i].q;
      let ansArray;
      for (let question of parsedData.questions) {
        if (question._id == questionIndex) {
          ansArray = question.answers;
        }
      }
      let answerText;
      for (let answerData of ansArray) {
        if (answerData.isCorrectAnswer) {
          answerText = answerData.answerText;
          break;
        }
      }
      const answerData = document.createElement("p");
      answerData.innerHTML = answerText;
      const answerDataValue = answerData.querySelector("p p");
      allAnswers[questionOrder.questions[i].countNumber] =
        answerDataValue.innerHTML;
    }
  }
  console.log(allAnswers);
  return allAnswers;
}

//* Get Answer
function getAnswer() {
  const allAnswers = getAnswersObject();
  const question = document.querySelector(
    ".question-box > .question-item .ck-content"
  );
  return allAnswers[question.innerHTML];
}

//* Select the correct option and click the option
function selectAnswer() {
  const options = document.querySelectorAll(
    ".question-box.ng-star-inserted > .question-answers p"
  );

  const optionsCheckBoxes = document.querySelectorAll(
    ".question-answers > div label"
  );

  let index;
  for (let i = 0; i < options.length; i++) {
    let questionNumber = document.querySelector(".count > span").innerHTML;
    console.log(questionNumber);
    let allAnswers = getAnswersObject();
    let correctAnswerText = allAnswers[questionNumber];
    console.log(correctAnswerText);
    if (options[i].innerHTML === correctAnswerText) {
      index = i;
      break;
    }
  }
  console.log(index);

  if (!optionsCheckBoxes[index]) {
    return;
  }

  if (index !== undefined && !options[index].closest(".answered")) {
    optionsCheckBoxes[index].click();
  }
}

//* Clicks the first question
function clickFirstQuestion() {
  const firstQuestion = document.querySelector(".question-table-item .btn");
  if (!firstQuestion) return;
  firstQuestion.click();
}

//* Navigate to the next question
function clickNextButton() {
  const nextButton = document.querySelector(".save-next-btn a");
  if (!nextButton) return;
  nextButton.click();
}

//* Get Question Order
function getQuestionOrder() {
  const orderPrefix = "attempt_question_order";
  const orderKey = getLocalStorageKeyStartingWith(orderPrefix);
  const orderValue = localStorage.getItem(orderKey);
  const orderData = JSON.parse(orderValue);
  if (!orderData) return;
  return orderData;
}

//* Returns the number of questions
function getQuestionsLength() {
  const questionOrder = getQuestionOrder();
  return questionOrder.questions.length;
}

//* Change Time of Questions and Total Time of Test
function changeTime() {
  const questionPrefix = "attempt_data";
  const questionKey = getLocalStorageKeyStartingWith(questionPrefix);

  const testDataPrefix = "test_data_of_attempt";
  const testDataKey = getLocalStorageKeyStartingWith(testDataPrefix);

  const totalTimePrefix = "attempt_time";
  const totalTimeKey = getLocalStorageKeyStartingWith(totalTimePrefix);

  const questionOrder = getQuestionOrder();
  if (!questionKey || !totalTimeKey) return;

  const testDataValue = localStorage.getItem(testDataKey);
  const testData = JSON.parse(testDataValue);

  const questionValue = localStorage.getItem(questionKey);
  const questionsData = JSON.parse(questionValue);

  const totalTime = testData.totalTime;
  console.log(totalTime);
  for (let i = 0; i < questionOrder.questions.length; i++) {
    questionsData.QA[i].timeEslapse =
      ((totalTime * 60) / getQuestionsLength()) * 1000;
  }
  localStorage.setItem(questionKey, JSON.stringify(questionsData));

  const totalTimeValue = localStorage.getItem(totalTimeKey);
  const totalTimeData = JSON.parse(totalTimeValue);
  totalTimeData.elapseSeconds = totalTime * 60;
  totalTimeData.testTimeCountDown = 0;
  localStorage.setItem(totalTimeKey, JSON.stringify(totalTimeData));
}

//* Remove Fraud
function removeFraud() {
  const fraudPrefix = "attempt_fraud";
  const fraudKey = getLocalStorageKeyStartingWith(fraudPrefix);
  if (fraudKey) {
    localStorage.removeItem(fraudKey);
  }
}

let monitoringInterval = null;

function startMonitoringLocalStorageChanges() {
  monitoringInterval = setInterval(() => {
    changeTime();
    removeFraud();
  }, 10);
}

function stopMonitoringLocalStorageChanges() {
  if (monitoringInterval !== null) {
    clearInterval(monitoringInterval);
    monitoringInterval = null;
  }
}

function finishButton() {
  const finishButton = document.querySelector(".finish-btn > a");
  finishButton.addEventListener("click", () => {
    const questionPrefix = "attempt_data";
    const questionKey = getLocalStorageKeyStartingWith(questionPrefix);
    const questionValue = localStorage.getItem(questionKey);
    const questionsData = JSON.parse(questionValue);
    console.log("Questions Data After: ", questionsData);

    const totalTimePrefix = "attempt_time";
    const totalTimeKey = getLocalStorageKeyStartingWith(totalTimePrefix);
    const totalTimeValue = localStorage.getItem(totalTimeKey);
    const totalTimeData = JSON.parse(totalTimeValue);
    console.log("Total Time Data After: ", totalTimeData);
  });
}

function removeAlertify() {
  const alertElements = document.querySelectorAll(".alertify");
  alertElements.forEach((element) => element.remove());
}

function observeDOMChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        removeAlertify();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

async function main() {
  const prefix = "test_data_of_attempt";
  const key = getLocalStorageKeyStartingWith(prefix);
  if (!key) {
    console.log("Answers not found");
    return;
  }

  clickFirstQuestion();
  for (let i = 0; i < getQuestionsLength(); i++) {
    await delay(1);
    selectAnswer();
    clickNextButton();
  }

  finishButton();
  startMonitoringLocalStorageChanges();
  await delay(5);
  location.reload();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    main();
    sendResponse({ status: "started" });
  } else if (message.action === "stop") {
    stopMonitoringLocalStorageChanges();
    sendResponse({ status: "stopped" });
  } else if (message.action === "clean") {
    cleanData();
    sendResponse({ status: "cleaned" });
  }
});
