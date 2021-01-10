import {findVideo} from "./youtube_api";

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

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: 'youtube-details',
        title: 'Check details of the video',
        contexts: ['selection']
    }, function () {
        if (chrome.extension.lastError) {
            console.log(chrome.extension.lastError.message);
        }
    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    const url = info.linkUrl;
    if (!url.startsWith('https://www.youtube.com/watch')) {
        return;
    }
    const parsed = new URL(url);
    const id = parsed.searchParams.get('v');
    if (!id) {
        return;
    }
    chrome.storage.local.get([API_KEY], async function (result) {
        const video = findVideo(result[API_KEY], id);
        if (video) {
            chrome.browserAction.openPopup(function (view) {
                view.render(video);
            });
        }
    });
});
