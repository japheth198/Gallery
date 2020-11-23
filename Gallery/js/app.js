const image = document.querySelector('#image');
    console.log(image);
    image.src = 'img/lambo.jpg';
    event.preventDefault();

const mainBox = document.querySelector('.main-box');
const sharkBox = document.querySelector('.shark');
const jumpBox = document.querySelector('.jump');
const hammerBox = document.querySelector('.hammer');
const attackBox = document.querySelector('.attack');
const mainBoxText = document.querySelector('.main-box_text')


sharkox.addEventListener('click', (event) => {
const sharkBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(sharkBoxcolor);
const sharkBoxText = event.target.innerText
console.log(sharkBoxText);
console.log(image);
    image.src = 'img/shark.jpg';
    event.preventDefault();
mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});

jumpBox.addEventListener('click', (event) => {
const jumpBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(jumpBoxcolor);
const jumpBoxText = event.target.innerText
console.log(jumpBoxText);
console.log(image);
    image.src = 'img/jump.jpg';
    event.preventDefault();
mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});

hammerBox.addEventListener('click', (event) => {
const hammerBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(hammerBoxcolor);
const hammerBoxText = event.target.innerText
console.log(hammerBoxText);
console.log(image);
    image.src = 'img/hammer.jpg';
    event.preventDefault();
mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});

attackBox.addEventListener('click', (event) => {
const attackBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(yellowBoxcolor);
const attackBoxText = event.target.innerText
console.log(attackBoxText);
console.log(image);
    image.src = 'img/atteck.jpg';
    event.preventDefault();
mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});