console.log("Popup script is running...");

//listen for button click and start communication to content script
document.getElementById("input").addEventListener("click", start);

function start() {
    //sending message to content script to begin running
    chrome.tabs.sendMessage(tab.id, "true");
}