'use strict';

const images = [
    { 'id': '1', 'url':'./img/girl1.jpeg' },
    { 'id': '2', 'url':'./img/girl2.jpeg' },
    { 'id': '3', 'url':'./img/girl3.jpeg' },
    { 'id': '4', 'url':'./img/girl4.jpeg' },
    { 'id': '5', 'url':'./img/girl5.jpeg' },
    { 'id': '6', 'url':'./img/girl6.jpeg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);