$(function(){
    $('#password').on('change keyup paste', function(){
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: "pastePassword", password: $('#password').val()});
        });
    })
});
