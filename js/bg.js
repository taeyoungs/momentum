const body = document.querySelector("body");

const image = new Image();

function randomImage() {
    fetch(`https://source.unsplash.com/1600x900/?landscape`).then((response) => {   
    console.log(response);
    image.src = `${response.url}`;
    image.classList.add("bgImage");
    body.appendChild(image);
  });
}

function init() {
    randomImage();
}

init();