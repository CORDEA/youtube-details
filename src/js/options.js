import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const button = document.getElementById('button');

chrome.runtime.sendMessage({command: 'restoreApiKey'}, response => {
    textField.value = response;
});

button.addEventListener('click', () => {
    const key = textField.value;
    if (key.length <= 0) {
        return;
    }
    chrome.runtime.sendMessage({command: 'storeApiKey', apiKey: key}, () => {
        button.disabled = true;
    });
});
