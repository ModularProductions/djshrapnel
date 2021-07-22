document.getElementById("email").addEventListener("click", function(e) {
  const username = "info",
    domain = "djshrapnel.com";
  window.location.href = "mailto:" + username + "@" + domain;
}, false);