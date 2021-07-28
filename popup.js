console.log("Popup script is running...");

let backgroundPage = chrome.extension.getBackgroundPage();

let text = backgroundPage.text;
let rating = backgroundPage.rating;
let percentage = backgroundPage.rating;

console.log(text);

document.getElementById("input").addEventListener("click", message());

function message() {
    chrome.runtime.sendMessage({
        start: true
    })
}
