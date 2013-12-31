/*global chrome */

chrome.browserAction.onClicked.addListener(function (tab) {
    var tweetPage = "https://twitter.com/share";
    tweetPage += "?text=" + encodeURIComponent(tab.title);
    tweetPage += "&url=" + encodeURIComponent(tab.url);

    chrome.tabs.create({
        url: tweetPage,
        active: true
    });
});
