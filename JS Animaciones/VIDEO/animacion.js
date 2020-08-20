var video = document.querySelector(".video");

video.addEventListener("play", function() {
    alert("Le diste play");
});

video.addEventListener("ended", function() {
    alert("acabo");
});

video.addEventListener("seeking", function() {
    alert("adelantaste al segundo " + this.currentTime)
});