/* jshint esversion: 6 */

const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.6;

// Set first image opacity
images[0].style.opacity = opacity;

images.forEach(image => image.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset opacity of all images
  images.forEach(image => image.style.opacity = 1);

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade-in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5s
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change opacity to opacity variable
  e.target.style.opacity = opacity;
}
