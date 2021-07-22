console.log("Content script running...");

window.addEventListener("mouseup", grabText);


//grabs the selected text
function grabText() {
    let selected = window.getSelection().toString();
    console.log(selected);

    if (selected.length > 0) {
        let message = {
            text: selected
        };
        chrome.runtime.sendMessage(message);
    }
}
