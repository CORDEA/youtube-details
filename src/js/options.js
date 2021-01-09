import {MDCTextField} from "@material/textfield";

const API_KEY = "apiKey";

const textField = new MDCTextField(document.querySelector(".mdc-text-field"));
const button = document.getElementById("button");

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
