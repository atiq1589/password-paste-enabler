chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == 'pastePassword') {
        $('input[type=password')[0].value = request.password;
    }
});

(function () {
    if ($('input[type=password]').length > 0) {
        chrome.runtime.sendMessage({
            type: "showPageAction"
        });
    }
})()
