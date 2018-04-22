document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    popup = document;
      document.body.style.backgroundColor = "red";
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var theText = document.body.innerText

    // our logic
    });
  }, false);
}, false);
