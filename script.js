var nav = document.getElementById("home-nav");
var anchor = nav.getElementsByTagName("a");
var icon = document.getElementById("icon");

 (function navSpin() {
   spin = setInterval(function() {
   if(icon.className != "rotate") {
    icon.className = "rotate";
    setTimeout(function() {
      icon.className = "";
    }, 1500);
  }
}, 1499);
})();
