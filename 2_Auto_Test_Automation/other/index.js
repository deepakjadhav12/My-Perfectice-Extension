function getLocalStorageKeyStartingWith(prefix) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      return key;
    }
  }
  return null;
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function testDataFunc() {
  const testData = "test_data_of_attempt";
  const testDataKey = getLocalStorageKeyStartingWith(testData);
  const testDataValue = localStorage.getItem(testDataKey);
  const testDataObject = JSON.parse(testDataValue);
  if (!testDataObject) return;
  return testDataObject;
}
function getQuestionOrder() {
  const orderPrefix = "attempt_question_order";
  const orderKey = getLocalStorageKeyStartingWith(orderPrefix);
  const orderValue = localStorage.getItem(orderKey);
  const orderData = JSON.parse(orderValue);
  if (!orderData) return;
  return orderData;
}
function getAttemptData() {
  const questionPrefix = "attempt_data";
  const questionKey = getLocalStorageKeyStartingWith(questionPrefix);
  const questionValue = localStorage.getItem(questionKey);
  const questionsData = JSON.parse(questionValue);
  if (!questionsData) return;
  return questionsData;
}
function getAttemptTime() {
  const totalTimePrefix = "attempt_time";
  const totalTimeKey = getLocalStorageKeyStartingWith(totalTimePrefix);
  const totalTimeValue = localStorage.getItem(totalTimeKey);
  const totalTimeData = JSON.parse(totalTimeValue);
  if (!totalTimeData) return;
  return totalTimeData;
}
function getQuestionPosition() {
  const positionPrefix = "attempt_question_position";
  const positionKey = getLocalStorageKeyStartingWith(positionPrefix);
  const positionValue = localStorage.getItem(positionKey);
  const positionData = JSON.parse(positionValue);
  if (!positionData) return;
  return positionData;
}
function createQA() {
  const questionOrder = getQuestionOrder();
  const testData = testDataFunc();

  let QA = [];
  for (let i = 0; i < questionOrder.questions.length; i++) {
    let QAObject = {};
    const q = questionOrder.questions[i].q;
    for (let j = 0; j < testData.questions.length; j++) {
      if (testData.questions[j]._id === q) {
        const currentQuestion = testData.questions[j];
        let answerId = null;
        for (let k = 0; k < currentQuestion.answers.length; k++) {
          if (currentQuestion.answers[k].isCorrectAnswer) {
            answerId = currentQuestion.answers[k]._id;
          }
        }
        QAObject["question"] = currentQuestion._id;
        QAObject["answers"] = [
          {
            answerId: answerId,
            answerText: "",
            userText: "",
          },
        ];
        QAObject["timeEslapse"] = 80000;
        QAObject["topic"] = currentQuestion.topic;
        QAObject["subject"] = currentQuestion.subject;
        QAObject["unit"] = currentQuestion.unit;
        QAObject["category"] = currentQuestion.category;
        QAObject["isMissed"] = false;
        QAObject["answerChanged"] = 0;
        QAObject["crossedOutAnswers"] = [];
        QAObject["hasMarked"] = false;
        QAObject["wasMarked"] = false;
        QAObject["offscreen"] = [];
        QAObject["createdAt"] = currentQuestion.createdAt;
      }
    }
    QA.push(QAObject);
  }
  return { QA };
}
function changeAttemptData() {
  const attemptTime = getAttemptTime();
  attemptTime.elapseSeconds = 1200;
  attemptTime.testTimeCountDown = 0;
  attemptTime.savePoint = new Date().getTime();
  attemptTime.lastCheckpointTime = attemptTime.savePoint - 1200000;
  return attemptTime;
}
function assignData() {
  const attemptDataKey = getLocalStorageKeyStartingWith("attempt_data");
  const attemptTimeKey = getLocalStorageKeyStartingWith("attempt_time");
  const attemptData = createQA();
  const attemptTime = changeAttemptData();
  if (!attemptData || !attemptTime) return;
  localStorage.setItem(attemptDataKey, JSON.stringify(attemptData));
  localStorage.setItem(attemptTimeKey, JSON.stringify(attemptTime));
}
function removeFraud() {
  const fraudKey = getLocalStorageKeyStartingWith("attempt_fraud");
  if (fraudKey) {
    localStorage.removeItem(fraudKey);
  }
}
let monitoringInterval = null;
function startMonitoringLocalStorageChanges() {
  monitoringInterval = setInterval(() => {
    console.log("Monitoring");
    assignData();
    removeFraud();
  }, 10);
}
function stopMonitoringLocalStorageChanges() {
  if (monitoringInterval !== null) {
    clearInterval(monitoringInterval);
    monitoringInterval = null;
  }
}

function submitFeedback() {
  const star = document.querySelectorAll(".stars .nav li > a");
  star[star.length - 1].click();
  const yesOrNo = document.querySelectorAll(".float-right > .btn");
  yesOrNo[0].click();
  yesOrNo[2].click();
  var submit = document.querySelectorAll(".ratings-area-wrap button");
  submit[0].click();
}

async function main() {
  console.log("New QA", createQA());
  console.log("New Attempt Time", changeAttemptData());
  startMonitoringLocalStorageChanges();
  await delay(5);
  location.reload();
  await delay(1000);
  stopMonitoringLocalStorageChanges();
  await delay(250);
  submitFeedback();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    main();
    sendResponse({ status: "started" });
  } else if (message.action === "stop") {
    stopMonitoringLocalStorageChanges();
    sendResponse({ status: "stopped" });
  }
});

// https://lpu.myperfectice.com/student/test-feedbacks/6634c7ba4533d195b4aea4ee/667fa2d8c1db827c04a5832b
