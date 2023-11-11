import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
);

gallery.insertAdjacentHTML('beforeend', markup.join(''));

const modalImageEl = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['←', '→'],
});

//Варіант 2:
// const modalImageEl = $'.gallery a'.simpleLightbox({
//   captionsData: 'alt',
//   captionDelay: 250,
//   navText: ['←', '→'],
// });
