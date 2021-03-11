var iconHamburger = $("i.fa-bars");
var hamburgerList = $(".hamburger-menu");
var closeCross = $("i.fa-times");

iconHamburger.click(function() {
   hamburgerList.fadeIn("slow");
}
);

closeCross.click(function() {
   hamburgerList.fadeOut("slow");
}
);
