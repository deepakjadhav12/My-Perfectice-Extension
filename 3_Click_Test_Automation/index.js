let monitoringInterval = null;
let fullScreenInterval = null;
const TESTIDS = {
  1: [
    "6634c4107e14581412fb5628",
    "66254790f609d3da9e0f1284",
    "6634bbee445b1686c621e67a",
    "6634c46d5c9ae0fc92e08fff",
    "6634c72c4533d195b4a6046c",
    "6634bc057e14581412d849c0",
    "6634c4847e14581412fce30f",
    "6634c7414533d195b4a777f6",
    "6630dacab34afc3f4fc3bc95",
    "6634c4a05c9ae0fc92e0e412",
    "6634c7524533d195b4a8b249",
    "6634bc19445b1686c621fa86",
    "66309feae117b5a343190fa6",
    "6625489e197b879ecdfaa9db",
    "6630db10b34afc3f4fc4325b",
    "6634c7ba4533d195b4aea4ee",
    "6634bf745c9ae0fc92cdc4f5",
    "6634c17a7e14581412eee846",
    "6634c7c94533d195b4aff868",
    "6634bf8a7e14581412e7a23f",
    "6634c1917e14581412efeca9",
    "6634c7dc4533d195b4b26096",
    "6634bf9b5c9ae0fc92ce7256",
    "6634c1ad7e14581412f0ae3c",
    "6630e986dbd7fc19a84e119f",
    "6625490601ec8b58240ed67a",
    "6630ea94b5ace8d893b31ade",
    "6630db4e290ba4886b35043c",
    "6634c82d4533d195b4b8b37e",
    "6634bffe445b1686c6304688",
    "6634c8887e145814120be571",
    "6634be34445b1686c62a4acc",
    "6634c8494533d195b4b9b5d6",
    "6634c012445b1686c630f2c7",
    "6634c89a4533d195b4bb3142",
    "6634be487e14581412e10ae9",
    "6634c85a4533d195b4b9f6b0",
    "6634c0287e14581412ea6471",
    "6634c8c24533d195b4bb72a0",
    "6634be655c9ae0fc92ca3a90",
  ],
  2: [
    "662552355a1690bf5e0db362",
    "6630dba3e117b5a343463c17",
    "6630eaf5b5ace8d893b36858",
    "6634c9174533d195b4be3207",
    "6634f52f4533d195b49c75e5",
    "6634f7b9445b1686c642bfb4",
    "6634c92a4533d195b4bf8f4b",
    "6634f5517e14581412dd61da",
    "6634f7ce7e14581412f21381",
    "6634c93c4533d195b4c033a4",
    "6634f563445b1686c63377e8",
    "6634f7e4445b1686c6445836",
    "662552ad197b879ecdfbe4d0",
    "6630dc26b5ace8d893ab894d",
    "6630eb55b5ace8d893b37401",
    "6634c99e4533d195b4c0d129",
    "6634f5a2445b1686c6350e43",
    "6634f83f4533d195b4af4df9",
    "6634c9b14533d195b4c0e23e",
    "6634f5b34533d195b49f4112",
    "6634f856445b1686c647b3cf",
    "6634c9c57e145814120fb8ce",
    "6634f5c44533d195b4a027c0",
    "6634f87d445b1686c64894a2",
    "662554f4197b879ecdfc3d08",
    "6630dc87b5ace8d893abf2ce",
    "6630ec7d289edc2e2209d800",
    "6634ca0c4533d195b4c3941a",
    "6634f6d07e14581412e86644",
    "6634f8b47e14581412fb5de0",
    "6634ca21445b1686c65fde7b",
    "6634f6e77e14581412e8f290",
    "6634f8c7445b1686c64df8b2",
    "6634ca30445b1686c66022bb",
    "6634f6f87e14581412e955ad",
    "6634f8db445b1686c64e66b8",
    "66255557b39a244a56fc49c8",
    "6630dce1b5ace8d893ac1ce3",
    "6625559d12aa66516a30fbf2",
    "6630ece0d257145d29fc1559",
    "6634ca777e14581412152210",
    "6634f745445b1686c63ee1a0",
    "6634cb544533d195b4c6ff95",
    "6634f917445b1686c6511eda",
    "6634caf87e14581412195016",
    "6634f758445b1686c63f133f",
    "6634cb6d445b1686c6660ece",
    "6634f92b445b1686c6522d64",
    "6634cb0e445b1686c6647a76",
    "6634f76b7e14581412eb5f36",
    "6634cb7f7e145814121ca86a",
    "6634f93a445b1686c652ed39",
  ],
  3: [
    "6628b6fa12aa66516a025186",
    "6630dd30dbd7fc19a844d5cd",
    "6630ed39d257145d29fc55ac",
    "6634f9c1445b1686c656543e",
    "6634fcc57e14581412208f47",
    "6634feb64533d195b4e037eb",
    "6634f9e5445b1686c657053d",
    "6634fcd6445b1686c66a8357",
    "6634feca7e14581412351e7d",
    "6634f9f7445b1686c65852a7",
    "6634fce5445b1686c66a88c2",
    "6634feda4533d195b4e0e84c",
    "6628b79212aa66516a02b5f6",
    "6630dd74dbd7fc19a844e2d1",
    "6630edaf1d239a7defd9e428",
    "6634fa347e14581412072f6d",
    "6634fd157e1458141223c082",
    "6634ff0f7e14581412372095",
    "6634fa45445b1686c65a4af1",
    "6634fd267e1458141224fe2d",
    "6634ff24445b1686c67f8268",
    "6634fa54445b1686c65a6658",
    "6634fd347e14581412256cc5",
    "6634ff34445b1686c680d10e",
    "6628b7eb12aa66516a030787",
    "6630ddb7b34afc3f4fc61176",
    "6630edffb5ace8d893b49eb1",
    "6634fa8b445b1686c65af7eb",
    "6634fd6e7e145814122947b8",
    "6634ff71445b1686c682d52d",
    "6634fa9e4533d195b4bed1f9",
    "6634fd7f4533d195b4d5c71b",
    "6634ff7e7e145814123c7d66",
    "6634fab24533d195b4bf4f31",
    "6634fd8d4533d195b4d61e4c",
    "6634ff8c7e145814123d48f0",
    "6628b87412aa66516a040bf3",
    "6630de491d239a7defd23eb2",
    "6630ee79dbd7fc19a8515c8b",
    "6634faec4533d195b4c04455",
    "6634fdc1445b1686c671f041",
    "6634ffbd7e145814123f47d5",
    "6634fafc7e145814120bd1bd",
    "6634fdd2445b1686c6720650",
    "6634ffcf7e14581412402d11",
    "6634fb0f445b1686c65fed06",
    "6634fddf445b1686c67217d8",
    "6634ffde4533d195b4e98547",
    "6628b8f912aa66516a056902",
    "6630deb6dbd7fc19a845e5c0",
    "6630ef57b5ace8d893b4ab4a",
    "6634fb417e145814120dd95d",
    "6634fe107e145814122d53a3",
    "663500114533d195b4eb7fd4",
    "6634fb537e145814120e201e",
    "6634fe1e7e145814122f1748",
    "6635001f7e1458141242f4bb",
    "6634fb644533d195b4c20360",
    "6634fe337e145814123064f1",
    "6635002e445b1686c688e6ae",
    "6628b94d12aa66516a05be0c",
    "6630df091d239a7defd2db51",
    "6630f1b2290ba4886b44890f",
    "6634fb9f7e1458141211aec3",
    "6634fe647e1458141231842e",
    "66350059445b1686c68b3013",
    "6634fbb27e14581412122d8e",
    "6634fe744533d195b4dd8962",
    "66350068445b1686c68c77e5",
    "6634fbc67e14581412136efb",
    "6634fe834533d195b4dd97e9",
    "66350075445b1686c68ce028",
    "6628ba0212aa66516a073a3e",
    "6630f1fdb5ace8d893b7290d",
    "6628ba8412aa66516a07f7a2",
    "6634fc074533d195b4c63020",
    "663500a1445b1686c68ebebb",
    "6634fc624533d195b4cbc875",
    "6634fc1b7e14581412170237",
    "663500af7e1458141248f0a5",
    "6634fc744533d195b4cc147e",
    "6634fc2b4533d195b4c79098",
    "663500c5445b1686c6900868",
    "6634fc8b7e145814121d317f",
  ],
  4: [
    "6628bb8d12aa66516a0980c2",
    "6630e768dbd7fc19a84c4848",
    "6630f275b5ace8d893b7aaf9",
    "66350076445b1686c68ce2fa",
    "6635091e445b1686c6dab84f",
    "66350bc5445b1686c6f903e8",
    "663500957e14581412480ce6",
    "6635092d7e14581412896e0d",
    "66350bd87e145814129efbf3",
    "663500aa445b1686c68f0b9f",
    "663509514533d195b43fb8a7",
    "66350bfc445b1686c6faad3f",
    "6628bc1612aa66516a0a64a8",
    "6630e7c6dbd7fc19a84d87fd",
    "6630f360f8752e60598e0ae0",
    "663500ea445b1686c691d9ae",
    "6635097f445b1686c6dfa6ee",
    "66350d88445b1686c6088adb",
    "663501084533d195b4f37fae",
    "663509924533d195b44270c8",
    "66350da0445b1686c6099054",
    "6635011c445b1686c693579a",
    "663509a37e145814128c0a4c",
    "66350dbd445b1686c60aae50",
    "6628bc6e12aa66516a0af8c7",
    "6630e855290ba4886b3d8293",
    "6630f3a1f8752e60598fbcd6",
    "663501d44533d195b4fb43ed",
    "66350a0f4533d195b44507eb",
    "66350df94533d195b466af6b",
    "663501ea7e145814125154cf",
    "66350a237e14581412914d7c",
    "66350e15445b1686c60e7d45",
    "663501fe4533d195b4fca356",
    "66350a35445b1686c6eadfa6",
    "66350e2b7e14581412b0a05a",
    "6628bd3912aa66516a0d01b2",
    "6630e8dcb5ace8d893b24767",
    "6630f464e117b5a34354ff68",
    "663502317e14581412543069",
    "66350a6d445b1686c6ee0cb5",
    "66350e6e4533d195b46a9b13",
    "663502454533d195b40029a6",
    "66350a7d445b1686c6eed9c7",
    "66350e7f7e14581412b301e8",
    "663502567e1458141254e5ca",
    "66350a92445b1686c6ef6ed1",
    "66350e904533d195b46d989c",
    "6628bd8112aa66516a0d702d",
    "6630e92d785924e9eb797adb",
    "6630f4b4b34afc3f4fdad70b",
    "663502897e14581412576b78",
    "66350aea445b1686c6f33979",
    "66350ec14533d195b4705f5b",
    "6635029e7e1458141258ea18",
    "66350afb7e14581412996c67",
    "66350ed84533d195b4710ce1",
    "663502af7e145814125908e5",
    "66350b164533d195b44f6c06",
    "66350eea4533d195b4711a18",
    "6628bdd412aa66516a0de203",
    "6630e996dbd7fc19a84e1793",
    "6628be3a12aa66516a0e7f3d",
    "66319ede289edc2e22ac59c5",
    "663503194533d195b40be9ea",
    "66350b597e145814129cf79f",
    "663508c7445b1686c6d4ff33",
    "66350f1b4533d195b4731bc2",
    "6635032d445b1686c6a3323e",
    "66350b6a445b1686c6f57e01",
    "663508d74533d195b43caff8",
    "66350f3c4533d195b473ff5e",
    "66350340445b1686c6a499eb",
    "66350b864533d195b453a1b8",
    "663508e8445b1686c6d7033f",
    "66350f534533d195b4757748",
  ],
  5: [
    "6628bee712aa66516a0ef9f8",
    "6630ea04dbd7fc19a84e3928",
    "6630f516e117b5a343569d01",
    "663509227e1458141289531e",
    "66350a117e14581412904cbc",
    "66350b624533d195b4526d04",
    "663509327e1458141289c098",
    "66350a1f4533d195b44522c5",
    "66350b717e145814129d68a7",
    "663509437e1458141289d364",
    "66350a2d7e1458141291f82c",
    "66350b82445b1686c6f71576",
    "6628bf5a12aa66516a0f3583",
    "6630ea93b34afc3f4fce702a",
    "6630f59a290ba4886b490e37",
    "663509787e145814128aac72",
    "66350a617e1458141294a727",
    "66350bae4533d195b454b50d",
    "66350985445b1686c6dfb138",
    "66350a7e445b1686c6eedb77",
    "66350bbd4533d195b4567d41",
    "66350993445b1686c6e091a7",
    "66350a8c445b1686c6ef3ee4",
    "66350bca7e145814129eafc8",
    "6628bfc812aa66516a0f6df7",
    "6630eaddf8752e60598aca9d",
    "6630f5d2f8752e605992d7ae",
    "663509bf445b1686c6e37533",
    "66350abd7e14581412967fff",
    "66350bf7445b1686c6fa9fc6",
    "663509ce7e145814128df12d",
    "66350acc445b1686c6f258d9",
    "66350c047e14581412a031aa",
    "663509dc445b1686c6e54123",
    "66350ae17e14581412994351",
    "66350c114533d195b4581e04",
    "6630eb39f8752e60598b3570",
    "6630f609785924e9eb80e496",
    "66350b0f4533d195b44f1c08",
    "66350c3b4533d195b4595d6c",
    "66350b1e4533d195b44f74bc",
    "66350c4a7e14581412a2e023",
    "66350b2f4533d195b451094a",
    "66350c59445b1686c6fce9a2",
  ],
};
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
function removeLocalStorageData(prefix) {
  const key = getLocalStorageKeyStartingWith(prefix);
  if (key) {
    localStorage.removeItem(key);
  }
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function createQA() {
  const questionOrder = getLocalStorageData("attempt_question_order");
  const testData = getLocalStorageData("test_data_of_attempt");
  if (!questionOrder || !testData) return;
  return {
    QA: questionOrder.questions
      .map((qOrder) => {
        const currentQuestion = testData.questions.find(
          (q) => q._id === qOrder.q
        );
        if (!currentQuestion) return null;
        const correctAnswer = currentQuestion.answers.find(
          (a) => a.isCorrectAnswer
        );
        return {
          question: currentQuestion._id,
          answers: [
            { answerId: correctAnswer._id, answerText: "", userText: "" },
          ],
          timeEslapse:
            ((testData.totalTime * 60) / questionOrder.questions.length) * 1000,
          topic: currentQuestion.topic,
          subject: currentQuestion.subject,
          unit: currentQuestion.unit,
          category: currentQuestion.category,
          isMissed: false,
          answerChanged: 0,
          crossedOutAnswers: [],
          hasMarked: false,
          wasMarked: false,
          offscreen: [],
          createdAt: currentQuestion.createdAt,
        };
      })
      .filter(Boolean),
  };
}
function changeAttemptData() {
  const attemptTime = getLocalStorageData("attempt_time");
  const testData = getLocalStorageData("test_data_of_attempt");

  if (!attemptTime) return;
  attemptTime.elapseSeconds = testData.totalTime * 60;
  attemptTime.testTimeCountDown = 0;
  const currentTime = new Date().getTime();
  attemptTime.savePoint = currentTime;
  attemptTime.lastCheckpointTime = currentTime - 1200000;
  return attemptTime;
}
function assignData() {
  const attemptDataKey = getLocalStorageKeyStartingWith("attempt_data");
  const attemptTimeKey = getLocalStorageKeyStartingWith("attempt_time");
  const attemptData = createQA();
  const attemptTime = changeAttemptData();
  if (attemptData && attemptTime) {
    localStorage.setItem(attemptDataKey, JSON.stringify(attemptData));
    localStorage.setItem(attemptTimeKey, JSON.stringify(attemptTime));
  }
}
function createUI() {
  console.log("Creating UI");
  if (document.getElementById("automationDirectUI")) {
    return; // Prevent duplication
  }
  const container = document.createElement("div");
  container.id = "automationDirectUI";
  container.style.position = "fixed";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, -50%)";
  container.style.zIndex = "1000";
  container.style.backgroundColor = "#F1F0F8"; // Lighter gray
  container.style.padding = "20px";
  container.style.border = "5px solid #000"; // Thick border for the container
  container.style.borderRadius = "20px"; // Rounded corners
  container.style.boxShadow =
    "20px 20px 18px 5px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)";
  container.style.maxWidth = "400px";
  container.style.width = "90%";
  container.style.textAlign = "center";
  container.style.fontFamily = "'Roboto', sans-serif";
  container.style.height = "300px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  const title = document.createElement("h2");
  title.textContent = "Automation Extension";
  title.style.color = "#000";
  title.style.marginBottom = "20px";
  title.style.textDecoration = "underline";
  container.appendChild(title);

  const levelSelect = document.createElement("select");
  levelSelect.style.width = "150px";
  levelSelect.style.padding = "10px";
  levelSelect.style.marginBottom = "20px";
  levelSelect.style.border = "1px solid #ccc";
  levelSelect.style.borderRadius = "10px";
  levelSelect.id = "levelSelect";

  const levels = [
    { text: "Level 1", value: "1" },
    { text: "Level 2", value: "2" },
    { text: "Level 3", value: "3" },
    { text: "Level 4", value: "4" },
    { text: "Level 5", value: "5" },
  ];

  levels.forEach((level) => {
    const option = document.createElement("option");
    option.text = level.text;
    option.value = level.value;
    levelSelect.appendChild(option);
  });

  container.appendChild(levelSelect);

  const questionStart = document.createElement("input");
  questionStart.type = "number";
  questionStart.placeholder = "Start";
  questionStart.style.width = "150px";
  questionStart.style.padding = "10px";
  questionStart.style.marginBottom = "20px";
  questionStart.style.border = "1px solid #ccc";
  questionStart.style.borderRadius = "10px";
  questionStart.value = 1;
  questionStart.min = 1;
  questionStart.max = TESTIDS[levelSelect.value].length;
  container.appendChild(questionStart);

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.style.width = "150px";
  startButton.style.padding = "15px";
  startButton.style.backgroundColor = "#28a745";
  startButton.style.color = "white";
  startButton.style.border = "none";
  startButton.style.borderRadius = "10px";
  startButton.style.cursor = "pointer";
  startButton.style.marginBottom = "20px"; // Gap between buttons
  startButton.style.transition =
    "background-color 0.3s ease, transform 0.2s ease";
  startButton.onmouseover = () => {
    startButton.style.backgroundColor = "#3ae56d"; // Brighter green
    startButton.style.transform = "scale(1.05)";
  };
  startButton.onmouseout = () => {
    startButton.style.backgroundColor = "#28a745";
    startButton.style.transform = "scale(1)";
  };
  startButton.onclick = () => {
    const selectedLevel = levelSelect.value;
    let startQuestion = questionStart.value;
    setLocalData(selectedLevel, startQuestion);
  };
  container.appendChild(startButton);

  const stopButton = document.createElement("button");
  stopButton.textContent = "Stop";
  stopButton.style.width = "150px";
  stopButton.style.padding = "15px";
  stopButton.style.backgroundColor = "#dc3545";
  stopButton.style.color = "white";
  stopButton.style.border = "none";
  stopButton.style.borderRadius = "10px";
  stopButton.style.cursor = "pointer";
  stopButton.style.transition =
    "background-color 0.3s ease, transform 0.2s ease";
  stopButton.onmouseover = () => {
    stopButton.style.backgroundColor = "#f74c4c"; // Brighter red
    stopButton.style.transform = "scale(1.05)";
  };
  stopButton.onmouseout = () => {
    stopButton.style.backgroundColor = "#dc3545";
    stopButton.style.transform = "scale(1)";
  };
  stopButton.onclick = stopAll;
  container.appendChild(stopButton);

  document.body.appendChild(container);
}
function removeUI() {
  const container = document.getElementById("automationDirectUI");
  if (container) {
    container.remove();
  }
}
function removeAlertify() {
  const alertElements = document.querySelectorAll(".alertify");
  alertElements.forEach((element) => element.remove());
}
function removeFraud() {
  const fraudKey = getLocalStorageKeyStartingWith("attempt_fraud");
  if (fraudKey) {
    localStorage.removeItem(fraudKey);
  }
}
function removePreviousLocalData() {
  removeLocalStorageData("attempt_data");
  removeLocalStorageData("attempt_time");
  removeLocalStorageData("attempt_question_order");
  removeLocalStorageData("attempt_question_position");
  removeLocalStorageData("test_data_of_attempt");
  removeLocalStorageData("offscreen");
  removeLocalStorageData("attempt_fraud");
  removeLocalStorageData("attempt_test_map");
}
async function submitFeedback() {
  await delay(700);
  localStorage.removeItem("run");
  const stars = document.querySelectorAll(".stars .nav li > a");
  if (stars.length) stars[stars.length - 1].click();
  const feedbackButtons = document.querySelectorAll(".float-right > .btn");
  if (feedbackButtons.length >= 3) {
    feedbackButtons[0].click();
    feedbackButtons[2].click();
  }
  const submitButtons = document.querySelectorAll(".ratings-area-wrap button");
  if (submitButtons.length) submitButtons[0].click();
  await delay(500);
}
function setLocalData(testNo, index = 1) {
  if (index > TESTIDS[testNo].length) index = TESTIDS[testNo].length + 1;
  localStorage.setItem("level", testNo);
  localStorage.setItem("index", index - 1);
  attemptLevelTest();
  // main();
}
function stopAll() {
  stopMonitoringLocalStorageChanges();
  removeUI();
  removeAlertify();
  removeLocalStorageData("level");
  removeLocalStorageData("index");
  removeLocalStorageData("run");
  // window.location.href = "https://lpu.myperfectice.com/student/home";
}
function getAnswersObject() {
  let allAnswers = {};
  const questionOrder = getLocalStorageData("attempt_question_order");
  const testData = getLocalStorageData("test_data_of_attempt");
  if (!questionOrder || !testData) return;

  for (let i = 0; i < questionOrder.questions.length; i++) {
    const questionIndex = questionOrder.questions[i].q;
    let ansArray;
    for (let question of testData.questions) {
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
  return allAnswers;
}
function getQuestionsLength() {
  const questionOrder = getLocalStorageData("attempt_question_order");
  if (!questionOrder) return 0;
  return questionOrder.questions.length;
}
function changeTime() {
  const testData = getLocalStorageData("test_data_of_attempt");
  const questionsData = getLocalStorageData("attempt_data");
  const totalTimeData = getLocalStorageData("attempt_time");
  const questionOrder = getLocalStorageData("attempt_question_order");

  const totalTimeKey = getLocalStorageKeyStartingWith("attempt_time");
  const questionKey = getLocalStorageKeyStartingWith("attempt_data");

  if (!testData || !questionsData || !totalTimeData || !questionOrder) {
    console.log("Return 1");
    return;
  }

  if (questionsData.QA.length !== questionOrder.questions.length) {
    console.log("Return 2");
    return;
  }

  const totalTime = testData.totalTime;
  const localStartTime = new Date(totalTimeData.localStartTime).getTime();
  const totalTimeInMillis = totalTime * 60 * 1000;

  for (let i = 0; i < questionOrder.questions.length; i++) {
    questionsData.QA[i].timeEslapse = totalTimeInMillis / getQuestionsLength();
  }
  localStorage.setItem(questionKey, JSON.stringify(questionsData));
  totalTimeData.elapseSeconds = totalTime * 60;
  totalTimeData.testTimeCountDown = 0;

  const minutesToAdd = 20 * 60 * 1000; // 20 minutes in milliseconds
  const savePoint = localStartTime + minutesToAdd;
  const lastCheckpointTime = savePoint - 3 * 1000; // 3 seconds later

  totalTimeData.savePoint = savePoint;
  totalTimeData.lastCheckpointTime = lastCheckpointTime;

  let anObject = {};
  anObject["ElapseSeconds"] = totalTimeData.elapseSeconds;
  anObject["TimeCountDown"] = totalTimeData.testTimeCountDown;
  anObject["savePoint"] = new Date(totalTimeData.savePoint);
  anObject["lastCheckpointTime"] = new Date(totalTimeData.lastCheckpointTime);
  anObject["serverStartTime"] = totalTimeData.serverStartTime;
  anObject["localStartTime"] = totalTimeData.localStartTime;

  localStorage.setItem(totalTimeKey, JSON.stringify(totalTimeData));
  if (document.hasFocus()) {
    navigator.clipboard
      .writeText(JSON.stringify(anObject, null, 2))
      .then(() => {
        console.log("Copied to clipboard successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy to clipboard: ", err);
      });
  } else {
    console.log("Document is not focused. Clipboard write operation skipped.");
  }
}

function clickFirstQuestion() {
  const firstQuestion = document.querySelector(".question-table-item .btn");
  if (!firstQuestion) {
    console.log("First Question not found");
    return;
  }
  firstQuestion.click();
  console.log("First Question clicked");
}
function selectAnswer() {
  const options = document.querySelectorAll(
    ".question-box.ng-star-inserted > .question-answers p"
  );
  const optionsCheckBoxes = document.querySelectorAll(
    ".question-answers > div label"
  );
  let index;
  for (let i = 0; i < options.length; i++) {
    let questionNumber = Number(
      document.querySelector(".count > span").innerHTML
    );
    let allAnswers = getAnswersObject();
    let correctAnswerText = allAnswers[questionNumber];
    if (options[i].innerHTML === correctAnswerText) {
      index = i;
      break;
    }
  }
  if (!optionsCheckBoxes[index]) {
    return;
  }

  if (index !== undefined && !options[index].closest(".answered")) {
    optionsCheckBoxes[index].click();
  }
}
function clickNextButton() {
  const nextButton = document.querySelector(".save-next-btn a");
  if (!nextButton) return;
  nextButton.click();
}
function startMonitoringLocalStorageChanges() {
  monitoringInterval = setInterval(() => {
    console.log("Monitoring");
    changeTime();
    removeFraud();
    removeAlertify();
  }, 100);
}
function stopMonitoringLocalStorageChanges() {
  if (monitoringInterval !== null) {
    clearInterval(monitoringInterval);
    monitoringInterval = null;
  }
}
function injectFullscreenButton() {
  const fullscreenButton = document.createElement("button");
  fullscreenButton.id = "trigger-fullscreen";
  fullscreenButton.style.display = "none";
  document.body.appendChild(fullscreenButton);
  fullscreenButton.addEventListener("click", () => {
    if (
      !(
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        document.webkitFullscreenElement
      )
    ) {
      const requestFullscreen =
        document.documentElement.requestFullscreen ||
        document.documentElement.mozRequestFullScreen ||
        document.documentElement.webkitRequestFullscreen ||
        document.documentElement.msRequestFullscreen;
      if (requestFullscreen) {
        requestFullscreen
          .call(document.documentElement)
          .catch((err) => console.error(err));
      }
    }
  });
}
function simulateUserGesture() {
  const fullscreenButton = document.getElementById("trigger-fullscreen");
  if (fullscreenButton) {
    fullscreenButton.click();
  }
}
async function triggerFullScreen() {
  var a = document.querySelector(".question-table-item div");
  if (a) a.click();
  var b = document.querySelector(".ajs-button.ajs-ok");
  var c = document.querySelector(".ajs-modal");
  if (b) b.click();
  if (c) b.click();
}
async function main() {
  localStorage.setItem("run", true);
  await delay(2000);
  triggerFullScreen();
  injectFullscreenButton();
  simulateUserGesture();

  await delay(5000);
  for (let i = 0; i < getQuestionsLength() + 5; i++) {
    await delay(200);
    selectAnswer();
    clickNextButton();
  }
  startMonitoringLocalStorageChanges();
  await delay(1000);
  location.reload();
  await delay(100);
  stopMonitoringLocalStorageChanges();
}
async function attemptLevelTest() {
  const testNo = localStorage.getItem("level");
  const currentIndex = localStorage.getItem("index");
  if (!testNo || !currentIndex) return;
  if (currentIndex >= TESTIDS[testNo].length) {
    console.log("All tests attempted");
    stopAll();
    return;
  }
  const currentTestId = TESTIDS[testNo][currentIndex];
  localStorage.setItem("index", parseInt(currentIndex) + 1);
  console.log("Redirecting to test", currentTestId);
  window.location.href = `https://lpu.myperfectice.com/student/take-test/${currentTestId}`;
}
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "start") {
    if (document.getElementById("automationDirectUI")) removeUI();
    else createUI();
    sendResponse({ status: "started" });
  } else if (message.action === "stop") {
    stopAll();
    removePreviousLocalData();
    stopMonitoringLocalStorageChanges();
    sendResponse({ status: "stopped" });
  } else if (message.action === "submitFeedback") {
    removeUI();
    await submitFeedback();
    stopMonitoringLocalStorageChanges();
    attemptLevelTest();
    sendResponse({ status: "feedback submitted" });
  } else if (message.action === "runTest") {
    const run = localStorage.getItem("run");
    if (!run) {
      main();
    }
  }
});
