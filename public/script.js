// const express = require('express');
// const app = express();

const images = document.querySelectorAll('.slider-images img');
let currentIndex = 0;

function slideImages() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.querySelector('.slider-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically scroll to next image every 3 seconds
setInterval(slideImages, 3000);





