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
  icon.addEventListener("click", function() {
    clearInterval(spin);
  });
})();

 icon.addEventListener("click", function() {
   nav.style.display = "block";
   icon.style.display = "none";
   Array.prototype.forEach.call(anchor, function(a) {
     if(a.style.visibility != "visible") {
       a.style.visibility = "visible";
     }
     else if(a.style.visibility = "visible") {
       a.style.visibility = "hidden";
     }
   });
  });
