const API_KEY = "apiKey";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.command) {
        case 'restoreApiKey':
            chrome.storage.local.get([API_KEY], function (result) {
                sendResponse(result[API_KEY]);
            });
            break;
        case 'storeApiKey':
            const values = {};
            values[API_KEY] = request.apiKey;
            chrome.storage.local.set(values, function () {
                sendResponse();
            });
            break;
    }
    return true;
});
