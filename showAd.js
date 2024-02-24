let img = document.createElement('img')
let mainContent = document.querySelector(".main-content-obb");
const audio = document.querySelector("#audio_");
const data = [
    { path: "./data/dip.png" },

    // {
    //     path: "./data/oliveiraBB-banner.png"
    // },

    // {
    //     path: "./data/qp-oliv.png"
    // },

    // { path: "./data/QQQ.png" },


];

let counter = 0;

const date = new Date()
const hour = date.getHours();
audio.style.display = "none";

setInterval(() => {
    img.src = data[counter].path;
    img.className = "banner"
    mainContent.appendChild(img);
    counter++;

    if (counter === data.length) counter = 0;
    if (hour >= 16 && audio.paused) audio.play();

}, 3000); 
