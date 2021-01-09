import {MDCTextField} from "@material/textfield";

const API_KEY = "apiKey";

const textField = new MDCTextField(document.querySelector(".mdc-text-field"));
const button = document.getElementById("button");

chrome.storage.sync.get([API_KEY], function (items) {
    textField.value = items[API_KEY];
});

button.addEventListener("click", function () {
    const key = textField.value;
    if (key.length <= 0) {
        return;
    }
    const sets = {};
    sets[API_KEY] = key;
    chrome.storage.sync.set(sets, function () {
        button.disabled = true;
    });
});
