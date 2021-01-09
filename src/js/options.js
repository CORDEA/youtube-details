import {MDCTextField} from "@material/textfield";

const textField = new MDCTextField(document.querySelector(".mdc-text-field"));
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const key = textField.value;
    if (key.length <= 0) {
        return;
    }
    // TODO
});
