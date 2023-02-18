"use strict";

let mobileMenu = document.querySelector('#container-mobile');
let closeBtn = document.querySelector('.close-btn');
let toggleBtn = document.querySelector('.toggle-btn');
let overlay = document.getElementById('overlay');



toggleBtn.addEventListener('click', function (e) {
    // e.preventDefault();
    // console.log(mobileMenu.classList);
    // if (mobileMenu.classList.contains('show-mobile-container')) {
    //     mobileMenu.classList.remove('show-mobile-container');
    // } else {
    //     mobileMenu.classList.add('show-mobile-container');
    // }

    mobileMenu.classList.toggle('show-mobile-container');
    overlay.style.opacity = '1'; // having the overlay open with the active //
    document.querySelector("body").style.overflow = 'hidden'; // setting the overlay scrollbar to be visible - stop overlay from showing up while scrolling
});

closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('show-mobile-container');
    overlay.style.opacity = '0' // having the overlay close with the x button for the form //
    document.querySelector("body").style.overflow = 'visible'; // setting the overlay scrollbar to be hidden in order to scroll
});

overlay.addEventListener('click', () => {
    // form.style.display = "none";
    overlay.classList.add('active'); // having the overlay close with the form //
    document.querySelector("body").style.overflow = 'visible'; // setting the overlay scrollbar to be visible in order to scroll
});