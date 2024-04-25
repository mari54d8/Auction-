let myBids = document.querySelector('.myBids');
let body = document.querySelector('body');
let close = document.querySelector('.close');


myBids.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

close.addEventListener('click', () => {
    body.classList.toggle('showCart');
})