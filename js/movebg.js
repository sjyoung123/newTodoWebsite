    //video2 > Video by Kelly Lacy from Pexels.
    //video3 > Video by Joe Hackney from Pixabay
const videoSrc = document.querySelector("#video-src");
const player = document.querySelector("video");
const weather = document.querySelector("#weather");
const videos = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4"
];
const chosenVideo = videos[Math.floor(Math.random()*videos.length)];
player.pause();
videoSrc.src = `video/${chosenVideo}`;
player.load();
player.play();
if(chosenVideo==="video2.mp4"){
    weather.style = "color:black";
    searchOption.style = "color:black";
}else if(chosenVideo ==="video3.mp4"){
    todoList.style = "color:#7A7758";
}
