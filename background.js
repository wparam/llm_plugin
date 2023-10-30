const apilist = [
    {
        url: 'https://chat.openai.com/backend-api/conversation'
    }
]
console.log('abcd')
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log(details)
        if (details.url && apilist.findIndex(al => details.url.includes(al.url)) >= 0) {
            console.log("Captured API Request:", details);
            // TODO: Send data to your local server
        }
    },
    {urls: ["<all_urls>"]},
    ["requestBody"]
);

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        if (details.url && apilist.findIndex(al => details.url.includes(al.url)) >= 0) {
            console.log("Captured API Response Headers:", details);
            // TODO: Send data to your local server
        }
    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
);
