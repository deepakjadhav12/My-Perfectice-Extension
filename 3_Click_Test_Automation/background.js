console.log("Background script loaded");

chrome.commands.onCommand.addListener((command) => {
  if (command === "run-script") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "start" });
    });
  } else if (command === "stop-script") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (tab.url && tab.url.includes("lpu.myperfectice.com/student/take-test")) {
      chrome.tabs.sendMessage(tabId, { action: "runTest" });
    } else if (
      tab.url &&
      tab.url.includes("lpu.myperfectice.com/student/test-feedbacks")
    ) {
      chrome.tabs.sendMessage(tabId, { action: "submitFeedback" });
    }
  }
});
