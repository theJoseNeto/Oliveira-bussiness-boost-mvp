let img = document.createElement('img')
let mainContent = document.querySelector(".main-content");

const data = [
    {
        path: "./data/OliveiraBB.png",
    },
    {
        path: "./data/OliveiraBB.png",
    },

]

let counter = 0;

setInterval(() => {
    img.src = data[counter].path;
    img.className = "banner"
    mainContent.appendChild(img);
    counter++;
    if (counter === data.length) counter = 0;

}, 3000)
