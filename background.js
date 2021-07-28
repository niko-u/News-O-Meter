
function loadScript(link) {
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = link;
    document.head.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/universal-sentence-encoder")

console.log("Background running...");
loadModel();

window.text = "";
window.rating;
window.percentage;

chrome.runtime.onMessage.addListener(receiver);

function receiver (request, sender, sendResponse) {
    if (request.start == true) {
        start();
    }
    console.log(request);
    text = request.text;
}

async function loadModel() {
    console.log("Loading model...");
    model = undefined;
    model = await tf.loadLayersModel("https://raw.githubusercontent.com/niko-u/News-O-Meter/main/model.json");
    console.log("Model Loaded");
}

function start() {
    input = textPreprocessing(text);
    //var output = model.predict(input);
    console.log(input);
}

async function textPreprocessing(text) {
    text = text.trim()
    text = use.loadTokenizer().then(tokenizer => {
        tokenizer.encode(text);
      });
    console.log(text);    
    return text;
}
