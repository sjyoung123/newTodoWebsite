const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");


document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;