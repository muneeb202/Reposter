console.log("file...");
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons and tab content
  var tabButtons = document.getElementsByClassName("nav-link");
  var tabContent = document.getElementsByClassName("tab-pane");

  // Function to show the selected tab content and hide others
  function showTab(tabId) {
    Array.from(tabContent).forEach(function (tab) {
      if (tab.id === tabId) {
        tab.classList.add("show", "active");
      } else {
        tab.classList.remove("show", "active");
      }
    });
  }
  console.log(tabButtons);
  for (var i = 0; i < tabButtons.length; i++) {
    var button = tabButtons[i];
    console.log("added");
    // button.addEventListener("click", function () {
    //   console.log("clicked");
    //   var tabId = this.getAttribute("aria-controls");
    //   showTab(tabId);
    // });
  }

  // Event listener for tab button clicks
  Array.from(tabButtons).forEach(function (button) {
    console.log("added");
    button.addEventListener("click", function () {
      console.log("clicked");
      var tabId = this.getAttribute("aria-controls");
      showTab(tabId);
    });
  });
  // Show the initial active tab content
  var activeTabId = null;
  var activeTabLinks = document.getElementsByClassName("nav-link active");
  if (activeTabLinks.length > 0) {
    activeTabId = activeTabLinks[0].getAttribute("aria-controls");
  }
  showTab(activeTabId);
});
