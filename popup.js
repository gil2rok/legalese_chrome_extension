chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    //document.getElementById('appendText').innerText = request.source
    plainText = request.source
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var prob = checkProblematicness(plainText);
    if (prob >= 10){document.body.style.backgroundColor = "red";}
    else if (prob >= 3) {document.body.style.backgroundColor = "orange";}
    else if (prob < 3) {document.body.style.backgroundColor = "lime";}
    //document.getElementById('appendText').innerText = plainText;
  }, false);
}, false);

function checkProblematicness(text){
  return 1;
};

function onWindowLoad() {
  var div = document.getElementById('appendText')

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      div.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.div;
    }
  });

}
window.onload = onWindowLoad;
