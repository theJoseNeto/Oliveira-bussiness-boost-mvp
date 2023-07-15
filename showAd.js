let img = document.createElement('img')
let mainContent = document.querySelector(".main-content-obb");

const data = [

    {
        path: "./data/oliveiraBB-banner.png"
    },

        {
        path: "./data/qp-oliv.png"
    }, 

    { path: "./data/QQQ.png"},


];

let counter = 0;

setInterval(() => {
    img.src = data[counter].path;
    img.className = "banner"
    mainContent.appendChild(img);
    counter++;
    if (counter === data.length) counter = 0;

}, 8000); 
