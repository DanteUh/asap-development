
function runScroll(event) {
	event.preventDefault();
	scrollTo(document.body, 0, 300);
	scrollTo(document.documentElement, 0, 300);
}

var scrollme = document.getElementById("scrollTop");
scrollme.addEventListener("click",runScroll,false);

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}
