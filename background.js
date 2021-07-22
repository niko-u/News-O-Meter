console.log("Background running...");

let text = "";
window.rating;
window.percentage;

chrome.runtime.onMessage.addListener(receiver);

function receiver (request, sender, sendResponse) {
    console.log(request);
    text = request.text;
}



