const videos = ["images/vid1.mp4", "images/vid2.mp4"];
let currentVideoIndex = 0;


const videoElement = document.getElementById("background-video");
const videoSource = document.getElementById("video-source");


function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoSource.src = videos[currentVideoIndex];
    videoElement.load();
    videoElement.play();
}


videoElement.addEventListener("ended", playNextVideo);


const nav = document.querySelector("nav");
const navTitle = document.getElementById("nav-title");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
