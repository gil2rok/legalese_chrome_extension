chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    //document.getElementById('appendText').innerText = request.source
    plainText = request.source
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    //var prob = checkProblematicness(plainText);
    var prob = 4;
    if (prob >= 10){document.body.style.backgroundColor = "red";}
    else if (prob >= 3) {document.body.style.backgroundColor = "orange";}
    else if (prob < 3) {document.body.style.backgroundColor = "lime";}
    //document.getElementById('appendText').innerText = plainText;
  }, false);
}, false);

function checkProblematicness(text){
  var lines = text.split(/[!.?[\r\n]]+/);
  var prob_num = 0;
  var prob_sentences = [];
  var numOfLines = lines.length;
  var prob_len = prob_clauses.length;
  for (var i = 0; i < numOfLines; i++) {
    lines[i] = lines[i].toLowerCase();
    for (var j = 0; j < prob_len; j++) {
      if (lines[i].includes(prob_clauses[j]){
        prob_num += 1;
        prob_sentences.push(lines[i]);
      };
  };
};
return prob_num;
}

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

prob_clauses = ["disclose to any third party",
"you may not disclose the results of any benchmark test",
"revoke the DRM Software's right",
"revocation lists",
"automatically downloaded and installed",
"disabling your ability"
];
